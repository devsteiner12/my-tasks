import { FormEvent, useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { StyledContainer } from "../../styles/global";
import logo from "../../assets/logo.svg";
import { StyledForm, StyledHeader } from "./styles";
import { StyledInput } from "../../styles/components/Input";

export const Header = () => {
  const { handleSearchTask } = useContext(TasksContext);
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    handleSearchTask(inputSearch);
    setInputSearch("");
  };
  return (
    <StyledHeader>
      <StyledContainer className="container">
        <div>
          <img src={logo} alt="Logo My Task's" />
        </div>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            onChange={(event) => setInputSearch(event.target.value)}
            value={inputSearch}
            type="text"
            placeholder="Pesquisar tarefa"
          />
          <button type="submit"></button>
        </StyledForm>
      </StyledContainer>
    </StyledHeader>
  );
};
