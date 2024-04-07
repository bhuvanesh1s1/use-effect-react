import { useState, useEffect } from 'react';

import CardList from './CardList';
import Search from './Search';

function Wrapper() {
  const [pokeResult, setPokeResult] = useState({});
  const [pokeItemList, setPokeItemList] = useState({});

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
    //   .then((res) => res.json())
    //   .then((data) => setPokeResult(data))
    //   .catch((err) => console.log(err));

    async function getPokemonList() {
      try {
        const res = await fetch(
          'https://pokeapi.co/api/v2/pokemon?limit=45&offset=0'
        );
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err.message);
      }
    }
    getPokemonList().then((pokemon) => {
      setPokeResult(pokemon);
      setPokeItemList(pokemon);
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-items-center gap-4 mb-8">
      <section>
        <Search setPokeItemList={setPokeItemList} pokeResult={pokeResult} />
      </section>
      <section>
        <CardList pokeResult={pokeItemList} />
      </section>
    </section>
  );
}

export default Wrapper;
