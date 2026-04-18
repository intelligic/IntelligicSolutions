import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const icons = [
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTelegramPlane,
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { x: -40, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const SocialIcons = () => {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}   // 👈 THIS IS THE MAGIC
      variants={container}
      initial="hidden"
      animate="show"
      className="fixed left-5 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5"
    >
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          variants={item}
          className="w-11 h-11 bg-white text-[#00AEEF] rounded-full flex items-center justify-center cart-shadow"
        >
          <Icon className="text-[22px]" />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SocialIcons;



























































































// import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

// const SocialIcons = () => {
//   return (
//     <div className="fixed left-5 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      
//       <a
//         href="#"
//         className="w-11 h-11 bg-white text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white rounded-full flex items-center justify-center cart-shadow transition"
//       >
//         <FaInstagram className="text-[22px]"/>
//       </a>
//       <a
//         href="#"
//         className="w-11 h-11 bg-white text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white rounded-full flex items-center justify-center cart-shadow transition"
//       >
//         <FaFacebookF className="text-[22px]" />
//       </a>

//       <a
//         href="#"
//         className="w-11 h-11 bg-white text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white rounded-full flex items-center justify-center cart-shadow transition"
//       >
//         <FaLinkedinIn />
//       </a>

//       <a
//         href="#"
//         className="w-11 h-11 bg-white text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white rounded-full flex items-center justify-center cart-shadow transition"
//       >
//         <FaXTwitter className="text-[22px]" />
//       </a>

//     </div>
//   );
// };

// export default SocialIcons;
