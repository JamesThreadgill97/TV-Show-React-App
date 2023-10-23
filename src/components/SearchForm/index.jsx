import { useState, useEffect } from "react";

export default function SearchForm({ setShowData }) {
  const [inputValue, setInputValue] = useState("");
  const [searchString, setSearchString] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSearchString(inputValue);
    setInputValue("");
  }

  useEffect(() => {
    async function searchAPI() {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchString}`
      );
      const data = await response.json();
      const fetchedShowData = data.map((s) => s.show);
      setShowData(fetchedShowData);
    }
    searchAPI();
  }, [searchString]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={handleInput} value={inputValue} />
        <input type="submit" value="Search" />
      </form>
    </>
  );
}
