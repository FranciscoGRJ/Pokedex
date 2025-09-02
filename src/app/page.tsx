import PokemonHeader from "./components/PokemonHeader";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center p-4">
      <header className="flex w-full flex-col items-center justify-around p-4 gap-2">
        <PokemonHeader imWidth={300} imHeight={45}/>
      </header>
      <section className="w-full flex flex-col items-center gap-4 py-4">
        <SearchBar/>
      </section>
      <section className="pokemonList w-full flex flex-col justify-items-center gap-4 py-4">
        <PokemonList/>
      </section>
    </main>
  );
}
