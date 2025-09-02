import { useState } from "react";
import PokemonModal from "./PokemonModal";

type PokemonCardProps = {
  name: string;
  url: string;
}


export default function PokemonCard ({name, url}: PokemonCardProps) {

  const [modalOpen, setModalOpen] = useState(false);

  function handlePokemonCardClick(){
    console.log(name)
    setModalOpen(modalOpen? false:true)
}
 return(
  <div className="mainCard flex flex-col justify-around min-w-30 min-h-10 w-fit h-fit rounded-2xl bg-amber-50 text-black text-center hover:bg-amber-200 select-none"
       onClick={handlePokemonCardClick}>

      <a className="capitalize" >{name}</a>
      {modalOpen? <PokemonModal url={url}/>: null}
      
  </div>
 );
}
