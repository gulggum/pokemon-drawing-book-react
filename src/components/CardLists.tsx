import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { type PokemonListApiType, dataListApi } from "../api/DataApi";
import { useInView } from "react-intersection-observer";

const CardLists = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonListApiType>({
    count: 0,
    next: "",
    results: [],
  });
  const [isFetching, setIsFetching] = useState(false); //중복 호출 방지
  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (isFetching) return; // 이미 fetch 중이면 건너뜀
      setIsFetching(true);
      const result = await dataListApi(); //기본 20개 랜더링
      setPokemons(result);
      setLoading(false);
      setIsFetching(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const loadMore = async () => {
      if (!pokemons.next || isFetching) return;
      setIsFetching(true);
      const morePokemons = await dataListApi(pokemons.next);
      setPokemons({
        ...pokemons,
        next: morePokemons.next,
        results: [...pokemons.results, ...morePokemons.results], //기존 + 새 데이터
      });
      setIsFetching(false);
    };
    if (inView) {
      loadMore();
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
