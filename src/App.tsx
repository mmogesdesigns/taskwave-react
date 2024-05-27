import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./views/Navbar";
import AuthenticationGuard from "./components/AuthenticationGuard";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import "./App.css";
import { Task } from "./interfaces/task";
import HomePage from "./views/HomePage";

const App: React.FC = () => {
  const[tasks, setTasks] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const navigate = useNavigate();


  const handleEdit = (id: number) => {
    const task = tasks.find((task) => task.id === id);
    if (task) {
      setTaskToEdit(task);
      navigate("/task/edit");
    }
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter (task => task.id !== id));
  }

  const handleSubmit = (task: Task) => {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex((t) => t.id === task.id);
      if (taskIndex > -1) {
        
        const newTasks = [...prevTasks];
        newTasks[taskIndex] = task;
        return newTasks;
      } else {
        
        return [...prevTasks, task];
      }
    });
     setTaskToEdit(null);
     navigate("/tasks");
  };






  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/task/new"
          element={
            <AuthenticationGuard
              component={() => <TaskForm onSubmit={handleSubmit} />}
            />
          }
        />
        {/* <Route
          path="/task/edit"
          element={
            <AuthenticationGuard
              component={() => (
                <TaskForm onSubmit={handleSubmit} task={taskToEdit} />
              )}
            />
          }
        /> */}

        <Route
          path="/tasks"
          element={
            <TaskList
              tasks={tasks}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </div>
  );
};
export default App;
