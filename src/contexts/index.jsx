import React, { useState, useContext, createContext, useEffect } from "react";

const ShowContext = createContext();

export const ShowProvider = ({ children }) => {
  const [showData, setShowData] = useState([]);
  const [sortedShows, setSortedShows] = useState([]);
  const [sortByRating, setSortByRating] = useState(false);
  useEffect(() => {
    const sorted = sortByRating
      ? [...showData].sort(
          (a, b) => (b.rating?.average || 0) - (a.rating?.average || 0)
        )
      : showData;
    setSortedShows(sorted);
  }, [showData, sortByRating]);

  return (
    <ShowContext.Provider
      value={{ showData, setShowData, sortedShows, setSortByRating }}
    >
      {children}
    </ShowContext.Provider>
  );
};

export const useShows = () => useContext(ShowContext);
