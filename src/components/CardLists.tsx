import styled from "styled-components";
import Card from "./Card";
const CardList = styled.ul`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  list-style: none;
  justify-items: center;
`;

const CardLists = () => {
  return (
    <>
      <CardList>
        {Array.from({ length: 10 }).map((_, index) => (
          <li key={index}>
            <Card />
          </li>
        ))}
      </CardList>
    </>
  );
};

export default CardLists;
