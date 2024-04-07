import PropTypes from 'prop-types';

import Card from './Card';

function CardList({ pokeResult }) {
  return (
    <section className="grid xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
      {pokeResult?.results?.map((pokemon, idx) => (
        <Card key={idx} pokemonInfo={pokemon} />
      ))}
    </section>
  );
}

CardList.propTypes = {
  pokeResult: PropTypes.object,
};

export default CardList;
