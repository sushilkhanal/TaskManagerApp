import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <h1 className="text-White-800 text-3xl">
        Todo Application Using Next.JS
      </h1>
      {children}
    </>
  );
}
