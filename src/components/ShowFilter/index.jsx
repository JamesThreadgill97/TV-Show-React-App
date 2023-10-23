import React from 'react';
import { useShows } from '../../contexts'; 

function SortFilter() {
  const { setSortByRating } = useShows();  

  return (
    <div>
      <label>
        Sort by Rating:
        <input 
          type="checkbox" 
          onChange={() => setSortByRating(prev => !prev)}
        />
      </label>
    </div>
  );
}

export default SortFilter;
