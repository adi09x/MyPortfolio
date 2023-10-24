import React from "react";

const Internships = () => {
  return (
    <div id="internships" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Internships
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my Internships.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              01
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Web Developement Intern
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  1. IBM Skill-Build
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2022 - Sept. 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Executed front-end web development tasks using HTML, CSS, and JavaScript. Collaborated with team members to optimize website responsiveness and user experience. Gained practical experience in version control and agile development methods. Resolved technical issues and translated design concepts into functional web interfaces.{'\n'}
                <b>Project : Traveller landing page</b>
                </p>
                
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              02
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>

              
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
              <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Web Developement Intern
                </h1>
              <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  2. RMI InfoTech
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  March 2023 - April 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Interned at <b>Rural Mind Infotech</b> , where I gained practical experience in web development. Collaborated on designing and building responsive web applications using HTML, CSS, and JavaScript. Contributed to troubleshooting and problem-solving, enhancing my skills in front-end technologies and agile development practices.{'\n'}
                <b>Project : Expense management system</b>
                </p>
                {/* <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.E, Computer Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Vidya Pratishthan's Kamalnayan Bajaj Institute of Engineering and Technology, Baramati.
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2020 - Year 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  quos in a, quaerat vero odio vitae.
                </p> */}
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Internships;
