import { iTask, TasksContext } from "../../../contexts/TasksContext";
import { useContext } from "react";
import { StyledCard, StyledType, StyledTypeTitle } from "./styles";

interface iCardProps {
  task: iTask;
}

export const Card = ({ task }: iCardProps) => {
  const { title, type } = task;
  const { handleRemoveTask } = useContext(TasksContext);

  return (
    <StyledCard>
      <StyledTypeTitle>
        <StyledType types={type}></StyledType>
        <p>{title}</p>
      </StyledTypeTitle>
      <button type="button" onClick={() => handleRemoveTask(task)}></button>
    </StyledCard>
  );
};
