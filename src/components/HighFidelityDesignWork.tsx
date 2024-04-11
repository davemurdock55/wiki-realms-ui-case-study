import React from "react";
import LazyLoad from 'react-lazyload';

export default function HighFidelityDesignWork() {
  return (
    <div className="p-1 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">High Fidelity Design Work: Wireframes</h2>
        <p className="mb-3 text-sm">
          After compiling the findings from the initial usability test and thinking through our journey map and user task flow, we developed a second prototype in Figma. This second prototype was
          built completely from the ground up, rather than built off the first prototype, in order to easily incorporate new consistent theming and componentization.
          <br />
          <br />
          We completely redesigned the layout of the Realms screen, and also implemented a consistent header and footer across the prototype. We made several smaller changes to some of the screens and
          rebuilt our “Block” component to improve the interactions that users struggled with during our tests. We also added stubs for several other features we hoped to implement, such as a
          timeline, templates, and the metadata sidebar.
          <br />
          <br />
          Here is a link to our second WikiRealms prototype:&nbsp;
          <a
            href="https://www.figma.com/proto/lsUK8jvIfAbO9sVPQF0qbj/Wiki-Realms-Main-Wireframing?type=design&node-id=932-10281&t=8xCXBJbXtO2blFzv-0&scaling=scale-down&page-id=647%3A447&starting-point-node-id=932%3A10281"
            className="underline text-fuchsia-500 hover:text-fuchsia-600"
            target="_blank"
          >
          WikiRealms App (Prototype 2)
          </a>
        </p>
        <LazyLoad>
          <iframe
            className="w-full border-2 h-[500px]"
            // width="100%"
            // height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FlsUK8jvIfAbO9sVPQF0qbj%2FWiki-Realms-Main-Wireframing%3Fpage-id%3D647%253A447%26type%3Ddesign%26node-id%3D932-10281%26viewport%3D-7944%252C1630%252C0.59%26t%3DAuOAP4vCAHVT0VoY-1%26scaling%3Dscale-down%26starting-point-node-id%3D932%253A10281%26mode%3Ddesign"
            // allowfullscreen
          ></iframe>
        </LazyLoad>
      </div>
    </div>
  );
}
