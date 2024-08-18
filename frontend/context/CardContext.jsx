import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import axios from 'axios';

function MyState(props) {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [filtercards, setFilterCards] = useState([]);


  useEffect(() => {
    const fetchCards = async () => {
      try {
        console.log('Fetching cards...');
        const response = await axios.get('/api/cards');
        const sortedCards = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setCards(sortedCards);
      } catch (err) {
        console.error('Error fetching cards:', err.message);
        setError(err.message);
      }
    };

    fetchCards(); 
  }, []); 

  return (
    <MyContext.Provider value={{ cards, setCards, error , filtercards, setFilterCards}}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
