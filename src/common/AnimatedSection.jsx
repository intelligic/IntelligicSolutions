import { motion } from "framer-motion";
import { bounceReveal } from "../common/Animations/scrollEffects";

const AnimatedSection = ({ children, className = "" }) => (
  <motion.section
    variants={bounceReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false, amount: 0.1 }}
    className={className}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;
