import React from "react";
import { teacher1, teacher2 } from "../../assets";
import { accordions } from "../../data";
import Accordins from "./Accordins";

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8 ">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Become <span className="text-Teal">An instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            perferendis at minima numquam ab. Ratione nam fuga quos! Velit
            expedita sequi sit animi similique esse minus perspiciatis
            laudantium quod ab!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold">
            Start Teaching
          </button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>

        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem]">
            Become <span className="text-Teal">An instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            perferendis at minima numquam ab. Ratione nam fuga quos! Velit
            expedita sequi sit animi similique esse minus perspiciatis
            laudantium quod ab!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold">
            Get Started
          </button>
        </div>
        <div className="p-4 md:w-3/4 ">
          <img src={teacher2} alt="" />
        </div>
        <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
          Frequently <span className="text-Teal">Asked Questions</span>
        </div>
        <div className="mt-12 max-w-[700px] mx-auto ">
          {accordions.map((item) => (
            <Accordins key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;
