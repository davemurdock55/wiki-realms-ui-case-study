import React from "react";

export default function Intro() {
  return (
    <div className="p-1 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Project Overview: Creating Worlds</h2>
        <p className="mb-3 text-sm">
          Worldbuilding is the creative process of constructing an imaginary world, often for storytelling in literature, film, games, or other media. It involves developing the
          geography, history, cultures, languages, and ecology of a fictional setting to create a rich backdrop. WikiRealms originated as a way to record and organize a world, with all the
          complexities that are included in such a process.
        </p>
        <div className="flex flex-row gap-x-2">
          <h2 className="mb-1 text-xl font-medium pb-3">Platform:</h2>
          <p className="align-bottom">Mobile Application</p>
        </div>
        <div className="flex flex-row gap-x-2">
          <h2 className="mb-1 text-xl font-medium pb-3">Timeframe:</h2>
          <p className="align-bottom">January - April 2024</p>
        </div>
        <h2 className="mb-1 text-xl font-medium">Accomplishments</h2>
        <p className="my-3 text-sm">
          Over the course of the WikiRealms project we followed an iterative process of user feedback, evolving
          high-fidelity prototypes, and user experience mapping from all angles. We interviewed dozens of writers, 
          worldbuilders, and common readers and created iterative wireframe-level designs that evolved along the 
          interview process. Though the testing process is still ongoing, many potential users have expressed their anticipation for the final product.
        </p>
      </div>
    </div>
  );
}
