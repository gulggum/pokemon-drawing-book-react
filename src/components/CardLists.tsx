import styled from "styled-components";
import Card from "./Card";
import { data, Link } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAppDispatch, type RootState } from "../store/store";
import { useSelector } from "react-redux";
import { fetchPokemon } from "../store/pokemonSlice";

const CardLists = () => {
  const dispatch = useAppDispatch();
  const { pokemons, loading } = useSelector(
    (state: RootState) => state.pokemon
  );
  const { ref, inView } = useInView({
    threshold: 0,
  }); // ref달린 요소가 화면에 보일때 inview === true(useEffect실행됨)

  useEffect(() => {
    dispatch(fetchPokemon(""));
  }, []);

  useEffect(() => {
    if (!loading && inView && pokemons.next) {
      dispatch(fetchPokemon(pokemons.next)); // 다음 데이터
    }
  }, [inView]);
  return (
    <>
      {loading ? (
        "loading..."
      ) : (
        <>
          <CardList>
            {pokemons.results.map((pokemon, index) => (
              <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
                <li ref={index === pokemons.results.length - 1 ? ref : null}>
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
