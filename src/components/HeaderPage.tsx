import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
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
          <Title>
            <img
              src="https://dthezntil550i.cloudfront.net/4w/latest/4w1609281705039430001177247/ef802f2f-0e78-4a5d-9777-52f1f5ae746c.png"
              alt="logo"
              style={{
                width: "40px",
                marginTop: "5px",
                marginRight: "5px",
              }}
            />
            Pokémon
          </Title>
        </Link>

        <Menu>
          {" "}
          <Button>Dark</Button>
          <Select value={imageType} onChange={onSelectChange}>
            <Option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>앞모습</Option>
            <Option value={POKEMON_IMAGE_TYPE.BACK_DEFAULT}>뒷모습</Option>
            <Option value={POKEMON_IMAGE_TYPE.FRONT_SHINY}>샤이니</Option>
          </Select>
        </Menu>
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
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 2rem;
  &:hover {
    color: #ff0000;
  }
`;
const Menu = styled.div``;

const Select = styled.select`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5px 12px;
  height: 40px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
`;
const Option = styled.option``;
const Button = styled.button`
  margin-right: 10px;
  border: none;
  padding: 10px 15px;
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
