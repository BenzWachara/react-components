import React, { useEffect, useState } from "react";
import axios from "axios";
import ClickPopup from "../components/ClickPopup";

function Popupimage() {
  const [pokemondex, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const countpoke =21;
  const [urlPokemon, setUrlPoke] = useState("");

  function myFunctionc(e) {
    setPopupOpen(true);
    const srcImage = e.target.id;
    setUrlPoke(srcImage);
    return srcImage;
  }

  let popup = null;
  if (popupOpen) {
    popup = (
      <ClickPopup
        onPopupClose={() => setPopupOpen(false)}
        pokeUrl={`https://pokeapi.co/api/v2/pokemon/${urlPokemon}`}
        pokeNameIm={`${urlPokemon}`}
        imagePoke={urlPokemon.toString()}
        keyPoke={urlPokemon}
      />
    );
  }

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    let pokemonArray = [];
    for (let i = 1; i <= countpoke; i++) {
      pokemonArray.push(await getPokemonData(i));
    }

    setPokemon(pokemonArray);
    setLoading(false);
  };

  const getPokemonData = async (id) => {
    try {
      const res = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  const pokemonResult = pokemondex.map((poke) => (
    <div id={poke.data.id} key={poke.data.id} className="card-pokemon" onClick={myFunctionc}>
      <div className="name-pokemon">
        <span>{poke.data.name}</span>
      </div>
      <img src={poke.data.sprites.other.dream_world.front_default} className="img-pokemon"/>
    </div>
  ));


  return (
    <div className="page-content">
      <h1>Pokemon API</h1>
      <br/>
      {loading ? (<h1>Loading...</h1>) : (<div className="container-pokemon">{pokemonResult}</div>)}
      <div></div>
      {popup}
    </div>
  );
}

export default Popupimage;