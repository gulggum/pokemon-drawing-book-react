import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchPokemons } from "../store/pokemonSlice";

const CardLists = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.pokemons);
  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <>
          <CardList>
            {data.results.map((pokemon) => (
              <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                <li
                  key={pokemon.name}
                  // ref={index === pokemons.results.length - 1 ? ref : null}
                >
                  <Card pokemon={pokemon} />
                </li>
              </Link>
            ))}
          </CardList>
        </>
      )}
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
