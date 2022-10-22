import { createContext, useState } from "react";
import { GeneratorIds } from "../utils/GeneratorIds";
import { Sort } from "../utils/Sort";

export interface iTask {
  id: number;
  title: string;
  type: string;
  order: number;
}

interface iTasksContext {
  tasks: iTask[];
  tasksFiltered: iTask[];
  handleCreateTask: (inputTitle: string, selectType: string) => void;
  handleRemoveTask: (task: iTask) => void;
  handleSearchTask: (search: string) => void;
}

interface iTasksProviderProps {
  children: React.ReactNode;
}

export const TasksContext = createContext({} as iTasksContext);

export const TasksProvider = ({ children }: iTasksProviderProps) => {
  const [tasks, setTasks] = useState([] as iTask[]);
  const [tasksFiltered, setTasksFiltered] = useState([] as iTask[]);

  const handleCreateTask = (inputTitle: string, selectType: string) => {
    const title = inputTitle.trim();
    const type = selectType.trim();

    if (title && type != "") {
      //Urgency
      let order = 0;

      if (type == "priority") {
        order = 1;
      } else if (type == "normal") {
        order = 2;
      }

      const task = {
        title: title,
        type: type,
        order: order,
      };

      const tasksNormalized = Sort(GeneratorIds([...tasks, task]));
      setTasks(tasksNormalized);
      setTasksFiltered([]);
    }
  };

  const handleRemoveTask = (task: iTask) => {
    const newTasks = tasks.filter(({ id }) => id != task.id);
    setTasks(newTasks);

    if (tasksFiltered) {
      const newTasksFiltered = tasksFiltered.filter(({ id }) => id != task.id);
      setTasksFiltered(newTasksFiltered);
    }
  };

  const handleSearchTask = (inputSeach: string) => {
    const search = inputSeach.toLowerCase().trim();

    const tasksSearch = tasks.filter(({ title }) =>
      title.toLowerCase().includes(search)
    );

    setTasksFiltered(tasksSearch);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        tasksFiltered,
        handleCreateTask,
        handleRemoveTask,
        handleSearchTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
