import { Form, Formik } from "formik";
import { useTasks } from "../context/Context";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TasksForm() {
  const [task, setTasks] = useState({
    title: "",
    description: "",
  });

  const { createTasks, getTask, updateTask } = useTasks();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTasks = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTasks({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values) => {
          console.log(values);

          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTasks(values);
          }
          navigate("/");
          setTasks({
            title: task.title,
            description: task.description,
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md  mx-auto mt-10 p-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : " New Task "}
            </h1>
            <label className="block">Title</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Write a Title"
              onChange={handleChange}
              value={values.title}
            />

            <label className="block">Description</label>
            <textarea
              className="px-2 py-1 rounded-sm w-full"
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default TasksForm;
