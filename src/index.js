import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';
import TaskDetail from './components/TaskDetail';
import Category from "./components/Category"
import EditTask from './components/EditTask';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <TaskList />,
      },
      {
        path: "/create",
        element: <CreateTask />,
      },
      {
        path: "/tasks/:id",
        element: <TaskDetail />,
      },
      {
        path: "/tasks/edit/:id",
        element: <EditTask />,
      },
      {
        path:"/category",
        element:<Category/>
      }
    ],
  },
], {
  basename: "/task_managment"
});

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
