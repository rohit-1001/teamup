import React from 'react'
import CountUp from 'react-countup';
import about_photo from '../assets/aboutphoto.jpg';
import '../CSS files/AboutStyle.css';
import DeveloperCard from '../components/DeveloperCard';

const mystyle = {
  color: "orange",
  // backgroundColor: "DodgerBlue",
  fontFamily: "Arial",
  fontSize: 50 
};
const mystyle2 = {
  // backgroundColor: "DodgerBlue",
  // backgroundColor: "red"
  // fontSize: 5000 
};

const About = () => {
  const data=[
    {
      name: "Rohit Phalke",
      email: "rohit.phalke@spit.ac.in",
      image: 1
    },
    {
      name: "Yash Gajewar",
      email: "yash.gajewar@spit.ac.in",
      image: 2
    }
  ]
  return (
    <>
      <section className="ftco-section ftco-no-pt ftco-no-pb">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 d-flex order-md-last">
              <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-center mb-4 mb-sm-0" style={{ backgroundImage: 'url(images/about-1.jpg)' }}>
              </div>
            </div>
            <div className="sec2div1222">
          <div className="left123" style={{marginTop:"80px"}}>
            <h3>What is TeamUp?</h3>
            <div className="leftinfo123">
              <ul>
                <li>
                TeamUp is a team building application that helps you create and manage engaging and effective team building activities.
                <br />
                There are many benefits to using TeamUp for your team building needs. Here are just a few:
                <br />
                <ul>
                  <li style={{listStyleType: "circle"}}>TeamUp simplifies team building, saving you time and effort.</li>
                  <li style={{listStyleType: "circle"}}>TeamUp's engaging activities make team building fun and rewarding.</li>
                  <li style={{listStyleType: "circle"}}>TeamUp fosters effective communication, collaboration, and conflict resolution.</li>
                </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="right123" style={{marginTop:"80px"}}>
            <img src={about_photo} alt="" id="secondimg123" />
          </div>
        </div>
          </div>
        </div>
      </section>
      <section className="ftco-counter" id="section-counter">
        <div >
          <div className="row" style={{display:"flex", justifyContent: "center"}}>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center" >
                <div className="text"  style={mystyle2}>
                      <strong className="number">
                        <CountUp style={mystyle} end={72} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span style={{fontSize:"25px"}}>Posts</span>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                <div className="text">
                      <strong className="number">
                        <CountUp style={mystyle} end={127} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span style={{fontSize:"25px"}}>Users</span>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                <div className="text">
                      <strong className="number">
                        <CountUp style={mystyle} end={43} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span style={{fontSize:"25px"}}>Teams</span>
                    </div>
                </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center">
                <div className="text-center">
                <div className="text">
                      <strong className="number">
                        <CountUp style={mystyle} end={30} duration={5} />
                      </strong>
                    </div>
                    <div className="text">
                      <span style={{fontSize:"25px"}}>Categories</span>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="outerhead11">
        <div id="heading111">Developers</div>
      </div>
      <div className="outerhead11"
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          padding: '20px 150px 50px 150px'
        }}
      >
        <DeveloperCard data={data[0]}/>
        <DeveloperCard data={data[1]}/>
      </div>
    </>
  )
}

export default About
