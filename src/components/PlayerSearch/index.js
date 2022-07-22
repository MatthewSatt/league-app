import React, { useState } from "react";
import axios from "axios";
import "./PlayerSearch.css"

function PlayerSearch() {
  const API_KEY = "RGAPI-8ce94934-563b-4085-97c3-b9a4bfdce3b7";
  const [searchText, setSearchText] = useState("");
  const [playerData, setPlayerData] = useState({});

  function searchPlayer(e) {
    axios
      .get(
        `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${searchText}?api_key=${API_KEY}`
      )
      .then((res) => {
        setPlayerData(res.data);
      })
      .catch((err) => {
        setPlayerData({});
        console.log(err);
      });
  }

  return (
    <div className="App">
      <div className="container">
        <h5>League of Legends Player Search</h5>
        <input onChange={(e) => setSearchText(e.target.value)} type="text" />
        <button onClick={searchPlayer}>Search</button>
      </div>
      {JSON.stringify(playerData) !== "{}" ?
      <>
      <p>{playerData.name}</p>
      <img width="100" height="100" src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${playerData.profileIconId}.png`}/>
      <p>Summoner Level: {playerData.summonerLevel}</p>

      </>
      :
      <><p>Player Not Found</p></>
  }
    </div>

  );
}

export default PlayerSearch;
