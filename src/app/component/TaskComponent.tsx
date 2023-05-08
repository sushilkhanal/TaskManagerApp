"use client";

import { Alert } from "flowbite-react";

export const TaskComponent = ({ title, completed }) => {
  return (
    <Alert
      color={completed ? "success" : "failure"}
      onDismiss={function onDismiss() {
        return alert("Alert dismissed!");
      }}
      additionalContent={
        <>
          <div
            className={
              "mt -2 mb-4 text-sm" + completed
                ? "text-green-700 dark:text-green-800"
                : "text-red-700 dark:text-red-800"
            }
          >
            Addition information about the alert.
          </div>
          <div className="flex">
            <button type="button">show more</button>
            <button type="button">clear</button>
          </div>
        </>
      }
      className="mt-2"
    >
      <span>
        <span className="font-medium">
          {"Completed : " + completed.toString()}
        </span>
        <br />
        {title}
      </span>
    </Alert>
  );
};
