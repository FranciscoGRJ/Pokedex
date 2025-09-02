import Image from "next/image";


type PokemonSpriteProps = {
  spriteFrontUrl: string;
  spriteBackUrl: string;
  pokemonName: string;
}

export default function PokemonSprite ({spriteFrontUrl, spriteBackUrl, pokemonName}: PokemonSpriteProps){
  return(

  <div className="spritesRow flex flex-row justify-evenly">

    {spriteFrontUrl && (
      <Image
        src={spriteFrontUrl}
        alt = {pokemonName + " front" || "Pokemon front sprite"}
        width={90}
        height={90}
      />)
    }

    {spriteBackUrl &&(
      <Image
        src={spriteBackUrl}
        alt={pokemonName + " back" || "Pokemon back sprite"}
        width={90}
        height={90}
      />)
    }

  </div>
  );
}

