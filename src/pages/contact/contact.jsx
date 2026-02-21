import React from "react";
import './contact.css'
import photo14 from '../../assets/photo14.jpg'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Input from "../../components/input";
import Footer from "../../components/footer";
function Contact(){
    return(
        <>
         <div className="shop">
            <h2 className="tag50">Contact Us</h2>
        </div>
        {/* piece1 */}
        <div className="piece1">
            <div><img src={photo14}/></div>
            <div>
                <h2 className="flake1">We'd love to talk about how we <br></br> can work together.</h2>
                <p className="flake2">Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br></br>
been the industry's standard dummy text ever since the 1500s, when an unknown <br></br> printer took a galley.</p>
<div className="twoiconwrap">
    <div>
        <img src={icon1}/>
    </div>
        <div>
            <h4 className="flake3">Massege</h4>
            <p className="flake4">support@organic.com</p>
        </div>
</div>
<div className="twoiconwrap">
    <div>
        <img src={icon2}/>
    </div>
        <div>
            <h4 className="flake3">Contact Us</h4>
            <p className="flake4">+01 123 456 789</p>
        </div>
</div>
{/* iconss */}


            </div>
            
        </div>
        

        <div className="piece2-wrapper">
            <div className="piece2">
            <div className="piece3">
                <div>
                    <h4 className="flake5">Location</h4>
                    <h2 className="flake6">Our Farms</h2>
                    <p className="flake7">Established fact that a reader will be distracted
                        <br></br> by the readable content of a page when looking
                        <br></br> a layout. The point of using.</p>
                        <div className="wraplocation">
                            <div><FaLocationDot fontSize={50} /></div>
                           <div> <h5 className="flake8">New York, USA:</h5>
                            <p className="flake9">299 Park Avenue New York, <br></br>New York 10171</p></div>
                        </div>
                          <div className="wraplocation">
                            <div><FaLocationDot fontSize={50} /></div>
                           <div> <h5 className="flake8">London, UK:</h5>
                            <p className="flake9">230 Stamford Street,<br></br>London SE1 9LQ</p></div>
                        </div>
                </div>
            </div>
        </div>
        </div>
       <Input/>
        <div className="bolim6" >
            <div className="wrap-input">
       <div>
        <h1 className="tag46">Subscribe to<br></br>
our Newsletter</h1>
       </div>
       <div className="wrapemail">
       <div> <input type="text" placeholder="Your Email Address"/></div>
      <div>  <button className="button5">Subscribe</button></div>
       </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Contact  