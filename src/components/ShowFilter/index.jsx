// SortFilter.jsx
import React, { useState, useEffect } from "react";

export default function ShowFilter({ showData, setSortedShows }) {
  const [sortByRating, setSortByRating] = useState(false);

  useEffect(() => {
    const sortedShows = sortByRating
      ? [...showData].sort(
          (a, b) => (b.rating?.average || 0) - (a.rating?.average || 0)
        )
      : showData;

    setSortedShows(sortedShows);
  }, [showData, sortByRating, setSortedShows]);

  return (
    <div>
      <label>
        Sort by Rating:
        <input
          type="checkbox"
          checked={sortByRating}
          onChange={() => setSortByRating((prev) => !prev)}
        />
      </label>
    </div>
  );
}
