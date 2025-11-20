import styled from "styled-components";
import { detailApi } from "../api/DataApi";
import { useEffect, useState } from "react";

interface CardProps {
  pokemon: {
    name: string;
    url: string;
  };
}
interface DetailProps {
  color: string;
  height: number;
  id: number;
  image: string;
  koreanName: string;
  type: string[];
  weight: number;
}
interface NameColorProps {
  bgColor?: string;
}

const Card = ({ pokemon }: CardProps) => {
  const [pokemonInfo, setPokemonInfo] = useState<DetailProps>();
  useEffect(() => {
    const getDetailData = async () => {
      const result = await detailApi(pokemon.name);
      setPokemonInfo(result);
    };
    getDetailData();
  }, [pokemon.name]);
  console.log(pokemonInfo);
  return (
    <>
      <Box>
        <Top>
          <Name bgColor={pokemonInfo?.color}>{pokemonInfo?.koreanName}</Name>
          <Number>{pokemonInfo?.id}</Number>
        </Top>
        <Body>
          <Img src={pokemonInfo?.image} alt={pokemonInfo?.koreanName} />
        </Body>
        <Bottom>
          <div></div>
          <Company>Pokemon`</Company>
        </Bottom>
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 200px;
  height: 240px;
  padding: 1rem;
  border: 1px solid gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.span<NameColorProps>`
  background-color: ${(props) => props.bgColor};
  color: white;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;
const Number = styled.span`
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;

const Body = styled.div`
  text-align: center;
`;
const Img = styled.img`
  width: 80%;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Company = styled.span`
  background-color: #e7e774;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;

export default Card;
