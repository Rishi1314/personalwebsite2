import './App.css';
import hand from "./icons/hand2.jpg"
import toshare from "./icons/2share.JPG"
import {FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import tinder from "./icons/Tinder.JPG"
import blob1 from "./icons/blob2.svg"
import blob3 from "./icons/blob3.svg"
import blob4 from "./icons/blob4.svg"
import blob5 from "./icons/blob5.svg"
import pen from "./icons/Apple_Pencil_Angled_R.png"
import pc from "./icons/Macbook_Pro_Mostly_Closed_Front_R Shadowless.png"
import keyboard from "./icons/Keyboard_R.png"
import abtbg from "./icons/me.jpg"
import { useRef } from 'react';
import { motion } from "framer-motion"
import {AiOutlineInstagram, AiFillGithub,AiFillInstagram,AiFillLinkedin } from "react-icons/ai";


function App() {
  const nameRef=useRef();
  return (
    <div className="App">
      <div className="nav"
      
      >
        <motion.div
       transition={{
        duration:1,
        delay:1
      }}
      initial={{
       x:-600
     }}
      animate={{x:0
     }}>
          <a href='/'>Home</a>
          <a href='#about'>About</a>
        </motion.div>
        <motion.div
        transition={{
          duration:1,
          delay:1
        }}
        initial={{
         x:600
       }}
        animate={{x:0
       }}>
          <a href='#projects'>Projects</a>
          <a href='#contactscreen'>Contact</a>
        </motion.div>
    
      </div>
      <div className="heroscreen">
      <motion.img transition={{
          duration:1,
          delay:1
        }}
        initial={{
         opacity:0
       }}
        animate={{opacity:1
       }} src={blob1} alt="blobl" className="blob blob1"/>
      <motion.img transition={{
          duration:1,
          delay:1
        }}
        initial={{
         opacity:0
       }}
        animate={{opacity:1
       }} src={blob5} alt="blobl" className="blob blob5"/>
      <motion.img transition={{
          duration:1,
          delay:1
        }}
        initial={{
         opacity:0
       }}
        animate={{opacity:1
       }} src={blob3} alt="blobl" className="blob blob3"/>
      <motion.img transition={{
          duration:1,
          delay:1
        }}
        initial={{
         opacity:0
       }}
        animate={{opacity:1
       }} src={blob4} alt="blobl" className="blob blob4"/>
        <motion.div className="herotext"
        transition={{
          duration:1,
          delay:1
        }}
        initial={{
         y:-700
       }}
        animate={{y:0
       }}
        >
          <h2>Hey, there!</h2>
          <h1>I am <span className="rishi" ref={nameRef}>Rishi</span></h1>
          <h3>A Web Developer based out of Hyderabad,India</h3>
        </motion.div>
        <motion.div 
        className="hand"
         transition={{duration:1}}
         initial={{
          y:-700
        }}
         animate={{y:0
        }}
        >
          <img src={hand} alt="hand"/>
        </motion.div>
        
        
      </div>
      {/* <div className="msg">
          <p>Fueled by Coffee</p>
          <p>Driven by creativity</p>
        </div> */}
      <div className="aboutscreen" id="about">
        <motion.div 
        transition={{
          duration:2
        }}
        initial={{
         opacity:0
       }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }} className="round"></motion.div>
        <div className="aboutscreentext">
          Hello! My name is Rishi and I enjoy creating things that exist on the internet I have a serious passion for UI effects, animations and creating intuitive, dynamic user experiences.Interested in the entire Frontend spectrum and working on ambitious projects with positive people.<br/>When i don't code, I like to Cook, play Basketball and Video Games, Design stuff.
        </div>
        <img src={abtbg} alt=""/>
      </div>
      {/* <div class="custom-shape-divider-top-1667728140">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
      </div> */}
      <div className="projectScreen">
      <img src={pen} id="pen" alt=""/>
      <img src={keyboard} id="keyboard" alt=""/>
      <img src={pc} id="pc" alt=""/>
      <div className="projects" id="projects">
        <h1>My Projects</h1>
          <motion.div 
        transition={{
          duration:1
        }}
        initial={{
         x:-50
       }}
       whileInView={{x:0 }}
       viewport={{ once: true }} className="projectCard">
            <div className="projectImage">
              <img src={toshare} alt=""/>
            </div>
            <div className="projectInfo">
              <h1>2Share</h1>
              <p>File Sharing using words.<br/>
                Built using IPFS, Web3Storage, Firebase, React.
              </p>
              <a href="https://toshare.vercel.app/">https://toshare.vercel.app/</a>
            </div>
          </motion.div>
          <motion.div 
        transition={{
          duration:1
        }}
        initial={{
         x:50
       }}
       whileInView={{x:0 }}
       viewport={{ once: true }} className="projectCard">
            <div className="projectImage">
              <img src={tinder} alt=""/>
            </div>
            <div className="projectInfo">
              <h1>Tinder Clone</h1>
              <p>Tinder UI clone with Swipe functionality<br/>
                Built using MongoDB, Express, Node, React.
              </p>
              <a href="https://tinder-clone-847dc.web.app/">https://tinder-clone-847dc.web.app/</a>
            </div>
          </motion.div>
      </div>
      </div>
      {/* <div className="techscreen">
        <div className="react">
          <FaReact/>
        </div>
        <div className="node">
          <FaNodeJs/>
        </div>
        <div className="js">
          <FaJsSquare/>
        </div>
      </div> */}
      <div className="contactscreen" id='contactscreen'>
        <div>
        <h1>Contact Me</h1>
        <motion.div 
        transition={{
          duration:2
        }}
        initial={{
         opacity:0
       }}
       whileInView={{ opacity: 1 }}
       viewport={{ once: true }} className="mainbox">
        <div className="box1">
          <h1>My Links</h1>
          <div className='icons'>
          <a href="https://www.instagram.com/notrishiraj/"><AiOutlineInstagram className='icon'/></a>
                        <a href="https://www.linkedin.com/in/rishi-raj-a36930206/"><AiFillLinkedin className='icon'/></a>
                        <a href="https://github.com/Rishi1314"><AiFillGithub className='icon'/></a>
          </div>
        </div>
        <div className="box2">
          <div className="form">
            <input placeholder='Your Email' className='contactEmail' type={"email"}/>
            <textarea className="contactMsg" placeholder="Message"/>
            <button className='contactButton'>Send</button>
          </div>
        </div>
        </motion.div>
        </div>
        <div className='footer'>
        <h1>
        "Code is like humor. When you have to explain it, it’s bad.""
        </h1>
        <h3>
          Rishi Raj @ 2023
        </h3>
      </div>
      </div>
      
    </div>
  );
}

export default App;
