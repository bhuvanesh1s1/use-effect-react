import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from './Loader';
import { colors, colorKeys } from '../utils/colors';
import { emojis, emojiKeys } from '../utils/emojis';

function Card({ pokemonInfo }) {
  const [pokemon, setPokemon] = useState();
  const [info, setInfo] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // fetch(pokemonInfo?.url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     const pokeType = data.types.map((type) => type.type.name);
    //     const colorType = colorKeys.find((type) => pokeType.indexOf(type) > -1);
    //     const emoji = emojiKeys.find((type) => pokeType.indexOf(type) > -1);
    //     setInfo({ type: colorType, emoji });
    //     setPokemon(data);
    //   })
    //   .catch((err) => console.log(err))
    //   .finally(() => {
    //     setIsLoading(false);
    //   });

    async function getPokemonInfo(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
      } catch (err) {
        console.log(err);
      }
    }

    getPokemonInfo(pokemonInfo?.url)
      .then((data) => {
        const pokeType = data.types.map((type) => type.type.name);
        const colorType = colorKeys.find((type) => pokeType.indexOf(type) > -1);
        const emoji = emojiKeys.find((type) => pokeType.indexOf(type) > -1);
        setInfo({ type: colorType, emoji });
        setPokemon(data);
      })
      .finally(() => {
        // to show the loader effect, it has been added temporarily
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      });
  }, [pokemonInfo]);

  if (isLoading)
    return (
      <section className="flex shadow-md items-center justify-center bg-slate-200 p-4 rounded-lg h-auto w-[280px]">
        <Loader />
      </section>
    );

  return (
    <section
      className={`transition-all flex justify-center items-center gap-4  gap-x-6 shadow-md min-w-[280px] h-auto ${
        colors[`${info?.type}`]
      }  p-4 rounded-lg`}
    >
      <div className="w-[110px] p-1">
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt="pokemon image"
          className="h-[100px] w-[100px] object-contain p-1 rounded-md cursor-pointer"
          onClick={() => new Audio(pokemon?.cries?.latest).play()}
        />

        <h2 className="text-gray-700 text-center font-semibold border-[1px] border-dotted bg-slate-50   border-teal-900">
          {pokemonInfo.name[0].toUpperCase() + pokemonInfo.name.slice(1)}
        </h2>
      </div>
      <div className="flex gap-1">
        <div className="flex text-xs flex-col">
          <p className="flex items-center gap-x-2">
            <span className="font-semibold">Category: </span>
            <span className=" text-gray-700">
              {info?.type[0].toUpperCase() + info?.type.slice(1)}
            </span>
            <span className="bg-white w-7 h-7 relative rounded-full text-gray-700 text-lg ">
              <span className="absolute left-[18%]">{emojis[info?.emoji]}</span>
            </span>
          </p>
          <div>
            <div className="mt-2 flex flex-wrap gap-1 w-10">
              <h3 className="font-semibold">Abilities: </h3>
              {pokemon.abilities.map((ability, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap  text-md rounded-sm bg-white px-1.5 py-0.5 text-xs text-gray-600"
                >
                  {ability?.ability?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Card.propTypes = {
  pokemonInfo: PropTypes.object,
};

export default Card;
