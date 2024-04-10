import React from "react";

export default function InitialDesignWork() {
  return (
    <div className="p-5 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Initial Design Work: Wireframes</h2>
        <p className="mb-3 text-sm">
          We showed off the mid-fidelity wireframes below to users to get feedback on our designs in order to make edits towards a more usable app that will be easier for users to understand.
          <br />
          <br />
          As we initially worked on the wireframe Figma designs, we used some of our early planning and ideas and formatted the application to allow for the testing of the core concepts and key
          features of our web application. We included a base idea for how users would organize their worlds as well as a few samples of how they would add information to a page. Much of the
          functionality for any extra features we thought to have in our app were not implemented in this prototype, but in testing we asked users what their thoughts would be concerning the planned
          updates we had in mind.
        </p>
        <iframe
          className="w-full border-2 h-[500px]"
          // width="100%"
          // height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlsUK8jvIfAbO9sVPQF0qbj%2FWiki-Realms-Main-Wireframing%3Fnode-id%3D83-475%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D83%253A475%26t%3DGLQKe8D6eg5lcMuO-1%26mode%3Ddesign"
          // allowfullscreen
        ></iframe>
        <p className="mb-3 text-sm">
          <br />
          The following is a link to our first WikiRealms prototype shown as an application:
          <br />
          <a
            href="https://www.figma.com/proto/lsUK8jvIfAbO9sVPQF0qbj/Wiki-Realms-Main-Wireframing?node-id=83-475&scaling=scale-down&page-id=0%3A1&starting-point-node-id=83%3A475&show-proto-sidebar=1&mode=design&t=TCs74CYJ7nKoTsio-1"
            className="underline text-fuchsia-500 hover:text-fuchsia-600"
            target="_blank"
          >
            WikiRealms App (Prototype 1)
          </a>
        </p>
      </div>
    </div>
  );
}