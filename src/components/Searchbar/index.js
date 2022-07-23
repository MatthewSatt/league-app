import React from "react";
import "./Searchbar.css";
import { useEffect, useState} from "react";
import axios from "axios";

function Searchbar({ search, setSearch, filteredChamps, setFilteredChamps }) {
  const [controlledChampions, setControlledChampions] = useState([]);


  useEffect(() => {
    axios
    .get(
      `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json`
      )
      .then((res) => {
        const array = [];
        for (let key in res.data.data) {
          const championObj = {};
          array.push(res.data.data[key]);
        }
        setControlledChampions(array);
      })
      .catch((err) => {
        console.log(err);
      });
    }, []);

    useEffect(() => {
      if (search.length === 0) {
        setFilteredChamps([]);
      }
      let copy = search.toLowerCase()
      if(search.length > 0) {
      const array = [];
      for (let i = 0; i < controlledChampions.length; i++) {
        const champion = controlledChampions[i];
        if (champion.name.toLowerCase().includes(copy)) {
          array.push(champion);
        }
      }
      console.log(array)
      setFilteredChamps(array);
      }
    }, [search])

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search by champion name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
