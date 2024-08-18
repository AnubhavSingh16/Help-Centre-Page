import React, { useState } from 'react';

function Card({ title,description }) {

  
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  return (
    <div className='card max-w-sm bg-white border border-gray-300 rounded-3xl overflow-hidden shadow-xl p-4'>
      <div className='title text-xl font-semibold mb-2'>
        {title}
        <hr className='my-2 border-gray-800' />

      </div>
     
      <div className={`desc text-gray-700 transition-all duration-300 ${showMore ? 'max-h-full' : 'max-h-24 overflow-hidden'}`}>
       {description}
      </div>
     
      <button onClick={toggleShowMore} className='text-purple-700 mt-2 text-xs font-semibold'>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
}

export default Card;
