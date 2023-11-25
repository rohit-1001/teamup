import React from 'react'
import "../CSS files/FooterStyle.css";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <div className="mainFooter123">

                <div className="blocks123">

                    <div className="block1123">
                        <div className="tab1123">
                            <div className="address123">
                                {/* <p className="Addresshead"><b>OFFICE ADDRESS</b></p> */}
                                <p className="fullAddress123">At TeamUp, we are committed to providing you with an exceptional team-building experience. We believe that easy-to-use, accessible, and engaging products and services are key to achieving this goal. In today's fast-paced world, attention spans are shorter than ever. That's why we've made it our mission to capture your interest and keep you engaged from the moment you log in. </p>
                            </div>
                            <div className="implinks123">
                                <p className="linkshead123"><b>IMPORTANT LINKS</b></p>
                                <ul>
                                    <li><NavLink to="/home" style={({ isActive }) => ({ color: isActive ? 'black' : 'black', })}><p id='footlink123'>Home</p></NavLink></li>
                                    <li><NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'black' : 'black', })}><p id='footlink123'>About Us</p></NavLink></li>
                                </ul>
                            </div>
                            {/* </div>
                        <div className="tab1"> */}
                            <div className="contactDetails123">
                                <p className="contact1123"><b>CONTACT US</b></p>
                                <div className="contactemail123">
                                    <div>
                                        <MailOutlineIcon></MailOutlineIcon>
                                    </div>
                                    <div>
                                        <a className="iamemail123" href="mailto: support@teamup.com" target="_blank" rel="noreferrer">support@teamup.com</a>
                                    </div>
                                </div>
                                <div className="contactemail123">
                                    <div>
                                        <CallOutlinedIcon></CallOutlinedIcon>
                                    </div>
                                    <div>
                                        <a className="iamemail123" href="tel: +91-945-782-3612">9457823612</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="footerbelow123">
                <div className="footerbelowinside123">© TeamUp - All Rights Reserved.</div>
            </div>

            {/* <Outlet/> */}
        </>
    )
}

export default Footer