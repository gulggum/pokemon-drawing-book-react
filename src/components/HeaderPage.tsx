import { Link } from "react-router-dom";
import styled from "styled-components";
import { POKEMON_IMAGE_TYPE } from "../constants/imageStringType";
import { useAppDispatch, type RootState } from "../store/store";
import { useSelector } from "react-redux";
import { selectType, type PokemonImageKeyType } from "../store/imageTypeSlice";
import type { ChangeEvent } from "react";

const HeaderPage = () => {
  const imageType = useSelector(
    (state: RootState) => state.imageType.selectedType
  );
  const dispatch = useAppDispatch();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectType(e.target.value as PokemonImageKeyType));
  };

  return (
    <>
      <Header>
        <Link to={"/"}>
          {" "}
          <Title>Pokemon</Title>
        </Link>

        <Option>
          {" "}
          <Button>Dark</Button>
          <Select value={imageType} onChange={onSelectChange}>
            <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>앞모습</option>
            <option value={POKEMON_IMAGE_TYPE.BACK_DEFAULT}>뒷모습</option>
            <option value={POKEMON_IMAGE_TYPE.FRONT_SHINY}>샤이니</option>
          </Select>
        </Option>
      </Header>
    </>
  );
};

const Header = styled.div`
  border-bottom: solid 2px gainsboro;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 2rem;
  &:hover {
    color: orange;
  }
`;
const Option = styled.div``;
const Select = styled.select`
  width: 100px;
  height: 40px;
`;
const Button = styled.button`
  margin-right: 5px;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: 800;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export default HeaderPage;
