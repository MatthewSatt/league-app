import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./OrderBy.css";

function OrderBy() {
  return (
    <div>
      <div className="labels">
        <div>Name</div>
        <div>Armor</div>
        <div>Armor Per Level</div>
        <div>Attack Damage</div>
        <div>Attack Damage Per Level</div>
        <div>Attack Range</div>
        <div>Attack Speed</div>
        <div>Attack Speed Per Level</div>
        <div>Crit Chance</div>
        <div>Crit Chance Per Level</div>
        <div>HP</div>
        <div>HP Per Level</div>
        <div>HP Regen</div>
        <div>HP Regen Per Level</div>
        <div>Mana</div>
        <div>Mana Per Level</div>
        <div>Mana Regen</div>
        <div>Mana Regen Per Level</div>
        <div>Move Speed</div>
        <div>Magic Resist</div>
        <div>Magic Resist Per Level</div>
      </div>
    </div>
  );
}

export default OrderBy;
