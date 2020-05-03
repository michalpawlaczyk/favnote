import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeItem } from 'actions';
import { useParams } from 'hooks/useParams';
import CardBigView from 'components/molecules/CardBigView/CardBigView';

const ItemView = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const { type, id } = useParams();
  const idAsNumber = parseInt(id, 10);
  const dispatch = useDispatch();
  const history = useHistory();
  const { title, description } = useSelector((state) =>
    state[type].find((item) => item.id === idAsNumber),
  );
  const handleRemove = () => {
    dispatch(removeItem(type, idAsNumber));
    history.push(`/items?type=${type}`);
  };
  const handleEdit = () => {
    setIsEditClicked(!isEditClicked);
  };

  return (
    <>
      {title && description ? (
        <CardBigView
          onRemoveClick={handleRemove}
          onEditClick={handleEdit}
          title={title}
          description={description}
          isEditClicked={isEditClicked}
          pageType={type}
          itemId={idAsNumber}
        />
      ) : (
        <h2>Item not found</h2>
      )}
    </>
  );
};

export default ItemView;
