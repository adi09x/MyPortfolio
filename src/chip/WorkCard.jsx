import React, { useState } from "react"
import styled from "styled-components"
import { data } from "../data/data"
import { RxExternalLink } from "react-icons/rx"
import { AiOutlineGithub } from "react-icons/ai"
import { Link } from "react-router-dom"

const WorkCard = () => {
  const reversedData = [...data].reverse()

  return (
    <>
      {reversedData.map((data) => {
        return (
          <div
            data-aos="zoom-in"
            key={data.id}
            className="grid grid-cols-2 sm:grid-cols-1 gap-8 border-4"
          >
            <POPUP className="img-content relative overflow-hidden">
              <div className="h-full max-h-[280px] w-full max-w-[480px] hover:scale-125 transition duration-500 cursor-pointer shadow-xl rounded-md overflow-hidden">
                <img
                  src={data.img}
                  alt={data.title}
                  className=" object-fit w-full h-full hover:scale-125 transition duration-500 cursor-pointer overflow-hidden"
                />
              </div>

              <div
                className={`popup w-full  h-[280px] shadow-xl rounded-md overflow-hidden sm:h-[260px] p-4`}
              >
                <p className=" text-gray-900 text-base leading-[1.4] text-justify w-[90%]">
                  {data.desc}
                </p>
                <div className=" flex items-center justify-center gap-4">
                  <Link
                    to={data.link}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <RxExternalLink className=" text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Demo</p>
                  </Link>
                  <br className="w-[2px] bg-white" />
                  <Link
                    to={data.git}
                    target="_blank"
                    className="  mt-3 rounded-md shadow-md p-1 px-2 flex gap-2 items-center justify-center font-medium"
                  >
                    <AiOutlineGithub className="  text-black bg-white rounded-full border  w-[35px] h-[35px] p-2" />
                    <p className=" text-black">Code</p>
                  </Link>
                </div>
              </div>

            </POPUP>
            <div className="">
              <h1 className="text-gray-800 text-xl font-medium sm:text-lg">
                {data.title}
              </h1>
              <p className="font-light">
              {data.large_desc}
              </p>
            </div>

            
          </div>
        )
      })}
    </>
  )
}

export default WorkCard

const POPUP = styled.div`
  position: relative;
  img {
    &:hover {
      transform: scaleX(2);
    }
  }
  .popup {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    margin: auto;
    transition: 0.5s ease;
    background: rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .icon {
    color: #fff !important;
  }
  &:hover .popup {
    opacity: 1;
    color: #fff;
  }
`
