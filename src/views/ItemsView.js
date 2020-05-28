import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'hooks/useParams';
import { removeItem, fetchItems } from 'actions';
import ItemsTemplate from 'templates/ItemsTemplate';
import Card from 'components/molecules/Card/Card';
import MainTemplate from 'templates/MainTemplate';
import LoadingAnimation from 'components/atoms/LoadingAnimation/LoadingAnimation';

const ItemsView = () => {
  const { type } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector(({ itemsReducer }) => itemsReducer.isLoadingItems);
  const items = useSelector(({ itemsReducer }) => (itemsReducer[type] ? itemsReducer[type] : {}));
  const handleItemClick = (id) => {
    history.push(`/item?type=${type}&id=${id}`);
  };

  useEffect(() => {
    dispatch(fetchItems(type));
  }, [dispatch, type]);

  return (
    <MainTemplate>
      {isLoading ? (
        <LoadingAnimation bigView />
      ) : (
        <ItemsTemplate>
          {typeof items !== 'undefined'
            ? Object.keys(items).map((item) => {
                const { id, title, description, url } = items[item];
                return (
                  <Card
                    key={id}
                    title={title}
                    description={description}
                    url={url}
                    type={type}
                    onRemoveClick={() => dispatch(removeItem(type, id))}
                    onItemClick={() => handleItemClick(id)}
                  />
                );
              })
            : null}
        </ItemsTemplate>
      )}
    </MainTemplate>
  );
};

export default ItemsView;
