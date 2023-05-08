"use client";
import { Textarea, Button } from "flowbite-react";
import { useState } from "react";

export const FormComponent = () => {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit} className={"mb-2 block"}>
      <div id="textarea">
        <Textarea
          id="todo"
          placeholder="Add a task"
          required={true}
          style={{ color: "black" }}
        />
      </div>
      <Button
        type="submit"
        className="flex-4"
        style={{
          backgroundColor: "green",
          color: "white",
          height: "40px",
          width: "100px",
        }}
      >
        Submit
      </Button>
    </form>
  );
};
