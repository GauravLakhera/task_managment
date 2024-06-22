import React, { useState, useEffect } from "react";
import { getAllTasks, deleteTask } from "../taskService";
import fire from "../images/flame.png";
import flag from "../images/golf-hole.png";

const Category = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await getAllTasks();
    setTasks(response.data);
  };

  // Function to filter tasks by category
  const filterTasksByCategory = (category) => {
    return tasks.filter((task) => task.type === category);
  };

  // Function to filter tasks by priority
  const filterTasksByPriority = (priority) => {
    return tasks.filter((task) => task.priority === priority);
  };

  // Function to handle task deletion
  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className=" w-[85%] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Category-wise Tasks</h1>

      {/* Office Category */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Office Tasks</h2>
        {filterTasksByCategory("office").length > 0 ? (
          filterTasksByCategory("office").map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-500">No office tasks found.</p>
        )}
      </div>

      {/* Personal Category */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Personal Tasks</h2>
        {filterTasksByCategory("personal").length > 0 ? (
          filterTasksByCategory("personal").map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-500">No Personal tasks found.</p>
        )}
      </div>

      {/* Freelance Category */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Freelance Tasks</h2>
        {filterTasksByCategory("freelance").length > 0 ? (
          filterTasksByCategory("freelance").map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-500">No Freelance tasks found.</p>
        )}
      </div>

      {/* High Priority */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">High Priority Tasks</h2>
        {filterTasksByCategory("high").length > 0 ? (
          filterTasksByCategory("high").map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-500">No High Priority tasks found.</p>
        )}
      </div>

      {/* Medium Priority */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Medium Priority Tasks</h2>
        {filterTasksByCategory("medium").length > 0 ? (
          filterTasksByCategory("medium").map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-500">No Medium Priority tasks found.</p>
        )}
      </div>

      {/* Low Priority */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Low Priority Tasks</h2>
        {filterTasksByCategory("low").length > 0 ? (
          filterTasksByCategory("low").map((task) => (
            <TaskCard key={task._id} task={task} onDelete={handleDelete} />
          ))
        ) : (
          <p className="text-gray-500">No Low Priority tasks found.</p>
        )}
      </div>
    </div>
  );
};

// TaskCard component to display individual task details
const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="bg-gray-200 p-4 mb-4 rounded-lg">
      <div className="flex items-center mb-2">
        <img
          className="w-10 h-10 rounded-full mr-2"
          src={task.coverImage}
          alt="Task Cover"
        />
        <h3 className="font-semibold">{task.heading}</h3>
      </div>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <div className="flex items-center mb-2">
        <img className="w-4 h-4 mr-1" src={flag} alt="Flag" />
        <span className="text-xs text-gray-500">
          {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
      <div className="flex items-center">
        <div className="flex items-center bg-black rounded-full p-1 text-white">
          <img className="w-4 h-4 mr-1" src={fire} alt="Priority" />
          <span>{task.priority}</span>
        </div>
        <button
          className="ml-auto bg-red-500 text-white px-3 py-1 rounded-full"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Category;
