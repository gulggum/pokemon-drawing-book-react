import styled from "styled-components";
import Card from "./Card";
import { Link } from "react-router-dom";

const CardLists = () => {
  return (
    <>
      <CardList>
        {Array.from({ length: 10 }).map((_, index) => (
          <Link to={"/pokemon/:name"}>
            <li key={index}>
              <Card />
            </li>
          </Link>
        ))}
      </CardList>
    </>
  );
};

const CardList = styled.ul`
  padding: 1rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  justify-items: center;
`;

export default CardLists;
