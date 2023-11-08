import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BsChevronBarDown } from "react-icons/bs";
const Accordins = ({ id, title }) => {
  const [activeIndex, setActiveIndex] = useState(false);
  const handelClick = (id) => {
    setActiveIndex(id === activeIndex ? null : id);
  };

  return (
    <div className="pb-8">
      <div className="flex items-center justify-between">
        <div className="sm:text-xl text-base font-bold">{title}</div>
        <BsChevronBarDown
          className={`${
            id === activeIndex ? "rotate-180" : "rotate-0"
          } cursor-pointer transition-all duration-300`}
          onClick={() => handelClick(id)}
        />
      </div>
      <AnimatePresence>
        {id === activeIndex && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
            className="pt-4"
          >
            <p className="text-sm leading-7 text-gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              nihil odit. Eum aspernatur blanditiis nulla optio, veniam itaque
              sunt in facere officiis iusto, error obcaecati illum. Voluptatem
              aperiam tenetur distinctio!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordins;
