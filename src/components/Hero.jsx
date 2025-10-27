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

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>

          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Ryan Chang
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Developer & Designer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I use technology to craft analytical tools to serve others.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a 
			href="https://github.com/ryanjchang/ryanjchang" 
			target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a 
			href="https://www.linkedin.com/in/ryan-j-chang"
			target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
			<motion.a 
			href="https://x.com/chang_ryan47278"
			target="_blank">
              <i className="fab fa-twitter"> </i>
            </motion.a>
          </motion.div>
        </motion.div>
		<motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
			<div className="details-display"
			style={{
				margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
			}}>
        <h1 className="about-header"
        style={{
          marginBottom: 10,
        }}
        >
          I'm Ryan...</h1>
				<p className="about-description">a developer studying Computer Science and Mathematics at Northeastern University.
        I am passionate about web development, game design, and utilizing technology to 
        make life more enjoyable and efficient.
        I'm proficient in Python, Javascript, and C# using tools such as Git, Unity, and VS Code.
        I also enjoy using Pandas and NumPy to explore data and visualize it with MatPlotLib.
        For fun, I love tennis, basketball, chess, drawing, and improving at new things!
        </p>
			</div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
