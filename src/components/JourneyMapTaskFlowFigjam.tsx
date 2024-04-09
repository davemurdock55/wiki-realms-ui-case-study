import React from "react";

export default function JourneyMapTaskFlowFigjam() {
  return (
    <div className="p-5 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Journey Map / Task Flow / Figjam</h2>
        <p className="mb-3 text-sm">
          As we went over our findings, we employed three additional strategies to better guide our future plans. The strategy included creating a journeymap to represent the interactions an average
          user was observed to experience with our application. We included a summary of the users’ pain points along the usability testing process and shared possible opportunities for improvement.
          <br />
          <br />
          <a href="https://drive.google.com/file/d/1Vkp5ku3rpanl9vmYsguhfJ341OeWuYCB/view?usp=drive_link" className="underline text-fuchsia-500 hover:text-fuchsia-600" target="_blank">
            https://drive.google.com/file/d/1Vkp5ku3rpanl9vmYsguhfJ341OeWuYCB/view?usp=drive_link
          </a>
          <br />
          <br />
          We also designed a user task flow to guide our prototype development to address key pages and functionality we needed to include in our second prototype:
          <br />
          <br />
          <a href="https://drive.google.com/file/d/1OMb2XdaNuRtCrUmoqkoXpJKATDnqnxy4/view?usp=drive_link" className="underline text-fuchsia-500 hover:text-fuchsia-600" target="_blank">
            https://drive.google.com/file/d/1OMb2XdaNuRtCrUmoqkoXpJKATDnqnxy4/view?usp=drive_link
          </a>
          <br />
          <br />
          Finally, we decided that keeping track of all of our ideas and feedback would be better visualized if we made a Figjam board with sections to help with organization. We made this board
          somewhat early on in the design process and constantly updated it as we tested and updated our design.
          <br />
          <br />
          <a
            href="https://www.figma.com/file/cgj9Frva80iqB6Zpg9dWP2/Wiki-Realms-Brainstorming?type=whiteboard&node-id=0-1&t=BDHSeTXuIhrmYvuv-0"
            className="underline text-fuchsia-500 hover:text-fuchsia-600"
            target="_blank"
          >
            https://www.figma.com/file/cgj9Frva80iqB6Zpg9dWP2/Wiki-Realms-Brainstorming?type=whiteboard&node-id=0-1&t=BDHSeTXuIhrmYvuv-0
          </a>
        </p>

        {/* Everything for the Carousel (which doesn't work) is below: */}
        <div className="w-full bg-white rounded-lg shadow-md dark:bg-gray-800">
          <div data-hs-carousel='{ "loadingClasses": "opacity-0" }' className="relative">
            <div className="relative w-full overflow-hidden bg-white rounded-lg hs-carousel min-h-64">
              <div className="absolute top-0 bottom-0 flex transition-transform duration-700 opacity-0 hs-carousel-body start-0 flex-nowrap">
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full p-6 bg-gray-100">
                    <span className="self-center text-4xl transition duration-700">First slide</span>
                  </div>
                </div>
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full p-6 bg-gray-200">
                    <span className="self-center text-4xl transition duration-700">Second slide</span>
                  </div>
                </div>
                <div className="hs-carousel-slide">
                  <div className="flex justify-center h-full p-6 bg-gray-300">
                    <span className="self-center text-4xl transition duration-700">Third slide</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
            >
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m15 18-6-6 6-6"></path>
                </svg>
              </span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              type="button"
              className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]"
            >
              <span className="sr-only">Next</span>
              <span className="text-2xl" aria-hidden="true">
                <svg
                  className="flex-shrink-0 size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>

            <div className="absolute flex justify-center space-x-2 hs-carousel-pagination bottom-3 start-0 end-0">
              <span className="border border-gray-400 rounded-full cursor-pointer hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3"></span>
              <span className="border border-gray-400 rounded-full cursor-pointer hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3"></span>
              <span className="border border-gray-400 rounded-full cursor-pointer hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
