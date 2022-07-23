import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./OrderBy.css";

function OrderBy() {
  const [defaultChamps, setDefaultChamps] = useState([]);


  useEffect(() => {
    axios
      .get(
        `http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json`
      )
      .then((res) => {
        const array = [];
        for (let key in res.data.data) {
          array.push(res.data.data[key]);
        }
        setDefaultChamps(array);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  useEffect(() => {
    setDefaultChamps(defaultChamps)
  }, [defaultChamps])
// sort a nested object by key.key

    const sortByKey = (array, key, key2) => {
        console.log(key, key2);
        const sortedNestedObj = array.sort((a, b) => {
            if(key2 !=="undefined") {
                let x = a[key][key2];
                let y = b[key][key2];
                return x-y;
            }
            else {
                let x = a[key];
                let y = b[key];
                return x-y;
            }
        }).reverse();
    }





  return (
    <div className="orderby">
      <h5 className="championrankingtitle">Champion Ranking</h5>

      <div className="labels">
        <div onClick={(e) => sortByKey(defaultChamps, "name")}>Name</div>
        <div onClick={(e) => sortByKey(defaultChamps, "stats", "armor")}>Armor</div>
        <div>Armor/Level</div>
        <div>Attack Damage</div>
        <div>Attack Damage Per Level</div>
        <div>Attack Range</div>
        <div>Attack Speed</div>
        <div>Attack Speed Per Level</div>
        <div>Crit Chance</div>
        <div>Crit Chance Per Level</div>
        <div>HP</div>
        <div>HP/Level</div>
        <div>HP Regen</div>
        <div>HP Regen/Level</div>
        <div>Mana</div>
        <div>Mana/Level</div>
        <div>Mana Regen</div>
        <div>Mana Regen/Level</div>
        <div>Move Speed</div>
        <div>Magic Resist</div>
        <div>Magic Resist/Level</div>
        </div>
        {defaultChamps.length > 0 &&
          defaultChamps.map((champ) => (
            <div className="championcontainer">
              <div className="championname">{champ.name}</div>

              <div className="championarmor">
              {champ.stats.armor}
              </div>

              <div className="championarmorperlevel">
                {champ.stats.armorperlevel}
              </div>

              <div className="championattackdamage">
                {champ.stats.attackdamage}
              </div>

              <div className="championattackdamageperlevel">
                {champ.stats.attackdamageperlevel}
              </div>

              <div className="championattackrange">
                {champ.stats.attackrange}
              </div>

              <div className="championattackspeed">
                {champ.stats.attackspeed}
              </div>

              <div className="championattackspeedperlevel">
                {champ.stats.attackspeedperlevel}
              </div>

              <div className="championcritchance">
              {champ.stats.critchance}
              </div>

              <div className="championcritchanceperlevel">
                {champ.stats.critchanceperlevel}
              </div>

              <div className="championhp">
              {champ.stats.hp}
              </div>

              <div className="championhpperlevel">
              {champ.stats.hpperlevel}
              </div>

              <div className="championhpregen">
              {champ.stats.hpregen}
              </div>

              <div className="championhpregenperlevel">
                {champ.stats.hpregenperlevel}
              </div>

              <div className="championmana">
              {champ.stats.mp}
              </div>

              <div className="championmanaperlevel">
                {champ.stats.mpperlevel}
              </div>

              <div className="championmanaregen">
              {champ.stats.mpregen}
              </div>

              <div className="championmanaregenperlevel">
                {champ.stats.mpregenperlevel}
              </div>

              <div className="championmovespeed">
              {champ.stats.movespeed}
              </div>

              <div className="championmagicresist">
                {champ.stats.spellblock}
              </div>

              <div className="championmagicresistperlevel">
                {champ.stats.spellblockperlevel}
              </div>

            </div>
          ))}
    </div>
  );
}

export default OrderBy;
