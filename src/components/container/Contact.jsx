import { motion } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] max-auto">
        <div className="sm:text-3xl text-2xlfont-bold mb-5">
          Subscribe Newsletter
        </div>
        <p className="text-sm leading-7 text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vero
          quaerat est magnam? Recusandae asperiores pariatur provident iusto,
          eum harum? Lorem ipsum dolor sit amet.
        </p>
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5 "
        >
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />
          <button className="text-sm sm:p-3 p-2 shadow-md  text-white  bg-Teal font-bold">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
