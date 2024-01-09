import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./pages/ErrorPage";
import TasksPage from "./pages/TasksPage";
import TasksForm from "./pages/TasksForm";

import { ContextProvider } from "./context/Context";

import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TasksPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/new",
    element: <TasksForm />,
  },
  {
    path: "/edit/:id",
    element: <TasksForm />,
  },
]);

function App() {
  return (
    <div className="bg-zinc-900 h-screen">
      <Navbar />
      <div className="container mx-auto px-20 py-4">
        <ContextProvider>
          <RouterProvider router={router} />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
