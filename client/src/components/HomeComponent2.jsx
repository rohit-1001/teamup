import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";

const HomeComponent2 = () => {
  return (
    <>
      <div className="outerhead11">
        <div id="heading111">Efficient Team Building</div>
      </div>
      <div className="sec2111">
        <div className="sec2div1222">
          <div className="left123">
            <h3>Easy to use and accessible</h3>
            <div className="leftinfo123">
              <ul>
                <li>
                In today's fast-paced world, convenience is king. When it comes to the products and services you offer, it's crucial to prioritize user experience by ensuring that they are easy to use and accessible to everyone. This means designing your offerings with the needs of all users in mind, regardless of their technical expertise or abilities.
                </li>
              </ul>
            </div>
          </div>
          <div className="right123">
            <img src={img1} alt="" id="secondimg123" />
          </div>
        </div>

        <div className="sec2div1222">
          <div className="right123">
            <img src={img2} alt="" id="thirdimg123" />
          </div>
          <div className="left123">
            <h3>Engaging and interactive</h3>
            <div className="leftinfo123">
              <ul>
                <li>In the digital age, where attention spans are shorter than ever, it's essential to capture users' interest and keep them engaged. This is where interactive and engaging features come into play. These elements go beyond passive consumption and encourage active participation, transforming the user experience from static to dynamic.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeComponent2;
