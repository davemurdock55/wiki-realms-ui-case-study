import React from "react";
import persona_image from "../images/Emma_persona.png";

export default function Persona() {
  return (
    <div className="p-5 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Persona</h2>
        <p className="mb-3 text-sm">
          We created a persona to help us visualize our end user, as well as focus on their needs as we built out the UI of the app. We came up with “Emma”, a young, creative, writer who is
          experienced with using technology in her writing, but new to using it for worldbuilding and for our app. We made sure to incorporate all the problems and needs we mentioned above in coming
          up with this persona’s goals and challenges. Doing this exercise and creating Emma’s persona helped us keep her needs and challenges in the forefront of our minds as we worked on creating
          the app. <strong className="text-red-500">[not sure if we need this last sentence]</strong>
        </p>
        <img src={persona_image} className="h-4/5" alt="Persona" />
      </div>
    </div>
  );
}
