import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fire from "../images/flame.png";
import flag from "../images/golf-hole.png";

import { getAllTasks, deleteTask } from "../taskService";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const response = await getAllTasks();
    setTasks(response.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  return (
    <div className="md:w-[70%]  w-[90%] flex flex-col m-auto border p-2">
      <div>
        <h1 className="text-4xl mt-1">You Have {tasks.length} Tasks</h1>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={task._id}>
            <Link to={`/tasks/${task._id}`}>
              <div
                className={` bg-gray-200 shadow-md flex flex-col border space-y-2 m-5 p-2 rounded-lg`}
              >
                <div className="flex items-center space-x-2">
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={task.coverImage}
                    alt="cover"
                  />
                  <h1 className="bg-white rounded-s-xl rounded-e-xl px-2">
                    {task.type}
                  </h1>
                  <div className="flex items-center bg-black rounded-s-xl rounded-e-xl px-2">
                    <img className="w-5 h-5" src={fire} alt="fire" />
                    <h1 className="text-white">{task.priority}</h1>
                  </div>
                </div>

                <h1 className="text-xl font-bold p-1">{task.heading}</h1>
                <h1 className="p-1 text-ellipsis whitespace-nowrap overflow-hidden">
                  {task.description}
                </h1>
                <div className="flex items-center space-x-1">
                  <img className="w-5 h-5" src={flag} alt="flag" />
                  <h1 className="text-xs">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </h1>
                </div>

                <button
                  className="bg-gray-800 text-white p-1 rounded-xl"
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <span className="flex justify-center mt-2">
        <Link
          className="p-2 my-2 rounded-lg text-center bg-blue-500 text-white"
          to="/create"
        >
          Create New Task
        </Link>
      </span>
    </div>
  );
};

export default TaskList;
