import styled from "styled-components";

const Header = styled.div`
  border-bottom: solid 2px gainsboro;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
const Title = styled.h1`
  font-weight: 600;
`;
const Select = styled.select`
  width: 100px;
  height: 40px;
`;

const HeaderPage = () => {
  return (
    <>
      <Header>
        <Title>Pokemon</Title>
        <Select></Select>
      </Header>
    </>
  );
};

export default HeaderPage;
