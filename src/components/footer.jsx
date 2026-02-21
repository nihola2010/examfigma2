import React from "react";
import rasm12 from '../assets/rasm12.png'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import './footer.css'
import rasm13 from '../assets/rasm13.png'
function Footer(){
    return(
        <>
        <div className="footer">
            <div className="wrapfooter">
                <h3 className="tag47">Contact Us</h3>
                <h5 className="tag49">Email</h5>
                <p  className="tag48">needhelp@Organia.com</p>
                 <h5 className="tag49" >Phone</h5>
                <p  className="tag48">666 888 888</p>
                 <h5 className="tag49">Address</h5>
                <p  className="tag48">88 road, borklyn street, USA</p>
            </div>
            <div><img src={rasm13} className="footer-img"/></div>
            <div>
                <img src={rasm12}/>
                <p  className="tag48">Simply dummy text of the printing and typesetting industry.<br></br>
Lorem Ipsum simply dummy text of the printing </p>
<div className="new-wrap-icons">
    <div><FaInstagram  fontSize={30}/></div>
    <div><FaFacebook  fontSize={30}/></div>
    <div><FaTwitter  fontSize={30}/></div>
    <div><FaPinterest fontSize={30} /></div>
</div>
            </div>
              <div><img src={rasm13} className="footer-img"/></div>
            <div>
                <h3 className="tag47">Utility Pages</h3>
                <p className="tag48">Style Guide404 Not Found</p>
                <p className="tag48">Password Protected</p>
                <p className="tag48">Licences</p>
                <p className="tag48">Changelog</p>
            </div>
        </div>
        </>
    )
}
export default Footer