import React from "react";
import Navbar from "../Components/Navbar";

const Faq = () => {
  return (
    <div>
        <div className="bg-[#0095c3f3] ">
            <Navbar></Navbar>
        </div>
      <div className="py-4 bg-white h-screen hero-overlay" style={{
        backgroundImage: "url('/faq-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between ">
          <div className="text-center">
            <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
              F.A.Q
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Frequently Asked <span className="text-indigo-600">Questions</span>
            </h3>
          </div>

          <div className="mt-20">
            <ul className="">
              <li className="text-left mb-10">
                <div className="flex flex-row items-start mb-5">
                  <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      width="30px"
                      fill="white"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 2">
                        <g data-name="menu-arrow">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(180 12 12)"
                            opacity="0"
                          ></rect>
                          <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                          <circle cx="12" cy="19" r="1"></circle>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                    <h4 className="text-md leading-6 font-medium text-gray-900">
                      How to Donate?
                    </h4>
                  </div>
                </div>

                <div className="flex flex-row items-start">
                  <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                    <p className="text-gray-700 text-sm">
                      
                       Create a account or sign in using existing account. Then go to campaigns page and choose where you wanna donate.. Click on donate button and fill the form up...   
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      height="25px"
                      fill="white"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 295.238 295.238"
                      style={{ enableBackground: "new 0 0 295.238 295.238" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <g>
                            <path
                              d="M277.462,0.09l-27.681,20.72l-27.838,64.905h-22.386l-8.79-19.048h5.743c10.505,0,19.048-8.452,19.048-18.957V28.571
				h9.524V0H196.51v28.571h9.524V47.71c0,5.248-4.271,9.433-9.524,9.433h-10.138L174.2,30.81l14.581-7.267L141.038,3.095
				l-11.224,39.281c-0.305-23.371-19.386-42.29-42.829-42.29c-23.633,0-42.857,19.224-42.857,42.857
				c0,14.281,7.233,27.676,19.048,35.595v7.176H51.643L50.9,89.619c-2.314,12.005-2.529,24.343-0.638,36.648l-32.486,57.905
				l35.876,8.195v60.014h47.619v42.857h114.286v-66.357c33.333-23.581,52.371-61.495,52.343-101.943l0.01-17.371
				c0-6.548-0.605-13.276-1.824-19.905l-0.705-3.948h-9.348l21.429-51.338V0.09z M206.033,19.138V9.614h9.524v9.524H206.033z
				 M189.067,85.714h-18.062l-8.657-19.048h17.929L189.067,85.714z M147.219,16.119l18.929,8.11l-4.467,2.19l14.2,30.724h-17.862
				l-11.605-25.471l-4.262,2.152L147.219,16.119z M160.543,85.715h-21.176v-9.433c0-5.252,4.271-9.614,9.524-9.614h2.995v-0.001
				L160.543,85.715z M141.843,44.652l5.776,12.71c-9.905,0.667-17.776,8.848-17.776,18.919v9.433h-19.048v-7.176
				c9.529-6.386,15.995-16.352,18.176-27.452L141.843,44.652z M53.653,42.948c0-18.376,14.957-33.333,33.333-33.333
				c18.376,0,33.333,14.957,33.333,33.333c0,11.829-6.39,22.881-16.671,28.838l-2.376,1.371v12.557h-9.524V56.352
				c5.529-1.971,9.524-7.21,9.524-13.41c0-7.876-6.41-14.286-14.286-14.286c-7.876,0-14.286,6.411-14.286,14.287
				c0,6.2,3.995,11.438,9.524,13.41v29.362H72.7V73.157l-2.376-1.376C60.043,65.824,53.653,54.776,53.653,42.948z M86.986,47.71
				c-2.629,0-4.762-2.139-4.762-4.762c0-2.629,2.133-4.762,4.762-4.762c2.629,0,4.762,2.133,4.762,4.762S89.615,47.71,86.986,47.71z
				 M257.366,95.239c0.691,4.761,1.039,9.59,1.039,14.285l0.01,17.405c0.029,38.148-18.795,73.871-50.286,95.552l-2.095,1.429
				v61.805h-95.238v-42.857h-47.62v-58.086l-30.862-7.043l27.876-49.7l-0.271-1.7c-1.771-10.419-1.871-21.567-0.333-31.09h3.59
				h47.619H257.366z M245.714,85.714H232.3l23.738-55.343l10.557,5.257L245.714,85.714z M267.938,25.714l-5.267-2.633l5.877-14.786
				h5.528l-8.153,16.544L267.938,25.714z M232.3,71.429h-24.952l10.502-24.284l18.514,8.826l-5.064,11.799
				c-4.722-0.457-7.472,3.288-7.472,6.786V71.429z M94.524,97.62l-17.31,30.721h8.444c0.623,0,1.047,0.504,1.047,1.047
				C86.92,128.179,93.869,112.828,94.524,97.62z M96.667,176.058c-0.473,1.14-1.491,2.111-2.867,2.373c-0.453,0.146-0.919,0.283-1.387,0.418
				C92.365,180.88,90.704,182.51,90.154,184.79c-0.674,2.08-0.854,4.298-0.428,6.441c0.741,3.042,3.328,4.768,6.561,4.768
				c2.45,0,4.668-1.366,5.754-3.601c-1.185,1.54-2.957,2.64-4.711,3.303c-0.335,0.099-0.671,0.209-1.008,0.319
				c-1.361-0.073-2.626-0.393-3.828-0.755C96.156,188.875,95.18,187.253,96.667,176.058z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;