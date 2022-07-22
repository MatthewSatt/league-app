import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./SingleChampion.css"

function SingleChampion() {
  const API_KEY = "RGAPI-8ce94934-563b-4085-97c3-b9a4bfdce3b7";
  const { name } = useParams();
  const [singleChampData, setSingleChampData] = useState({});
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
          if (res.data.data[key].name === name) {
            array.push(res.data.data[key]);
          }
        }
        setSingleChampData(array);
      })
      .catch((err) => {
        setSingleChampData([]);
        console.log(err);
      });
  }, []);

  console.log(name);

  return (
    <div className="singlechampion">
      {singleChampData.length > 0 &&
        singleChampData.map((champion) => (
          <div className="singlechampdetails">
            <div className="champcontainer">
            <p className="championname">{champion.name}</p>
            <p className="championblurb">{champion.blurb}</p>
            <img
              width="300"
              className="championimage"
              height="300"
              src={`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${champion.image.full}`}
              />
              </div>
            <table className="championchart">
                <tbody className="championchartbody">
                    <h4>Stats</h4>
                    <tr>
                        <td>Armor:</td>
                        <td>{champion.stats.armor}</td>
                    </tr>

                    <tr>
                        <td>Armor per level:</td>
                        <td>{champion.stats.armorperlevel}</td>
                    </tr>

                    <tr>
                        <td>Attack damage:</td>
                        <td>{champion.stats.attackdamage}</td>
                    </tr>

                    <tr>
                        <td>Attack damage per level:</td>
                        <td>{champion.stats.attackdamageperlevel}</td>
                    </tr>

                    <tr>
                        <td>Attack range:</td>
                        <td>{champion.stats.attackrange}</td>
                    </tr>

                    <tr>
                        <td>Attack speed:</td>
                        <td>{champion.stats.attackspeed.toFixed(2)}/s</td>
                    </tr>

                    <tr>
                        <td>Attack speed per level:</td>
                        <td>{champion.stats.attackspeedperlevel}</td>
                    </tr>

                    <tr>
                        <td>Crit chance:</td>
                        <td>{champion.stats.crit}</td>
                    </tr>

                    <tr>
                        <td>Crit chance per level:</td>
                        <td>{champion.stats.critperlevel}</td>
                    </tr>

                    <tr>
                        <td>HP:</td>
                        <td>{champion.stats.hp}</td>
                    </tr>

                    <tr>
                        <td>HP per level:</td>
                        <td>{champion.stats.hpperlevel}</td>
                    </tr>

                    <tr>
                        <td>HP regen:</td>
                        <td>{champion.stats.hpregen}</td>
                    </tr>

                    <tr>
                        <td>HP regen per level:</td>
                        <td>{champion.stats.hpregenperlevel}</td>
                    </tr>

                    <tr>
                        <td>Mana:</td>
                        <td>{champion.stats.mp}</td>
                    </tr>

                    <tr>
                        <td>Mana per level:</td>
                        <td>{champion.stats.mpperlevel}</td>
                    </tr>

                    <tr>
                        <td>Mana regen:</td>
                        <td>{champion.stats.mpregen}</td>
                    </tr>

                    <tr>
                        <td>Mana regen per level:</td>
                        <td>{champion.stats.mpregenperlevel}</td>
                    </tr>

                    <tr>
                        <td>Move speed:</td>
                        <td>{champion.stats.movespeed}</td>
                    </tr>

                    <tr>
                        <td>Magic Resist:</td>
                        <td>{champion.stats.spellblock}</td>
                    </tr>

                    <tr>
                        <td>Magic Resist per level:</td>
                        <td>{champion.stats.spellblockperlevel}</td>
                    </tr>
                </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}

export default SingleChampion;
