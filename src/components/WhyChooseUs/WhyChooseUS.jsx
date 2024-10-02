import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { SlideLeft } from "../../utility/animation";
const WhyChooseData = [
  {
    id: 1,
    title: "One-on-one Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GrYoga />,
    bgColor: "#0063ff",
    delay: 0.3,
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quick as possible for you",
    link: "/",
    icon: <FaDumbbell />,
    bgColor: "#73bc00",
    delay: 0.6,
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio and video chat features.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fa6400",
    delay: 0.9,
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    link: "/",
    icon: <GiGymBag />,
    bgColor: "#fe6baa",
    delay: 0.9,
  },
];
const WhyChooseUs = () => {
  return (
    

  
    <div className="bg-[#f9fafc] mb-20">
      <div className="container py-24 ">
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h2 className="text-xl font-semibold text-orange-500">Why Choose Us</h2>
          <p className="text-gray-600 text-2xl font-extrabold">
          Benefits of online tutoring services with us
          </p>
        </div>
      </div>
      {/* cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {WhyChooseData.map((item) => {
          return (
            <motion.div
              key={item.id}
              variants={SlideLeft(item.delay)}
              initial="hidden"
              whileInView={"visible"}
              custom={item.delay}
              className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
            >
              {/* icon section */}
              <div
                style={{ backgroundColor: item.bgColor }}
                className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
              >
                <div className="text-2xl">{item.icon}</div>
              </div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
