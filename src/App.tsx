import HeaderPage from "./components/HeaderPage";
import styled from "styled-components";
const Container = styled.div`
  max-width: 1100px;
  padding: 0 1rem;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <Container>
        <HeaderPage />
      </Container>
    </>
  );
}

export default App;
