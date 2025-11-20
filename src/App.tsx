import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import { createGlobalStyle, styled } from "styled-components";
import CardLists from "./components/CardLists";
import CardDetail from "./components/CardDetail";

const GlobalStyle = createGlobalStyle`
a{
  text-decoration: none;
  color: inherit;
}
ul{
  list-style: none;
}
`;
const Container = styled.div`
  max-width: 800px;
  padding: 0 1rem;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Container>
          <HeaderPage />
          <Routes>
            <Route path="/" element={<CardLists />} />
            <Route path="/pokemon/:name" element={<CardDetail />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
