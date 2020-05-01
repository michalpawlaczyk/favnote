import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'hooks/useParams';
import { removeItem } from 'actions';
import ItemsTemplate from 'templates/ItemsTemplate';
import Card from 'components/molecules/Card/Card';

const ItemsView = () => {
  const { type } = useParams();
  const items = useSelector((state) => state[type]);
  const dispatch = useDispatch();

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
          />
        ))}
    </ItemsTemplate>
  );
};

export default ItemsView;
