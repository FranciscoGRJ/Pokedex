import { useEffect, useState } from "react"

type PokemonModalProps = {
  url: string
}

export default function PokemonModal({url}:PokemonModalProps){

const [pokemonInfo, setPokemonInfo] = useState<{
  name: string;
  height: number; 
  weight: number;
  order: number;}| null>(null);

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

return(
  <div className="pokemonInfo p-4">
    <p>Pokedex number: {pokedexId}</p>
    <p> Height: {height.toFixed(1)} m</p>
    <p>Weight: {weight.toFixed(1)} Kg</p>
  </div>
)
}
