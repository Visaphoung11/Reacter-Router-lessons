import React from "react";
import { useNavigate } from "react-router";
export const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact page</h1>
      <div className="contact-button flex items-center gap-4 justify-center w-full pb-20">
        <button onClick={() => navigate("info")}>Contact info</button>
        <button onClick={() => navigate("form")}>Contact form</button>
      </div>
    </div>
  );
};
