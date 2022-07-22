import React from "react";
import "./Searchbar.css";
import { useEffect } from "react";
function Searchbar({ setSearchResult, searchResult, search, setSearch }) {

//   useEffect(() => {
//     if (search.length < 1) {
//       return;
//     }
//   }, [search]);

//   useEffect(() => {
//     setSearchResult(array);
//   }, [search]);


  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search by champion name"
        value={search}
        onchange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
