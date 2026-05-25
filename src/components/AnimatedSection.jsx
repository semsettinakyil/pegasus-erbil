import { motion } from "framer-motion";

export default function AnimatedSection({ children, className = "" }) {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={false}
      transition={{ duration: 0 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
