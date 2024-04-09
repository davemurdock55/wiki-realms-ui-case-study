import React from "react";

export default function GuerillaTesting() {
  return (
    <div className="p-5 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Guerilla Testing</h2>
        <p className="mb-3 text-sm">
          We then conducted a round of guerilla-style testing with our updated hi-fidelity prototype. We interviewed 8 users who were part of our target audience, whether current or aspiring authors,
          in brief sessions that averaged 10 minutes or less. The tests were not scripted, but we did ask users to complete the same two tasks from the first round of testing to help us gauge the
          design’s improvement.
          <br />
          <br />
          Overall, our second prototype performed better than the first but with some areas still in need of significant improvement. Our second task, which required users to delete some content from
          a page, had enormous improvement. The most difficult part of the first prototype gave almost none of the users problems during this round of tests. The task of adding a page, however, proved
          even more difficult for users with the new design. Since the design was also more complete than our initial prototype, users also brought up new issues that didn’t come up in the first round
          of testing.
          <br />
          <br />
          The full report of our guerilla testing findings can be found{" "}
          <a href="https://docs.google.com/document/d/1-3RHz665JNQft4jtbPsN7HQ5nsHZhWAiQl8EJ0V4isM/edit" className="underline text-fuchsia-500 hover:text-fuchsia-600" target="_blank">
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
