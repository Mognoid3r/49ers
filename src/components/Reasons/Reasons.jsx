import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Why Us?</span>
        <div>
          <span className="stroke-text">Best</span>
          <span> Personal training in </span>
          <span className="stroke-text">Tucson</span>
        </div>
        <div className="details-r">
        <div>
          <img src={tick} alt=""></img>
          <span>1 Free Consultation</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>Fully Customized Health Plans</span>
        </div>
        <div>
          <img src={tick} alt=""></img>
          <span>Monthly Fitness Training Programs</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>1-On-1 Fitness Training Sessions</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
