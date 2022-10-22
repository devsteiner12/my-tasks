import { FormEvent, useContext, useState } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { StyledInput } from "../../styles/components/Input";
import { StyledSelect } from "../../styles/components/Select";
import { StyledForm } from "./styles";

export const Form = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [selectType, setSelectType] = useState("");

  const { handleCreateTask } = useContext(TasksContext);

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();
    handleCreateTask(inputTitle, selectType);

    setInputTitle("");
    setSelectType("");
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Inserir tarefa</h2>

        <div className="input-select__container">
          <StyledInput
            onChange={(event) => setInputTitle(event.target.value)}
            value={inputTitle}
            type="text"
            placeholder="Digitar título da tarefa"
          />

          <StyledSelect
            onChange={(event) => setSelectType(event.target.value)}
            value={selectType}
          >
            <option value="" disabled>
              Selecionar tipo
            </option>
            <option value="urgency">Urgente</option>
            <option value="priority">Prioritária</option>
            <option value="normal">Normal</option>
          </StyledSelect>
        </div>

        <button type="submit">Adicionar Tarefa na Lista</button>
      </StyledForm>
    </>
  );
};
