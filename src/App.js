import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import CreateTask from "./components/CreateTask";
import EditTask from "./components/EditTask";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col">
    <Sidebar />
    <Outlet />
    </div>

    </>
  );
};

export default App;
