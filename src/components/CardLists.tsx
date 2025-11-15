import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { type PokemonListApiType, dataListApi } from "../api/DataApi";

const CardLists = () => {
  const [pokemons, setPokemons] = useState<PokemonListApiType>({
    next: "",
    results: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const result = await dataListApi("pokemon");
      setPokemons(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <CardList>
        {pokemons.results.map((pokemon) => (
          <Link to={`/pokemon/${pokemon.name}`}>
            <li key={pokemon.name}>
              <Card key={pokemon.name} pokemon={pokemon} />
            </li>
          </Link>
        ))}
      </CardList>
    </>
  );
};

const CardList = styled.ul`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  justify-items: center;
`;

export default CardLists;
