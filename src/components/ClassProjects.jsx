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
            window.open("https://github.com/ryanjchang/CS50AI", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/CS50AI.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>CS50 AI Projects</h3>
          <p>
            Harvard's CS50 AI covering 7 weeks of projects covering search algorithms, optimization,
            machine learning, probability, neural networks, and natural language processing
          </p>
          <div className="project-tech">
            <span>Python</span>
            <span>TensorFlow</span>
            <span>OpenCV</span>
            <span>NLTK</span>
            <span>Sk-learn</span>
          </div>
        </motion.div>
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
          <h3>CookYourBooks</h3>
          <p>
            GUI and CLI allowing users to upload, scale, and edit recipes.
          </p>
          <div className="project-tech">
            <span>Java</span>
            <span>JavaFX</span>
          </div>
        </motion.div>
          <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://github.com/ryanjchang/CS50", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/CS50.jpg')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>CS50 Projects</h3>
          <p>
            Harvard's CS50 covering 10 weeks of projects including image manipulation, navigating databases, and building full-stack websites.
          </p>
          <div className="project-tech">
            <span>C</span>
            <span>Python</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>SQL</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
