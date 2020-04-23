import React from 'react';
import ItemsTemplate from 'templates/ItemsTemplate';
import Card from 'components/molecules/Card/Card';

const ItemsView = () => {
  const items = [
    {
      id: 1,
      title: 'Example title',
      twitterURL: '',
      articleURL: '',
      description: 'example description',
    },
  ];

  const handleRemove = () => console.log('Removed');

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
            onRemoveClick={handleRemove}
          />
        ))}
    </ItemsTemplate>
  );
};

export default ItemsView;
