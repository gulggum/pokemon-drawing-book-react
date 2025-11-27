import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { fetchPokemons } from "../store/pokemonSlice";
import { useInView } from "react-intersection-observer";

const CardLists = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: RootState) => state.pokemons);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  //처음 랜더링 기본20개 출력
  useEffect(() => {
    if (data.results.length === 0) dispatch(fetchPokemons());
  }, [dispatch]);
  //다음페이지 출력
  useEffect(() => {
    if (inView && data.next) dispatch(fetchPokemons(data.next));
  }, [inView, dispatch, data.next]);

  return (
    <>
      {data.results.length === 0 && loading ? (
        "포켓몬들을 불러오는중...."
      ) : (
        <>
          <CardList>
            {data.results.map((pokemon, index) => (
              <Link to={`/pokemon/${pokemon.name}`}>
                <li
                  key={pokemon.name}
                  ref={index === data.results.length - 1 ? ref : undefined}
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
  margin-top: 90px;
`;

export default CardLists;
