import React from "react";

export default function JourneyMapTaskFlowFigjam() {
  return (
    <div className="p-5 rounded-lg bg-fuchsia-300 drop-shadow-xl">
      <div className="p-3 bg-white rounded-lg">
        <h2 className="mb-1 text-xl font-medium">Journey Map / Task Flow / Figjam</h2>
        {/* <p className="mb-3 text-sm">text</p> */}
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
