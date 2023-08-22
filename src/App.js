import React from 'react';
import './component/imgCard';
import './App.css';

function App() {
  const data = [
    // An array of card objects with title, desc, and image properties
    // For example: { title: 'Card Title', desc: 'Card Description', image: 'image_url.jpg' }
  ];

  return (
    <div className="container">
      <h1>Card</h1>
      <div className="row">
        {data.map((card, index) => (
          <div key={index}>
            <imgCard
              title={card.title}
              desc={card.desc}
              imgUrl={card.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;


