import React, { useState } from "react";
import { SearchForm, ShowDataCards } from "../../components";

export default function Searchpage() {
  const [showData, setShowData] = useState([])
  const [sortByRating, setSortByRating] = useState(false)

  const sortedShows = sortByRating ? [...showData].sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0)) : showData;
  return (
    <>
      <SearchForm setShowData={setShowData}/>
      <label>Sort by ratings:
        <input type="checkbox" checked={sortByRating} onChange={()=>setSortByRating(!sortByRating)} />
      </label>
      <ShowDataCards showData={sortedShows}/>
    </>
  );
}
