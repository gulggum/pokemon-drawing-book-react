import styled from "styled-components";
import CardLists from "./CardLists";

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

const HeaderPage = () => {
  return (
    <>
      <Header>
        <Title>Pokemon</Title>
        <Option>
          {" "}
          <Button>Dark</Button>
          <Select>
            <option>타입</option>
            <option>속성</option>
          </Select>
        </Option>
      </Header>
      <CardLists />
    </>
  );
};

export default HeaderPage;
