import styled from "styled-components";
import { detailApi } from "../api/DataApi";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { FaQuestion } from "react-icons/fa";

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

  if (!pokemon)
    return (
      <Box>
        <StyledQuestion />
      </Box>
    );
  return (
    <>
      {!pokemonInfo ? (
        <Box>
          <StyledQuestion />
        </Box>
      ) : (
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
            <Company>Pokémon</Company>
          </Bottom>
        </Box>
      )}
    </>
  );
};

const Box = styled.div`
  width: 200px;
  height: 240px;
  padding: 1rem;
  /* border: 1px solid gainsboro; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  &:hover {
    scale: 1.01;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.span<NameColorProps>`
  background-color: ${(props) => props.bgcolor};
  color: ${({ bgcolor }) => (bgcolor === "white" ? "black" : "white")};
  padding: 3px 10px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  margin-right: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const Number = styled.span`
  padding: 3px 10px;
  border-radius: 10px;
  font-size: 0.8rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const StyledQuestion = styled(FaQuestion)`
  width: 40%;
  height: 100%;
  color: #f1cf46;
  margin: 0 auto;
`;

export default Card;
