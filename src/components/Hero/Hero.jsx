import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad */}
        <div className="div the-best-ad">
          <motion.div
            initial={{ left: mobile ? "178px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>Forty Niners Personal Training</span>
        </div>

        {/* Hero Heading */}
        <div className="div hero-text">
          <div>
            <span className="stroke-text"> Develop </span>
            <span>Your</span>
          </div>
          <div>
            <span>Body & will</span>
          </div>
          <div>
            <span>
              Complete Fitness Training and Health Programming to compliment
              your lifestyle for results that LAST!
            </span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className="div hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Book Session</buttons>
        </div>
      </div>
      <div className="right-h">
        
        <button className="btn">
          <a href="tel:5202619234" 
          style={{
            textDecoration: "none",
            color: "var(--orange)",
          }}> 
          Call Now!
           </a>
        </button>

        {/* <div className="div heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </div> */}

        {/* Hero Image */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          intitial={{ right: "11rem" }}
          whileInView={{ right: "17rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
      </div>
    </div>
  );
};

export default Hero;
