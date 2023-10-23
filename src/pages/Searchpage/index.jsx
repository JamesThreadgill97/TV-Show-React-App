import React, { useState } from 'react';
import { SearchForm, ShowDataCards, ShowFilter } from '../../components';

export default function Searchpage() {
  const [showData, setShowData] = useState([]);
  const [sortedShows, setSortedShows] = useState([]);

  return (
    <>
      <SearchForm setShowData={setShowData} />
      <ShowFilter showData={showData} setSortedShows={setSortedShows} />
      <ShowDataCards showData={sortedShows} />
    </>
  );
}
