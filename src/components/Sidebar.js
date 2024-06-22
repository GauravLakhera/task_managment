import React from "react";
import add from "../images/add.png";
import task from "../images/task.png";
import home from "../images/home.png";
import { Link } from "react-router-dom";
import category from "../images/category.png"

const Sidebar = () => {
  return (
    <div className="p-2 md:w-[10%] m-5">
      <h1 className="text-2xl font-bold">Task List</h1>
      <h1 className="text-xs">Good Morning :)</h1>
      <div className="md:space-y-5 space-x-2 flex items-center justify-center mt-2 md:mt-0  md:flex-col ">
        <span className="flex items-center  space-x-1 md:w-full md:mt-4">
          <img className="w-5 h-5" src={home} alt="home" />
          <Link to="/">Home</Link>
        </span>
        <span className="flex items-center space-x-1 md:w-full">
          <img className="w-5 h-5" src={task} alt="task" />
          <Link to="/">See All Task</Link>
        </span>
        <span className="flex items-center space-x-1 md:w-full">
          <img className="w-5 h-5" src={add} alt="add" />
          <Link to="/create">Add Task</Link>
        </span>
        <span className="flex items-center space-x-1 md:w-full">
          <img className="w-5 h-5" src={category} alt="add" />
          <Link to="/category">Category </Link>
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
