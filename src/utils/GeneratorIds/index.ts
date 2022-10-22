import { iTask } from "../../contexts/TasksContext";

type tGeneratorIds = Omit<iTask, "id">;

export const GeneratorIds = (arrTasks: tGeneratorIds[]) => {
  return arrTasks.map((task, index) => {
    return {
      ...task,
      id: index,
    };
  });
};
