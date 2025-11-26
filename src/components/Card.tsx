import styled from "styled-components";
import { detailApi } from "../api/DataApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

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
  sprites: { front_default: string; front_shiny: string; back_default: string };
  koreanName: string;
  type: string[];
  weight: number;
}
interface NameColorProps {
  bgcolor?: string;
}

const Card = ({ pokemon }: CardProps) => {
  const [pokemonInfo, setPokemonInfo] = useState<DetailProps>();
  const imageType = useSelector(
    (state: RootState) => state.imageType.selectedType
  );
  useEffect(() => {
    const getDetailData = async () => {
      const result = await detailApi(pokemon.name);
      setPokemonInfo(result);
    };
    getDetailData();
  }, [pokemon.name]);

  return (
    <>
      <Box>
        <Top>
          <Name bgcolor={pokemonInfo?.color}>{pokemonInfo?.koreanName}</Name>
          <Number>{String(pokemonInfo?.id).padStart(3, "0")}</Number>
        </Top>
        <Body>
          <Img
            src={pokemonInfo?.sprites[imageType]}
            alt={pokemonInfo?.koreanName}
          />
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
  background-color: ${(props) => props.bgcolor};
  color: white;
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;
const Number = styled.span`
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 0.8rem;
  border: 1px solid gainsboro;
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
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
  border: 1px solid gainsboro;
`;

export default Card;
