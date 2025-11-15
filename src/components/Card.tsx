import styled from "styled-components";
import { detailApi, type DetailType } from "../api/DataApi";
import { useEffect, useState } from "react";

interface CardProps {
  pokemon: {
    name: string;
    url: string;
  };
}

const Card = ({ pokemon }: CardProps) => {
  const [pokemonInfo, setPokemonInfo] = useState<Partial<DetailType>>({
    id: 0,
    height: 0,
    weight: 0,
    types: [],
    sprites: {
      front_default: "",
    },
    stats: [],
    image: "",
    color: { name: "" },
    koreanName: "",
  });
  useEffect(() => {
    const getDetailData = async () => {
      const result = await detailApi(pokemon.name);
      console.log(result);
      setPokemonInfo(result);
    };
    getDetailData();
  }, [pokemon.name]);
  return (
    <>
      <Box>
        <Top>
          <Name>{pokemonInfo.koreanName}</Name>
          <Number>{pokemonInfo?.id}</Number>
        </Top>
        <Body>
          <Img src={pokemonInfo?.image} alt="" />
        </Body>
        <Bottom>
          <div></div>
          <Company>company</Company>
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
const Name = styled.span`
  background-color: ${(props) => props.color};
  padding: 3px 10px;
  border-radius: 25px;
  font-size: 0.8rem;
`;
const Number = styled.span`
  background-color: #e7e774;
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
