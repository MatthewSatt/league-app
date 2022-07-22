import React from "react";
import { useState, useEffect, useId } from "react";
import axios from "axios";
import "./ChampionSearch.css";
import { Link } from "react-router-dom";

function ChampionSearch() {
  const API_KEY = "RGAPI-8ce94934-563b-4085-97c3-b9a4bfdce3b7";
  const id = useId();
  const [searchText, setSearchText] = useState("");
  const [champData, setChampData] = useState({});
  const apiCallString = "https://na1.api.riotgames.com";
  useEffect(() => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json`
      )
      .then((res) => {
        const array = [];
        console.log(res.data);
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
      <div className="championsearch">
        {champData.length > 0 &&
          champData.map((champion) => (
            <div id={id} className="champion-list">
              <p className="championname">{champion.name}</p>
              <Link to={`/champion/${champion.name}`}>
              <img
                width="135"
                height="135"
                src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${champion.image.full}`}
                />
                </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default ChampionSearch;
