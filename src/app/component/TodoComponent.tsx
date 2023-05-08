"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { TaskComponent } from "./TaskComponent";

export default function TodoComponent(props) {
  const [data, setData] = useState(props.data);

  return (
    <>
      {data ? (
        data.map((todo, index) => <TaskComponent key={index} {...todo} />)
      ) : (
        <h1>{todo.title}</h1>
      )}
    </>
  );
}
