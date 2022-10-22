import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { StyledContainer, StyledGlobal } from "./styles/global";

const App = () => {
  return (
    <>
      <StyledGlobal />

      <Header />

      <StyledContainer>
        <Form />
        <List />
      </StyledContainer>
    </>
  );
};

export default App;
