import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getTaskById } from "../taskService";
import fire from "../images/flame.png";

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await getTaskById(id);
        setTask(response.data);
      } catch (error) {
        console.error("Error loading task:", error);
        // Handle error, e.g., show error message or redirect
      }
    };

    loadTask();
  }, [id]);

  return (
    <div>
      {task ? (
        <>
          <div className="flex flex-col  mt-2 items-center w-[85%] m-auto ">
            <div className="flex flex-col w-full bg-[#95F9D5] items-center p-2">
              <div className="flex  space-x-1 items-center">
                <img
                  className="rounded-full object-cover w-20 h-20"
                  src={task.coverImage}
                  alt={task.heading}
                />
                <h1 className="text-4xl">{task.heading}</h1>
              </div>
              <div className="flex justify-start space-x-2 w-full py-4 px-2">
                <h1 className=" bg-white rounded-s-xl rounded-e-xl px-2">
                  {task.type}
                </h1>
                <div className="flex  items-center bg-black  rounded-s-xl rounded-e-xl px-2">
                  <img className="w-5 h-5 " src={fire} alt="Fire icon" />
                  <h1 className="text-white">{task.priority}</h1>
                </div>
              </div>
            </div>

            <h1 className="flex justify-start w-full text-xl mt-3 font-medium">
              Description
            </h1>
            <p className=" py-2 ">{task.description}</p>
            <p className="mt-1 font-semibold">{task.username}</p>
            <p>{new Date(task.dueDate).toLocaleDateString()}</p>

            <Link
              className="bg-blue-700 p-2 w-full text-center mt-2 text-white rounded-lg"
              to={`/tasks/edit/${task._id}`}
            >
              Edit
            </Link>
            <Link to="/">Back to List</Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TaskDetail;
