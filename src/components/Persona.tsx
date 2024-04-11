import React from "react";
import persona_image from "../images/Emma_persona.png";

export default function Persona() {
  return (
    <div className="p-1 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="flex flex-row p-3 bg-white rounded-lg">
        <div className="flex items-center justify-center">
          <img src={persona_image} className="w-full" alt="Persona" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="mb-1 text-xl font-medium">Persona</h2>
          <p className="mb-3 text-sm">
            We created a persona to help us visualize our end user, as well as focus on their needs as we built out the UI of the app. We came up with “Emma”, a young, creative, writer who is
            experienced with using technology in her writing, but new to leveraging it for worldbuilding in addition to our app. We made sure to incorporate all the problems and needs we mentioned
            above when coming up with this persona’s goals and challenges. Doing this exercise and creating Emma’s persona helped us keep her needs and challenges in the forefront of our minds as we
            worked on creating the app.
          </p>
        </div>
      </div>
    </div>
  );
}
