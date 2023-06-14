"use client";
import { useEffect, useState } from "react";
import { TaskComponent } from "./TaskComponent";
import { FormComponent } from "./FormComponent";

export default function TodoComponent(props) {
  const [data, setData] = useState(props.data);

  // Delete task with the specified ID
  const deleteTask = (id) => {
    setData((prevData) => prevData.filter((task) => task.id !== id));
  };

  // Add a new task to the list
  const addTask = (title) => {
    const newTask = {
      userId: 1,
      id: Math.floor(Math.random() * 100000), // Random ID
      title: title,
      completed: false,
    };
    setData((prevData) => [...prevData, newTask]);
  };

  return (
    <>
      <h1>Todo application</h1>
      <div>
        <FormComponent onAddTask={addTask} />
      </div>
      {data ? (
        data.map((todo, index) => (
          <TaskComponent
            key={index}
            {...todo}
            onDismiss={() => deleteTask(todo.id)}
          />
        ))
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
