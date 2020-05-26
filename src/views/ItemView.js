import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeItem } from 'actions';
import { useParams } from 'hooks/useParams';
import CardBigView from 'components/molecules/CardBigView/CardBigView';
import MainTemplate from 'templates/MainTemplate';

const ItemView = () => {
  const [isEditClicked, setIsEditClicked] = useState(false);
  const { type, id } = useParams();
  const idAsNumber = parseInt(id, 10);
  const dispatch = useDispatch();
  const history = useHistory();
  const { title, description } = useSelector(({ itemsReducer }) => {
    const tmp = itemsReducer[type];
    return tmp[idAsNumber] ? tmp[idAsNumber] : {};
  });
  const handleRemove = () => {
    dispatch(removeItem(type, idAsNumber));
    history.push(`/items?type=${type}`);
  };
  const handleEdit = () => {
    setIsEditClicked(!isEditClicked);
  };

  return (
    <MainTemplate>
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
    </MainTemplate>
  );
};

export default ItemView;
