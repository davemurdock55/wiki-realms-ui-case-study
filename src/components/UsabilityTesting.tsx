import React from "react";

import LeftSidebarImage from "../images/LeftSidebar_Prototype1.png";
import RealmPageImage from "../images/RealmPage_Prototype1.png";
// <img src={LeftSidebarImage} className="h-4/5" alt="LeftSidebarImage" />

export default function UsabilityTesting() {
  return (
    <div className="p-1 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Testing</h2>
        <p className="mb-3 text-sm">
          After creating this wireframe, we went to a few of the new or experienced writers that we knew and had them test out our prototype by completing a few tasks we designed for them. These tasks
          included creating a new page and updating an already existing page (as well as the implied navigation required to get to those pages). Here is a link to our usability test script that we
          read to our participants before performing the interviews:{" "}
          <a href="https://docs.google.com/document/d/1H5zx6R1zWuH-NzRb14tTQrWeO8ndhPsErJ3Slk4eztw/edit" className="underline text-fuchsia-500 hover:text-fuchsia-600" target="_blank">
            Usability Script
          </a>
          .
          <br />
          <br />
          After extensive and repeated testing, our team organized all the feedback we observed and received into various categories of areas our application did well, and areas we needed to improve
          upon. In general, our users loved the navigation sidebar, informative page blocks, and useful block templates (not yet implemented).
          <div className="flex flex-row justify-center gap-10 my-5">
            <img src={LeftSidebarImage} style={{ width: "25%", height: "25%" }} className="h-4/5" alt="LeftSidebarImage" />
            <img src={RealmPageImage} style={{ width: "25%", height: "25%" }} className="h-4/5" alt="RealmPageImage" />
          </div>
          Despite the love for these core features, there were some areas users found troubling. Our notes on the main areas we needed to change are as follows:
          <ul className="pl-5 list-disc">
            <li>Implement a back button for easier navigation.</li>
            <li>Refine the realm page layout for better orientation.</li>
            <li>Increase button size and margins throughout the app for improved usability.</li>
            <li>Reorganize the page editing features to make them more intuitive.</li>
            <li>Clarify the purpose of icons such as the arch logo.</li>
            <li>Add a "quick add" feature for seamless idea input.</li>
            <li>Incorporate auto-save indicators to reassure users.</li>
            <li>Enable block comments for additional flexibility.</li>
            <li>Enhance the functionality of the sidebar options button for better usability.</li>
          </ul>
          <br />
          <br />A complete list of our usability test results can be found here:{" "}
          <a href="https://docs.google.com/document/d/1fFnsv1vxd6n4eYSN9hadW4EkYK8V8aqFbYAHSNepP2Q/edit" className="underline text-fuchsia-500 hover:text-fuchsia-600" target="_blank">
            Usability Test Results
          </a>
          .
        </p>
      </div>
    </div>
  );
}
