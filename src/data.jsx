import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import {
  courses1,
  courses2,
  courses3,
  courses4,
  courses5,
  courses6,
  courses7,
  courses8,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
} from "./assets";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Courses",
  },
  {
    id: 4,
    href: "teacher",
    link: "Teacher",
  },
  {
    id: 5,
    href: "contact",
    link: "Contact",
  },
];

export const categories = [
  { id: 1, icon: <FiPenTool />, category: "Design" },
  { id: 2, icon: <FaLaptopCode />, category: "Development" },
  { id: 3, icon: <BsBarChartLine />, category: "Business" },
  { id: 4, icon: <MdOutlineScience />, category: "Science" },
];

export const courses = [
  {
    id: 1,
    image: courses1,
    category: "Web Design",
    Titile: "The Complete Web Design Course",
    rating: 4.9,
    praticipants: 500,
    price: 105,
  },
  {
    id: 2,
    image: courses2,
    category: "Web Development",
    Titile: "Fullstack Web Development Course",
    rating: 4.8,
    praticipants: 700,
    price: 125,
  },
  {
    id: 3,
    image: courses3,
    category: "Web Development",
    Titile: "Python Beginner to Addvanced Course",
    rating: 4.9,
    praticipants: 300,
    price: 99,
  },
  {
    id: 4,
    image: courses1,
    category: "Web Design",
    Titile: "UI/UX Design Crazy Course With Harrys",
    rating: 4.7,
    praticipants: 600,
    price: 85,
  },
  {
    id: 5,
    image: courses5,
    category: "AI Development",
    Titile: "AI Development With Python (complete beginner course)",
    rating: 4.9,
    praticipants: 500,
    price: 105,
  },
  {
    id: 6,
    image: courses6,
    category: "Web Design",
    Titile: "The Complete Web Design Course",
    rating: 4.9,
    praticipants: 500,
    price: 105,
  },
  {
    id: 7,
    image: courses7,
    category: "Web Design",
    Titile: "The Complete Web Design Course",
    rating: 4.9,
    praticipants: 500,
    price: 105,
  },
  {
    id: 8,
    image: courses8,
    category: "Web Design",
    Titile: "The Complete Web Design Course",
    rating: 4.9,
    praticipants: 500,
    price: 105,
  },
];
export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What is Skillex?",
  },
  {
    id: 2,
    title: "What can I learn form Skillex?",
  },
  {
    id: 3,
    title: "Can I teach on  Skillex?",
  },
  {
    id: 4,
    title: "What is included in my Skillex membership?",
  },
];
