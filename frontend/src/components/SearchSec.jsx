import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import CardsList from "./CardsList";
import MyContext from '../../context/myContext';
import axios from 'axios';

function SearchSec() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const { cards, setCards } = useContext(MyContext); 

  const handleSearch = async () => {
    try {
      if (searchQuery.trim() === '') {
        
        const response = await axios.get('/api/cards');
        const sortedCards = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setCards(sortedCards);
      } else {
       
        const response = await axios.get(`/api/cards/${searchQuery}`);
        if (response.data) {
          setCards([response.data]); 
        } else {
          setCards([]); 
        }
      }
    } catch (error) {
      console.error('Error fetching card:', error.message);
      setCards([]); 
    }
  };

  return (
    <>
      <div className="bg-purple-200 h-72 flex flex-col items-center justify-center p-4">
        <h1 className="text-center text-5xl font-thin-bold mb-6">How can we help?</h1>
        
        <div className="relative w-1/3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            placeholder="Search"
            className="border-2 text-md border-black rounded-md p-2 pl-2 pr-4 h-12 w-full"
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={handleSearch} 
            className="absolute pr-2 right-2 top-1/2 transform -translate-y-1/2 text-black text-xl cursor-pointer"
          />
        </div>
      </div>
      <CardsList />
    </>
  );
}

export default SearchSec;
