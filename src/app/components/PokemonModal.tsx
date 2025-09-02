import { useEffect, useState } from "react"
import PokemonSprite from "./PokemonSprite";

type PokemonModalProps = {
  url: string
}

export default function PokemonModal({url}:PokemonModalProps){

const [pokemonInfo, setPokemonInfo] = useState<{
  name: string;
  height: number; 
  weight: number;
  order: number;
  types: {
          type: { name: string}}[];
  sprites: {front_default: string;
            back_default: string};
  }| null>(null);

useEffect(()=>{
  async function getPokemonInfo() {
    try{
      const res = await fetch(url);
      const data = await res.json();
      setPokemonInfo(data);
    } catch(error){
      console.log("Error fetching data: ", error);
    }
  }
  getPokemonInfo();
},[url]);

const weight = pokemonInfo?.weight ? pokemonInfo.weight/10: 0;
const height = pokemonInfo?.height ? pokemonInfo.height/10 :0;
const pokedexId = pokemonInfo?.order;

const frontSprite = pokemonInfo?.sprites.front_default ? pokemonInfo.sprites.front_default : "";
const backSprite = pokemonInfo?.sprites.back_default ? pokemonInfo.sprites.back_default : "";
const pokemonName = pokemonInfo?.name ? pokemonInfo.name : "";

return(
  <div className="pokemonInfo p-4">
    <p className="capitalize">{pokemonInfo?.name}</p>
    <PokemonSprite spriteFrontUrl={frontSprite}
                   spriteBackUrl={backSprite}
                   pokemonName={pokemonName}/>
    <p>Pokedex number: {pokedexId}</p>
    <p> Height: {height.toFixed(1)} m</p>
    <p>Weight: {weight.toFixed(1)} Kg</p>
    <p className="capitalize">Type: {pokemonInfo?.types.map((t)=> t.type.name).join("/")}</p>
  </div>
)
}
