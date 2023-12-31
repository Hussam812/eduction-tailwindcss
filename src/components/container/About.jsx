import React from "react";
import { AboutImg } from "../../assets";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={AboutImg} alt="" className="p-4" />
        </div>
        <div className="font-bolf sm:text-[1.875rem] text-[1.5rem] mb-5">
          We provide the <br /> best
          <span className="text-Teal"> online courses</span>
          <p className="text-sm text-gray leading-7  mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            itaque eaque aliquid, illum non natus, nisi impedit voluptate
            inventore officiis culpa quae. Tempore sunt ex quasi sapiente
            impedit placeat dignissimos?
          </p>
          <button className="px-6 py-3 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
