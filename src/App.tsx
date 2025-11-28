import { Routes, Route, HashRouter } from "react-router-dom";
import HeaderPage from "./components/HeaderPage";
import { createGlobalStyle, styled, ThemeProvider } from "styled-components";
import CardLists from "./components/CardLists";
import CardDetail from "./components/CardDetail";
import { useSelector } from "react-redux";
import { type RootState } from "./store/store";
import { darkTheme, lightTheme } from "./constants/theme";

function App() {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  return (
    <>
      <ThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        <HashRouter>
          <Container>
            <HeaderPage />
            <Routes>
              <Route path="/" element={<CardLists />} />
              <Route path="/pokemon/:name" element={<CardDetail />} />
            </Routes>
          </Container>
        </HashRouter>
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
