import React from "react";
import './404.css'
import notfound from '../assets/404.png'
import { FaArrowRight } from "react-icons/fa6";
import Footer from "./footer";
import { useNavigate } from "react-router-dom";



function NOTFOUND(){
     const navigate = useNavigate();
    return(
        <>
        <div className="notfound">
            <div>
                <img src={notfound}/>
                <h2 className="not1">Page not found</h2>
                <p className="not2">The page you are looking for doesn't exist or has been moved</p>
                 <button className="button5" onClick={()=>navigate("/")}>
                        <div className="wrapbutton">
                        <div>Go to Homepage</div>
                        <div><FaArrowRight  fontSize={25}/></div>
                        </div>
                    </button>
            </div>
        </div>
        <Footer/>
      
        </>
    )
}
export default NOTFOUND