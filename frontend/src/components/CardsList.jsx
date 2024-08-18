import React, { useContext } from 'react';
import Card from './Card';
import Footer from './Footer';
import MyContext from '../../context/myContext'; 

function CardsList() {
  const { cards, error } = useContext(MyContext); 

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (cards.length === 0) {
    return <div className='text-4xl flex justify-center mt-10'>No card found..</div>;
  }

  return (
    <>
      <div className='container-list'>
        <div className='cards-list'>
          {cards.map((card) => (
            <Card key={card._id} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardsList;
