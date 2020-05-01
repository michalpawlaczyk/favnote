import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'hooks/useParams';
import { removeItem } from 'actions';
import ItemsTemplate from 'templates/ItemsTemplate';
import Card from 'components/molecules/Card/Card';

const ItemsView = () => {
  const { type } = useParams();
  const items = useSelector((state) => state[type]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleItemClick = (id) => {
    history.push(`/item?type=${type}&id=${id}`);
  };

  return (
    <ItemsTemplate>
      {items.length > 0 &&
        items.map(({ id, title, twitterURL, articleURL, description }) => (
          <Card
            key={id}
            title={title}
            description={description}
            twitterURL={twitterURL}
            articleURL={articleURL}
            onRemoveClick={() => dispatch(removeItem(type, id))}
            onItemClick={() => handleItemClick(id)}
          />
        ))}
    </ItemsTemplate>
  );
};

export default ItemsView;
