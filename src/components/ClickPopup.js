import React, { useEffect, useState } from "react";
import axios from "axios";

import ElemetBug from "../Img/element/bug.png";
import ElemetDark from "../Img/element/dark.png";
import ElemetDragon from "../Img/element/dragon.png";
import ElemetFighting from "../Img/element/fighting.png";
import ElemetFire from "../Img/element/fire.png";
import ElemetFlying from "../Img/element/flying.png";
import ElemetGhost from "../Img/element/ghost.png";
import ElemetGrass from "../Img/element/grass.png";
import ElemetGround from "../Img/element/ground.png";
import ElemetIce from "../Img/element/ice.png";
import ElemetNormal from "../Img/element/normal.png";
import ElemetPoison from "../Img/element/poison.png";
import ElemetPsychic from "../Img/element/psychic.png";
import ElemetRock from "../Img/element/rock.png";
import ElemetSteel from "../Img/element/steel.png";
import ElemetWater from "../Img/element/water.png";


function ClickPopup(props) {
  const [pokemondex, setPokemon] = useState([]);

  const getPokemon = async () => {
    let pokemonArray = [];
    pokemonArray.push(await getPokemonData());
    setPokemon(pokemonArray);
  };

  //res api from event click in card pokemon
  const getPokemonData = async () => {
    try {
      const res = await axios(props.pokeUrl);
      return res;
    } 
    catch (error) {
      console.log(error);
    }
  };
  const pokemonResult2 = pokemondex.map(
    (poke1) => poke1.data.types[0].type.name
  );

  // funtion if else element pokemon
  const PokeEle = () => {
    if (pokemonResult2.toString() === "bug") {
      return <img className="style-element" src={ElemetBug} alt="ElemetBug" />;
    } else if (pokemonResult2.toString() === "dark") {
      return (
        <img className="style-element" src={ElemetDark} alt="ElemetDark" />
      );
    } else if (pokemonResult2.toString() === "dragon") {
      return (
        <img className="style-element" src={ElemetDragon} alt="ElemetDragon" />
      );
    } else if (pokemonResult2.toString() === "fighting") {
      return (
        <img
          className="style-element"
          src={ElemetFighting}
          alt="ElemetFighting"
        />
      );
    } else if (pokemonResult2.toString() === "fire") {
      return (
        <img className="style-element" src={ElemetFire} alt="ElemetFire" />
      );
    } else if (pokemonResult2.toString() === "flying") {
      return (
        <img className="style-element" src={ElemetFlying} alt="ElemetFlying" />
      );
    } else if (pokemonResult2.toString() === "ghost") {
      return (
        <img className="style-element" src={ElemetGhost} alt="ElemetGhost" />
      );
    } else if (pokemonResult2.toString() === "grass") {
      return (
        <img className="style-element" src={ElemetGrass} alt="ElemetGrass" />
      );
    } else if (pokemonResult2.toString() === "ground") {
      return (
        <img className="style-element" src={ElemetGround} alt="ElemetGround" />
      );
    } else if (pokemonResult2.toString() === "ice") {
      return <img className="style-element" src={ElemetIce} alt="lemetIce" />
    } else if (pokemonResult2.toString() === "normal") {
      return (
        <img className="style-element" src={ElemetNormal} alt="ElemetNormal" />
      );
    } else if (pokemonResult2.toString() === "poison") {
      return (
        <img className="style-element" src={ElemetPoison} alt="ElemetPoison" />
      );
    } else if (pokemonResult2.toString() === "psychic") {
      return (
        <img
          className="style-element"
          src={ElemetPsychic}
          alt="ElemetPsychic"
        />
      );
    } else if (pokemonResult2.toString() === "steel") {
      return (
        <img className="style-element" src={ElemetSteel} alt="ElemetSteel" />
      );
    } else if (pokemonResult2.toString() === "water") {
      return (
        <img className="style-element" src={ElemetWater} alt="ElemetWater" />
      );
    } else if (pokemonResult2.toString() === "rock") {
      return (
        <img className="style-element" src={ElemetRock} alt="ElemetRock" />
      );
    } else {
      return (
        <img className="style-element" src={ElemetNormal} alt="ElemetNormal" />
      );
    }
  };

  // https://www.youtube.com/watch?v=AbRgaY0khPM
  // Process Bar
  useEffect(() => {
    getPokemon();
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  const pokemonResult = pokemondex.map((poke) => (
    <div id={poke.data.id} key={poke.data.id}>
      <div>
        <div className="card-pokemons">
          <div className="header-card" id="id-header">
            <h1 className="name-pokemons-card">{poke.data.name}</h1>
            <PokeEle />
          </div>
          <div className="body-card">
            <img
              src={poke.data.sprites.other.dream_world.front_default}
              className="imagecard-poke"
            />
          </div>
        </div>
        <div className="stat-pokemon">
          <div className="stat-manepoke">
            <p>HP :</p>
            <p>{poke.data.stats[0].base_stat}</p>
          </div>
          <div className="progress" style={{ width: "90%" }}>
            <span
              className="progress-bar"
              style={{ width: `${poke.data.stats[0].base_stat}px` }}
            ></span>
          </div>

          <div className="stat-manepoke">
            <p>ATTACK :</p>
            <p>{poke.data.stats[1].base_stat}</p>
          </div>
          <div className="progress" style={{ width: "90%" }}>
            <span
              className="progress-bar"
              style={{ width: `${poke.data.stats[1].base_stat}px` }}
            ></span>
          </div>

          <div className="stat-manepoke">
            <p>DEFENDSE :</p>
            <p>{poke.data.stats[2].base_stat}</p>
          </div>
          <div className="progress" style={{ width: "90%" }}>
            <span
              className="progress-bar"
              style={{ width: `${poke.data.stats[2].base_stat}px` }}
            ></span>
          </div>

          <div className="stat-manepoke">
            <p>SPEED :</p>
            <p>{poke.data.stats[5].base_stat}</p>
          </div>
          <div className="progress" style={{ width: "90%" }}>
            <span
              className="progress-bar"
              style={{ width: `${poke.data.stats[5].base_stat}px` }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div
      className="popup-pokemons"
      onClick={props.onPopupClose}
      key={props.keyPoke}
    >
      {pokemonResult}
    </div>
  );
}

export default ClickPopup;
