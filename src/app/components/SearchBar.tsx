"use client"
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (value: string) =>void;
}

export default function SearchBar ({searchTerm, onSearchChange}: SearchBarProps){
  

  return(
    <div className="searchBarContainer flex flex-row w-4/5 bg-white rounded-2xl">
      <MagnifyingGlassIcon className="icon h-6 w-6 text-gray-500 m-2"/>
      <input className="searchInput flex-grow p-2 text-gray-700 outline-none" 
             type="text" 
             placeholder="Search Pokemon..."
             value={searchTerm}
             onChange={(e)=> onSearchChange(e.currentTarget.value)}/>
    </div>
  );
}
