import React from "react";
import persona_image from "../images/user_task_flow.png";

export default function Persona() {
  return (
    <div className="p-5 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Persona</h2>
        <p className="mb-3 text-sm">text</p>
        <img src={persona_image} className="h-4/5" alt="Persona" />
      </div>
    </div>
  );
}
