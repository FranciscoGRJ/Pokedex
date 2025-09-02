"use client"

import React from "react";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

type PokemonListProps = {
  searchTerm: string;
}

export default  function PokemonList ({searchTerm}:PokemonListProps){

  const [pokemonFound, setPokemonFound] = useState <{name: string; url: string} []> ([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    async function getPokemonData() {
      try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
        const data = await res.json();
        setPokemonFound(data.results);
      } catch(error) {
        console.error("Error fetching pokemon: ", error);
      }finally{
        setLoading(false);
      }
    }
    getPokemonData();
  }, []);

  if(isLoading) {
    return<p>Cargando Pokemon...</p>
  }

  const filteredPokemon = pokemonFound.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pokemonList flex flex-wrap gap-2 items-center justify-evenly">
      {filteredPokemon.map((p)=>(<PokemonCard key={p.name} name={p.name} url={p.url} />))}
    </div>
  )
}

