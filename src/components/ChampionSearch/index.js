import React from "react";
import { useState, useEffect, useId } from "react";
import axios from "axios";
import "./ChampionSearch.css";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";

function ChampionSearch() {
  const API_KEY = "RGAPI-8ce94934-563b-4085-97c3-b9a4bfdce3b7";
  const id = useId();
  const [champData, setChampData] = useState({});
  const [filteredChamps, setFilteredChamps] = useState([]);
  const [search, setSearch] = useState("");
  const apiCallString = "https://na1.api.riotgames.com";
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
        setChampData(array);
      })
      .catch((err) => {
        setChampData([]);
        console.log(err);
      });
    }, []);

    return (
      <>
      <h5 className="championtitle">League of Legends Champion Search</h5>
      <div className="sortingoptions">
      <Searchbar search={search} setSearch={setSearch} filteredChamps={filteredChamps} setFilteredChamps={setFilteredChamps}/>
      </div>
      <div className="championsearch">
        {champData.length > 0 && search.length === 0 &&
          champData.map((champion) => (
            <div id={id} className="champion-list">
              <p className="championname">{champion.name}</p>
              <Link to={`/champion/${champion.name}`}>
              <img
                width="135"
                height="135"
                className="championimage"
                src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${champion.image.full}`}
                />
                </Link>
            </div>
          ))}
      </div>

      <div className="championsearch">
        {search.length > 0 &&
          filteredChamps.map((champion) => (
            <div id={id} className="champion-list">
              <p className="championname">{champion.name}</p>
              <Link to={`/champion/${champion.name}`}>
              <img
                width="135"
                height="135"
                className="championimage"
                src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${champion.image.full}`}
                />
                </Link>
            </div>
          ))}
          {filteredChamps.length === 0 && search.length !== 0 &&
          <p className="noresults">No Champions Found</p>
          }
      </div>


    </>
  );
}

export default ChampionSearch;
