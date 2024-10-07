import React from "react";
import { FaCheck, FaCross } from "react-icons/fa";
import { Todo } from "../Data/data";
import { NotTodo } from "../Data/data";
import { RxCross1 } from "react-icons/rx";
import Doimg from "../assets/do.png";

const Prevention = () => {
  
  return (
    <div className="w-full text-center sm:px-20 px-12 py-10 sm:h-screen">
      <h1 className="font-semibold text-purple-700 text-[6vw] sm:text-[3vw]">
        How To Protect YourSelf
      </h1>
      <p className="text-zinc-700/50">
        COVID-19 is a highly contagious viral disease caused by the SARS-CoV-2
        virus
      </p>

      <div className="w-full gap-8 sm:h-[80%] sm:flex-row flex-col py-10 flex sm:justify-between sm:items-center">
        <div className="flex-1 flex sm:justify-center sm:items-center gap-y-6 sm:flex-row flex-col h-full">
          <div className="flex-1 flex flex-col justify-center items-start sm:pl-10 bg-red-500/0 gap-y-4 h-full">
            <h1 className="font-bold text-[6vw] sm:text-[2vw]">You Should Do.</h1>
            {Todo &&
              Todo.map((item, idx) => (
                <p key={idx} className="flex gap-x-4 items-center">
                  <FaCheck className="text-white bg-green-500 rounded-full border-2 border-green-500 text[2vw]" />
                  {item}
                </p>
              ))}
          </div>

          <div className="flex-1 flex flex-col justify-center items-start sm:pl-10 bg-yellow-500/0 gap-y-4 h-full">
            <h1 className="font-bold text-[6vw] sm:text-[2vw]">You Should Not Do.</h1>
            {NotTodo &&
              NotTodo.map((item, idx) => (
                <p key={idx} className="flex gap-x-4 items-center">
                  <RxCross1 className="font-bold text-white bg-red-600 rounded-full border-2 border-red-600 text[2vw]" />
                  {item}
                </p>
              ))}
          </div>
        </div>

        <div
          className="sm:w-80 sm:h-80 w-full  h-[50vh]"
          style={{
            backgroundImage: `url(${Doimg})`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default Prevention;
