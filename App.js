
import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import Image from './components/Image';

const App = () => {
  const actions = [
    { label: 'Edit', onClick: () => console.log('Edit clicked'), className: 'edit' },
    { label: 'Delete', onClick: () => console.log('Delete clicked'), className: 'delete' },
  ];

  return (
    <div className="app">
      <Card
        title="Card Title"
        subtitle="Card Subtitle"
        image={<Image src="path/to/image.jpg" alt="Description" />}
        actions={actions}
        description="This is a description of the card."
      />
    </div>
  );
};

export default App;
