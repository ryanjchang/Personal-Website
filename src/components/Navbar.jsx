import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const fadeInUp = {
    initial: {opacity: 0, y:20 },
    animate: {opacity: 1, y: 0},
    transition: {duration:0.6},
};
const staggerContainer = {
    animate:{
        transition:{
            staggerChildren: 0.1,
        },
    },
};

const links = {"Home": {reference: "#home"},
                    "Projects":{reference: "#projects"},
                    "Class Projects": {reference: "#class-projects"},
                     "Contact": {reference: "#contact"}
                     };
export function Hamburger(){
    return (
        <>
            <div className='hamburger'>
                <div className='burger burger1'></div>
                <div className='burger burger2'></div>
                <div className='burger burger3'></div>
            </div>
        </>
    )
}
export function ToggleMenu() {
    // I think what we want to do is we have a use ref which stores if we can see the menu or not, bc that doesn't re render
    // we also want to have a useeffect which re-renders the buttons visuals based on if menu is visible
    const [isVisible, setIsVisible] = useState(false);
    const menuRef = useRef(null);
    const toggleMenu = () => {
        console.log(`toggled from ${isVisible}`)
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsVisible(false);
            }
        };
        if (isVisible) {
            // event, function
            document.addEventListener('mousedown', handleClickOutside);
        }

        // clean up
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible]) // dependency (updates when isvisible changes)

    return (
        <div className="hamburger-menu" ref={menuRef}>
            <div onClick={toggleMenu}>
                <Hamburger/>
            </div>
            {isVisible && (
            <div className='hamburger-dropdown'>
                {Object.entries(links).map(([label, {reference}]) => (
                    <a className='hamburger-links' href={reference}>{label}</a>
                ))}
            </div>
            )}
        </div>
    )
}

export const Navbar = () => {
    return (
    <motion.nav 
    className='navbar' 
    initial={{y: -100}} 
    animate={{y: 0}} 
    transition={{duration: 0.6, ease: "easeOut"}}
    >
        <motion.div 
        className='logo'
        whileHover={{scale:1.05}}
        whileTap={{scale: 0.95}}
        >Portfolio</motion.div>


        {/* Computer view */}
        <motion.ul className="nav-links"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        > 
            <motion.li 
            variants={fadeInUp}
            whileHover={{scale: 1.1}}
            whileTap={{scale:0.95}}
            >
                <a href="#home"> Home</a>
            </motion.li>
            <motion.li 
            variants={fadeInUp}
            whileHover={{scale: 1.1}}
            whileTap={{scale:0.95}}
            >
                <a href="#projects"> Projects</a>
            </motion.li>
            <motion.li 
            variants={fadeInUp}
            whileHover={{scale: 1.1}}
            whileTap={{scale:0.95}}
            >
                <a href="#class-projects">Class Projects</a>
            </motion.li>
            <motion.li 
            variants={fadeInUp}
            whileHover={{scale: 1.1}}
            whileTap={{scale:0.95}}
            >
                <a href="#contact"> Contact</a>
            </motion.li>

        </motion.ul>
        {/* Mobile view */}

        {/* Hamburger icon
            Dropdown links on click
            hide the other ones until clicked
            add event listener in javascript
        */}
        <ToggleMenu/>

    </motion.nav>
    );
};