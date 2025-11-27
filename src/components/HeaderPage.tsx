import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { POKEMON_IMAGE_TYPE } from "../constants/imageStringType";
import { useAppDispatch, type RootState } from "../store/store";
import { useSelector } from "react-redux";
import { selectType, type PokemonImageKeyType } from "../store/imageTypeSlice";
import { type ChangeEvent } from "react";
import { toggleTheme } from "../store/themeSlice";

const HeaderPage = () => {
  const imageType = useSelector(
    (state: RootState) => state.imageType.selectedType
  );
  const dispatch = useAppDispatch();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(selectType(e.target.value as PokemonImageKeyType));
  };
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <>
      <Header>
        <Link to={"/"}>
          <Title>
            <LogoImg
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png"
              alt="logo"
            />
            Pokémon
          </Title>
        </Link>
        <Menu>
          {" "}
          <Button onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? (
              <IoIosSunny style={{ fontSize: "30px" }} />
            ) : (
              <FaRegMoon />
            )}
          </Button>
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
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.bgColor};
  border-bottom: solid 2px gainsboro;
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
const LogoImg = styled.img`
  width: 40px;
  margin-top: 5px;
  margin-right: 5px;
`;
const Menu = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

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
  border: none;
  padding: 5px 8px;
  border-radius: 50%;
  font-size: 15px;
  cursor: pointer;
`;

export default HeaderPage;
