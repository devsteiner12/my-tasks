import { iTask } from "../../contexts/TasksContext";

export const Sort = (arrTasks: iTask[]) => {
  return arrTasks.sort((a, b) => {
    return a.order - b.order;
  });
};
