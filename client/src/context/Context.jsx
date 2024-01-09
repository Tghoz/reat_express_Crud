/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { useContext, useState } from "react";
import {
  getTaskRequest,
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequestId,
  updateTaskRequest,
  toggleTaskDoneRequest,
} from "../api/tasks.api";

import { Context } from "./ProviderContext";

export const useTasks = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useTasks must be used within a Context.Provider");
  }
  return context;
};

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  async function loadTasks() {
    const response = await getTaskRequest();
    setTasks(response.data);
  }

  const deleteTasks = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      console.log(response);
      setTasks(tasks.filter((tasks) => tasks.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createTasks = async (tasks) => {
    try {
      const response = await createTaskRequest(tasks);
      console.log(response);
    } catch (error) {
      console.error;
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequestId(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newData) => {
    try {
      const response = await updateTaskRequest(id, newData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find((task) => task.id === id);
      await toggleTaskDoneRequest(id, taskFound.done === 0 ? true : false); 
      setTasks(
        tasks.map((task) =>
          task.id === id ? (task.done = task.done === 0 ? 1 : 0) : task.done
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Context.Provider
      value={{
        tasks,
        loadTasks,
        deleteTasks,
        createTasks,
        getTask,
        updateTask,
        toggleTaskDone,
      }}
    >
      {children}
    </Context.Provider>
  );
};
