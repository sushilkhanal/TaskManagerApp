"use client";

import { Button, TextInput } from "flowbite-react";
import { useState } from "react";

export const FormComponent = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 place-items-center">
      <div className="flex-1">
        <TextInput
          id="task"
          type="textarea"
          required={true}
          shadow={true}
          placeholder="Add your task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </div>
      <Button type="submit" className="flex-4">
        Submit
      </Button>
    </form>
  );
};
