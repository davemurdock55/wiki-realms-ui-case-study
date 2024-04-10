import React from "react";

import FlowChart from "../images/FlowChart.png";

export default function FutureThoughtsPlans() {
  return (
    <div className="p-5 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Future Thoughts & Plans</h2>
        <p className="mb-3 text-sm">
          We are currently in the process of brainstorming the next phase of design reworks based on the results of our second round of testing. There are a few features that need to be more fully
          implemented, and there are other features that need complete overhaul based on the feedback we received. Once we complete the next prototype, we plan to conduct another round of testing to
          validate our trajectory.
        </p>
        <img src={FlowChart} className="h-4/5" alt="FlowChart" />
      </div>
    </div>
  );
}
