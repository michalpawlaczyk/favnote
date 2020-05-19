import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'hooks/useParams';
import { removeItem, fetchItems } from 'actions';
import ItemsTemplate from 'templates/ItemsTemplate';
import Card from 'components/molecules/Card/Card';
import MainTemplate from 'templates/MainTemplate';

const ItemsView = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector(({ itemsReducer }) => (itemsReducer[type] ? itemsReducer[type] : {}));
  const handleItemClick = (id) => {
    history.push(`/item?type=${type}&id=${id}`);
  };

  useEffect(() => {
    dispatch(fetchItems(type));
  }, [dispatch, type]);

  return (
    <MainTemplate>
      <ItemsTemplate>
        {typeof items !== 'undefined'
          ? Object.keys(items).map((item) => {
              const { id, title, description, twitterURL, articleURL } = items[item];
              return (
                <Card
                  key={id}
                  title={title}
                  description={description}
                  twitterURL={twitterURL}
                  articleURL={articleURL}
                  onRemoveClick={() => dispatch(removeItem(type, id))}
                  onItemClick={() => handleItemClick(id)}
                />
              );
            })
          : null}
      </ItemsTemplate>
    </MainTemplate>
  );
};

export default ItemsView;
