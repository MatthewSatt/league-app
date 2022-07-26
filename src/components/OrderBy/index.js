import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./OrderBy.css";

function OrderBy() {
  const [champs, setChamps] = useState([]);
  const [filteredChamps, setFilteredChamps] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json"
      )
      .then((res) => {
        const array = [];
        for (let key in res.data.data) {
          const championObj = {};
          array.push(res.data.data[key]);
        }
        setChamps(array);
      })
      .catch((err) => {
        setChamps([]);
        console.log(err);
      });
  }, []);
  


// sort champion objects by keys
  const filterChamps = (e, array, key1, key2) => {
    setFilteredChamps([])
    console.log(key1, key2);
    e.preventDefault();
    if(key2 === "undefined") {
      console.log("hit")
     array.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else {
      array.sort((a, b) => {
        if (a[key1][key2] < b[key1][key2]) {
          return 1;
        }
        if (a[key1][key2] > b[key1][key2]) {
          return -1;
        }
        return 0;
      });
    }
    if(array.length !== 0) {
      setFilteredChamps(array)
    }
    console.log(array[0].name);
  }

  return (
    <div>
      <div className="wrapper cover">
        <div onClick={e => filterChamps(e, champs, "name")} className="row row1">Name</div>
        <div onClick={e => filterChamps(e, champs, "stats", "armor")} className="row row1">Armor</div>
        <div className="row row1">Armor Per Level</div>
        <div className="row row1">Attack Damage</div>
        <div className="row row1">Attack Damage Per Level</div>
        <div className="row row1">Attack Range</div>
        <div className="row row1">Attack Speed</div>
        <div className="row row1">Attack Speed Per Level</div>
        <div className="row row1">Crit Chance</div>
        <div className="row row1">Crit Chance Per Level</div>
        <div className="row row1">HP</div>
        <div className="row row1">HP Per Level</div>
        <div className="row row1">HP Regen</div>
        <div className="row row1">HP Regen Per Level</div>
        <div className="row row1">Mana</div>
        <div className="row row1">Mana Per Level</div>
        <div className="row row1">Mana Regen</div>
        <div className="row row1">Mana Regen Per Level</div>
        <div className="row row1">Move Speed</div>
        <div className="row row1">Magic Resist</div>
        <div className="row row1">Magic Resist Per Level</div>
      </div>
      <div>
        {champs && filterChamps.length !== 0 &&
          champs.map((champ) => (
            <div className="wrapper">
              <div className="row row1">{champ.name}</div>
              <div className="row">{champ.stats.armor}</div>
              <div className="row">{champ.stats.armorperlevel}</div>
              <div className="row">{champ.stats.attackdamage}</div>
              <div className="row">{champ.stats.attackdamageperlevel}</div>
              <div className="row">{champ.stats.attackrange}</div>
              <div className="row">{champ.stats.attackspeed}</div>
              <div className="row">{champ.stats.attackspeedperlevel}</div>
              <div className="row">{champ.stats.crit}</div>
              <div className="row">{champ.stats.critperlevel}</div>
              <div className="row">{champ.stats.hp}</div>
              <div className="row">{champ.stats.hpperlevel}</div>
              <div className="row">{champ.stats.hpregen}</div>
              <div className="row">{champ.stats.hpregenperlevel}</div>
              <div className="row">{champ.stats.mp}</div>
              <div className="row">{champ.stats.mpperlevel}</div>
              <div className="row">{champ.stats.mpregen}</div>
              <div className="row">{champ.stats.mpregenperlevel}</div>
              <div className="row">{champ.stats.movespeed}</div>
              <div className="row">{champ.stats.spellblock}</div>
              <div className="row">{champ.stats.spellblockperlevel}</div>
            </div>
          ))}

        {filteredChamps.length > 0 &&
        filteredChamps.map((champ) => (
          <div className="wrapper">
          <div className="row row1">{champ.name}</div>
          <div className="row">{champ.stats.armor}</div>
          <div className="row">{champ.stats.armorperlevel}</div>
          <div className="row">{champ.stats.attackdamage}</div>
          <div className="row">{champ.stats.attackdamageperlevel}</div>
          <div className="row">{champ.stats.attackrange}</div>
          <div className="row">{champ.stats.attackspeed}</div>
          <div className="row">{champ.stats.attackspeedperlevel}</div>
          <div className="row">{champ.stats.crit}</div>
          <div className="row">{champ.stats.critperlevel}</div>
          <div className="row">{champ.stats.hp}</div>
          <div className="row">{champ.stats.hpperlevel}</div>
          <div className="row">{champ.stats.hpregen}</div>
          <div className="row">{champ.stats.hpregenperlevel}</div>
          <div className="row">{champ.stats.mp}</div>
          <div className="row">{champ.stats.mpperlevel}</div>
          <div className="row">{champ.stats.mpregen}</div>
          <div className="row">{champ.stats.mpregenperlevel}</div>
          <div className="row">{champ.stats.movespeed}</div>
          <div className="row">{champ.stats.spellblock}</div>
          <div className="row">{champ.stats.spellblockperlevel}</div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default OrderBy;
