import React from "react";
import './about.css'
import rasm2 from '../../assets/rasm2.png'
import rasm3 from '../../assets/rasm3.svg'
import rasm4 from '../../assets/rasm4.svg'
import rasm5 from '../../assets/rasm5.png'
import rasm6 from '../../assets/rasm6.png'
import rasm7 from '../../assets/rasm7.png'
import rasm8 from '../../assets/rasm8.png'
import rasm9 from '../../assets/rasm9.png'
import rasm10 from '../../assets/rasm10.jpg'
import rasm14 from '../../assets/rasm14.png'
import rasm15 from '../../assets/rasm15.png'
import rasm16 from '../../assets/rasm16.png'
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Footer from "../../components/footer";



function About(){
    return(
        <>
    <div className="bolim1"  data-aos="zoom-in-down">
        <h1 className="tag31">About us</h1>    </div>
        {/* bolim2 */}

        <div className="bolim2">
            <div>
                <img src={rasm2}/>
            </div>
            <div>
                <h4 className="tag32">About Us</h4>
               <h2 className="tag33"> We do Creative Things for Success</h2>
                <p className="tag34">
  Simply dummy text of the printing and typesetting industry.
  Lorem had ceased<br></br> to been the industry's standard dummy text
  ever since the 1500s, when an<br></br> unknown printer took a galley.
</p>
<p className="tag35">Simply dummy text of the printing and typesetting industry. Lorem had ceased
                    <br></br> to been the industry's standard dummy text ever since the 1500s, when an
                    <br></br> unknown printer took a galley.</p>
                    <div className="oldwrapicons">
                        <div className="old1">
                          <div><img src={rasm3}/></div>
                            <div><h4 className="tag36">Modern Agriculture<br></br>Equipment</h4></div>
                        </div>
                         <div className="old1">
                          <div><img src={rasm4}/></div>
                            <div><h4 className="tag36">No growth <br></br> hormones are used</h4></div>
                        </div>
                    </div>
                    <button className="button2">Explore More</button>
            </div>
        </div>
        {/* bolim3 */}
        <div className="bolim3">
            <div>
                <h4 className="tag32">Why Choose us?</h4>
                <h2 className="tag33">We do not buy from the<br></br>
open market & traders.</h2>
<p className="tag34">Simply dummy text of the printing and typesetting industry. Lorem had ceased <br></br> to been the industry's standard  the 1500s, when an unknown</p>
<button className="wrapdiv">
  <div><img src={rasm5}/></div>
  <div><h3 className="tag40">100% Natural Product</h3></div>
</button>
<p className="tag34">Simply dummy text of the printing and typesetting <br></br> industry Lorem Ipsum</p>
<button className="wrapdiv">
  <div><img src={rasm5}/></div>
  <div><h3 className="tag40">100% Natural Product</h3></div>
</button>
<p className="tag34">Filling, and temptingly healthy, our Biona Organic <br></br> Granola with Wild Berries is just the thing</p>
            </div>
            <div><img src={rasm6}/>
            </div>
        </div>
        {/* bolim4 */}
        <div className="bolim4">
            <div><h4 className="tag32">Team</h4>
             <h2 className="tag33">Our Organic Experts</h2>
             <p className="tag34">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's <br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
             <div className="threewrap">
                <div className="three">
                    <img src={rasm7}/>
                    <h3 className="tag41">Giovani Bacardo</h3>
                    <div className="old-wrap">
                        <div>
                            <h3 className="tag42">Farmer</h3>
                        </div>
                        <div className="wrap-icon">
                         <div> <FaFacebook fontSize={30} /></div>
                        <div>  <FaTwitter fontSize={30} /></div>
                        </div>
                    </div>
                </div>
                <div className="three1">
                    <img src={rasm8}/>
                    <h3 className="tag41">Marianne Loreno</h3>
                    <div className="old-wrap">
                        <div>
                            <h3 className="tag42">Designer</h3>
                        </div>
                        <div className="wrap-icon">
                         <div> <FaFacebook fontSize={30} /></div>
                        <div>  <FaTwitter fontSize={30} /></div>
                        <div><FaInstagram  fontSize={30} /></div>
                        </div>
                    </div>
                </div>
                 <div className="three">
                    <img src={rasm9}/>
                    <h3 className="tag41">Giovani Bacardo</h3>
                    <div className="old-wrap">
                        <div>
                            <h3 className="tag42">Farmer</h3>
                        </div>
                        <div className="wrap-icon">
                         <div> <FaFacebook fontSize={30} /></div>
                        <div>  <FaTwitter fontSize={30} /></div>
                        </div>
                    </div>
                </div>
             </div>
             </div>
        </div>
        {/* bolim5 */}

        <div className="bolim5"  >
             <div>
                <h4 className="tag43">About Us</h4>
                <h2 className="tag44">What We Offer for You</h2>
                <div className="four-card-wrap">
                    <div>
                        <img src={rasm10} className="four-card"/>
                        <h3 className="tag42">Spicy</h3>
                    </div>
                     <div>
                        <img src={rasm14} className="four-card"/>
                        <h3 className="tag42">Nuts & Feesd</h3>
                    </div>  
                     <div>
                        <img src={rasm15} className="four-card"/>
                        <h3 className="tag42">Fruits</h3>
                    </div>
                     <div>
                        <img src={rasm16} className="four-card" width={400}/>
                        <h3 className="tag42">Vegetable</h3>
                    </div>
                </div>
             </div>
        </div>
        {/* bolim6 */}

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
export

 default About