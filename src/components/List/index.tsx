import { useContext } from "react";
import { TasksContext } from "../../contexts/TasksContext";
import { StyledContainer } from "./styles";
import { Card } from "./Card";

export const List = () => {
  const { tasks, tasksFiltered } = useContext(TasksContext);

  let arrTasks = [];
  if (tasksFiltered.length) {
    arrTasks = [...tasksFiltered];
  } else {
    arrTasks = [...tasks];
  }

  return (
    <StyledContainer>
      <h2>Tarefas</h2>
      <ul>
        {arrTasks?.map((task, index) => {
          return <Card key={index} task={task} />;
        })}
      </ul>
    </StyledContainer>
  );
};
