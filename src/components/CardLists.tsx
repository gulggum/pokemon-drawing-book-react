import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { type PokemonListApiType, dataListApi } from "../api/DataApi";
import useInfiniteScroll from "react-infinite-scroll-hook";

const CardLists = () => {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState<PokemonListApiType>({
    next: "",
    results: [],
  });

  const [infiniteRef] = useInfiniteScroll({
    loading: false, //현재 로딩 중이면 스크롤 이벤트 무시
    hasNextPage: pokemons.next != "", //다음 페이지가 없으면 더 이상 스크롤 안함
    onLoadMore: async () => {
      const morePokemons = await dataListApi(pokemons.next);
      setPokemons({
        ...morePokemons,
        results: [...morePokemons.results, ...morePokemons.results],
      });
      console.log(pokemons);
    }, //다음 데이터를 불러오는 콜백 (여기선 loadMore)
    disabled: false, //true면 스크롤 감지 비활성화, 여기선 error 발생하면 멈추도록
    rootMargin: "0px 0px 400px 0px", //IntersectionObserver 옵션, 감지 지점 설정/아래에서 400px 남았을 때 onLoadMore 트리거
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await dataListApi("pokemon");
      setPokemons(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        "loading..."
      ) : (
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
          <InfinityBox ref={infiniteRef}>loading...</InfinityBox>
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
const InfinityBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default CardLists;
