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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
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
        My Projects
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
            window.open("https://devpost.com/software/mata-2zoh1e", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/Home-Page.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Mata</h3>
          <p>
            A mobile app that uses AI to verify and reward users for sustainable
            activities, making environmental responsibility fun and engaging.
          </p>
          <div className="project-tech">
            <span>React Native</span>
            <span>OpenAI</span>
            <span>FireBase</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open(
              "https://flow-board-home.vercel.app/",
              "_blank"
            )
          }
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/Flow_board.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Flow Board</h3>
          <p>
            A comprehensive task planning website containing various assignments
            with labels, due dates, tags, and categories.
          </p>
          <div className="project-tech">
            <span>TypeScript</span>
            <span>TailwindCSS</span>
            <span>MaterialUI</span>
            <span>PostgreSQL</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://healthyhuskies.netlify.app/", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/husky.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3> Healthy Huskies</h3>
          <p>
            A nutritional tracking app integrating Northeastern dining API to
            track and save calories and other nutritional data.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>TailwindCSS</span>
            <span>Supabase</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() =>
            window.open("https://razzxx.itch.io/fish-fish-clicker", "_blank")
          }
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/fishing-boat.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Fish Fish Game</h3>
          <p>
            A clicker game featuring various upgrades, purchasable items,
            abilities, and a save/load system. Custom 2D pixel art and custom
            music soundtrack.
          </p>
          <div className="project-tech">
            <span>C#</span>
            <span>Unity</span>
            <span>Paint.net</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
