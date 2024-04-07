import { useState } from 'react';
import PropTypes from 'prop-types';

function Search({ setPokeItemList, pokeResult }) {
  const [search, setSearch] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (search !== '') {
      const newList = pokeResult.results.filter((poke) =>
        poke.name.toLowerCase().includes(search.toLowerCase())
      );
      setPokeItemList({
        results: newList,
      });
    } else {
      setPokeItemList(pokeResult);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-center font-semibold">Search for a pokemon</h3>
      <div className="relative min-w-72 py-4 mb-4">
        <label htmlFor="Search" className="sr-only">
          {' '}
          Search{' '}
        </label>

        <input
          type="text"
          id="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for pokemon by name..."
          className="w-full rounded-md border border-gray-300 px-2 py-2.5 pe-10 shadow-sm sm:text-sm "
        />

        <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
          <button
            type="button"
            className="text-gray-600 hover:text-gray-700"
            onClick={handleSubmit}
          >
            <span className="sr-only">Search</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </span>
      </div>
    </form>
  );
}

Search.propTypes = {
  setPokeItemList: PropTypes.func,
  pokeResult: PropTypes.object,
};

export default Search;
