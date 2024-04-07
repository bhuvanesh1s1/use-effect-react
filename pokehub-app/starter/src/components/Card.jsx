import { useState } from 'react';
import PropTypes from 'prop-types';

import Loader from './Loader';

function Card() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  if (isLoading)
    return (
      <section className="flex shadow-md items-center justify-center bg-slate-200 p-4 rounded-lg h-auto w-[280px]">
        <Loader />
      </section>
    );

  return (
    <section
      className={`transition-all flex justify-center items-center gap-4  gap-x-6 shadow-md min-w-[280px] h-auto bg-stone-200  p-4 rounded-lg`}
    >
      <div className="w-[110px] p-1">
        <img
          src={
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'
          }
          alt="pokemon image"
          className="h-[100px] w-[100px] object-contain p-1 rounded-md"
        />
        <h2 className="text-gray-700 text-center font-semibold border-[1px] border-dotted bg-slate-50   border-teal-900">
          Balbasaur
        </h2>
      </div>
      <div className="flex gap-1">
        <div className="flex text-xs flex-col">
          <p className="flex items-center gap-x-2">
            <span className="font-semibold">Category: </span>
            <span className=" text-gray-700">Fire</span>
            <span className="bg-white w-7 h-7 relative rounded-full text-gray-700 text-lg ">
              <span className="absolute left-[18%]">🔥</span>
            </span>
          </p>
          <div>
            <div className="mt-2 flex flex-wrap gap-1 w-10">
              <h3 className="font-semibold">Abilities: </h3>
              {[1, 2].map((_, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap  text-md rounded-sm bg-white px-1.5 py-0.5 text-xs text-gray-600"
                >
                  ability
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
