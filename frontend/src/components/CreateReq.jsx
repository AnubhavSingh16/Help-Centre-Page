import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/myContext';
import React, { useState, useContext } from 'react';  // Import useContext
import Footer from './Footer';

function CardForm() {
  
  const navigate = useNavigate();
  const { setCards,setFilterCards } = useContext(MyContext); 

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!title && !description) {
      alert("Fields are empty!!");
    } else if (!title) {
      alert("Title is empty!!");
    } else if (!description) {
      alert("Description is empty!!");
    } 
    
    else {
      try {
        console.log('Sending data:', { title, description });  // Log the data
        const response = await fetch('/api/create-card', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, description }),
        });

        if (!response.ok) {
          throw new Error('Failed to create card');
        }

        const card = await response.json();
        console.log(card);
        setFilterCards(card); 
        setTitle(''); 
        setDescription('');
        alert("Request added successfully !!");
        navigate('/')
        
      } catch (error) {
        console.error('Error creating card:', error);
        alert("Error creating request !!");
      }
    }

  };

  return (
    <>
    <div className='mt-10 text-4xl flex items-center justify-center font-semibold'>Tell us about your problem..</div>
    
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md max-w-sm mx-auto my-4 mt-10 mb-20 border-2 border-slate-500">
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Enter title"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Enter description"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 px-4 rounded-xl hover:bg-purple-600 transition-colors"
      >
        Add Card
      </button>

     
    </form>

    <Footer></Footer>
    </>
  );
}

export default CardForm;
