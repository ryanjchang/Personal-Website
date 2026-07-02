import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};
const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const ClassProjects = () => {
  return (
    <motion.section
      id="class-projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        Class Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=LUKbz8nbTiQ", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/CookYourBooks.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Cookbook</h3>
          <p>
            Graphical user interface and command line user interface to upload, scale, and edit recipes.
          </p>
          <div className="project-tech">
            <span>Java</span>
            <span>JavaFX</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
