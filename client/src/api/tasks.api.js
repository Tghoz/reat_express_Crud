import axios from "axios";

export const createTaskRequest = async (task) =>
  await axios.post("http://localhost:4000/tasks", task);

export const getTaskRequest = async () =>
  await axios.get("http://localhost:4000/tasks");

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:4000/tasks/${id}`);

export const getTaskRequestId = async (id) =>
  await axios.get(`http://localhost:4000/tasks/${id}`);

export const updateTaskRequest = async (id, newData) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, newData);

export const toggleTaskDoneRequest = async (id, done) =>
  await axios.put(`http://localhost:4000/tasks/${id}`, {
    done,
  });
