import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import { createGlobalStyle, styled, ThemeProvider } from "styled-components";
import CardLists from "./components/CardLists";
import CardDetail from "./components/CardDetail";
import { useSelector } from "react-redux";
import { type RootState } from "./store/store";
import { darkTheme, lightTheme } from "./constants/theme";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState(""); //검색어 상태(최상위부모)
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Container>
            <HeaderPage search={search} setSearch={setSearch} />
            <Routes>
              <Route path="/" element={<CardLists search={search} />} />
              <Route path="/pokemon/:name" element={<CardDetail />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
a{
  text-decoration: none;
  color: inherit;
}
ul{
  list-style: none;
}
body{
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.text};
}
`;
const Container = styled.div`
  max-width: 800px;
  padding: 0 1rem;
  margin: 0 auto;
`;

export default App;
