"use client";

// import { useState } from "react";
import { useState } from "react";
import { Alert } from "flowbite-react";

export const TaskComponent = ({ id, title, completed, onDismiss }) => {
  const [deleted, setDeleted] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(completed);

  const deleteTask = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setDeleted(true);
    }
  };

  const markCompleted = () => {
    setTaskCompleted(true);
  };

  if (deleted) {
    return null;
  }

  return (
    <Alert
      color={taskCompleted ? "success" : "failure"}
      onDismiss={onDismiss || deleteTask}
      additionalContent={
        <>
          <div
            className={
              "mt-2 mb-4 text-sm " + taskCompleted
                ? "text-green-700 dark:text-green-800"
                : "text-red-700 dark:text-red-800"
            }
          >
            More info about this info alert goes here. This example text is
            going to run a bit longer so that you can see how spacing within an
            alert works with this kind of content.
          </div>
          <div className="flex gap-2 m-0 text-xl">
            {!taskCompleted && (
              <button
                type="button"
                className="bg-green-900 text-white"
                onClick={markCompleted}
              >
                Mark Completed
              </button>
            )}
            <button
              type="button"
              className="text-white bg-red-600"
              onClick={deleteTask}
            >
              Delete
            </button>
          </div>
        </>
      }
      className="mt-2"
    >
      <span>
        <span className="font-medium">
          {"Completed: " + taskCompleted.toString()}
        </span>{" "}
        <br />
        {title}
      </span>
    </Alert>
  );
};
