import { useState } from 'react';

import CardList from './CardList';
import Search from './Search';

import pokemonData from '../data/pokemonData';

function Wrapper() {
  // const [pokeResult, setPokeResult] = useState(pokemonData);
  const [pokeItemList, setPokeItemList] = useState(pokemonData);

  return (
    <section className="flex flex-col items-center justify-items-center gap-4 mb-8">
      <section>
        <Search setPokeItemList={setPokeItemList} pokeResult={pokemonData} />
      </section>
      <section>
        <CardList pokeResult={pokeItemList} />
      </section>
    </section>
  );
}

export default Wrapper;
