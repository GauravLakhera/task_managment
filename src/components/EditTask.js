import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTaskById, updateTask } from "../taskService";

const EditTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState({
    username: "",
    coverImage: "",
    heading: "",
    description: "",
    dueDate: "",
    priority: 'medium',
    type: 'personal',
  });

  const navigate = useNavigate();

  useEffect(() => {
    loadTask();
  }, [id]);

  const loadTask = async () => {
    const response = await getTaskById(id);
    setTask(response.data);
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask(id, task);
    navigate("/");
  };
  

  return (
    <div className="w-[70%] flex flex-col m-auto border p-2">
      <h1 className="text-xl font-semibold">Edit Task</h1>
      
      <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
        <input
        
          className="p-2 border border-gray-500 mt-2"
          type="text"
          name="username"
          placeholder="Username"
          value={task.username}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border border-gray-500"
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          value={task.coverImage}
          onChange={handleChange}
        />
        <input
          className="p-2 border border-gray-500"
          type="text"
          name="heading"
          placeholder="Heading"
          value={task.heading}
          onChange={handleChange}
          required
        />
        <textarea
          className="p-2 border border-gray-500"
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
        />
        <input
          className="p-2 border border-gray-500"
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
         <select name="priority" value={task.priority} onChange={handleChange}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <select name="type" value={task.type} onChange={handleChange}>
          <option value="personal">Personal</option>
          <option value="office">Office</option>
          <option value="freelance">Freelance</option>
        </select>
        <button className="bg-blue-600 text-white p-2 rounded-md" type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditTask;
