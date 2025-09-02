import Image from "next/image";

export default function PokemonHeader ({imWidth, imHeight}: {imWidth?: number, imHeight?: number}){
  return(
    <div className="logoContainer">
      <Image
      className="pkmnLogo"
      src='https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'
      alt="pkmnLogo"
      width = {imWidth || 250}
      height = {imHeight || 38}
      priority = {true}
      ></Image>
    </div>
  );
}
