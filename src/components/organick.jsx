import React from "react";
import Navbar from "./navbar";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './organick.css'
import { IoArrowForwardOutline } from "react-icons/io5";
import logo8 from '../assets/logo8.png'
import logo9 from '../assets/logo9.png'
import logo10 from '../assets/logo10.png'
import logo18 from '../assets/logo18.png'
import logo13 from '../assets/logo13.png'
import logo14 from '../assets/logo14.png'
import logo19 from '../assets/logo19.png'
import logo20 from '../assets/logo20.png'
import logo21 from '../assets/logo21.png'
import logo22 from '../assets/logo22.png'
import logo23 from '../assets/logo23.png'
import logo24 from '../assets/logo24.png'
import logo26 from '../assets/logo26.png'
import logo27 from '../assets/logo27.png'
import logo28 from '../assets/logo28.png'
import logo29 from '../assets/logo29.png'
import logo30 from '../assets/logo30.png'
import logo31 from '../assets/logo31.png'
import logo32 from '../assets/logo32.png'
import logo35 from '../assets/logo35.png'
import { Vegetable } from "./data";
import { AiOutlineSafety } from "react-icons/ai";
import Footer from "./footer";


function Organick(){
    AOS.init({
        duration:1000
    })
    return(
        <>
    
   <div className="body">
      <div className="section1"  data-aos="zoom-in-up">
      <div className="insidebox">
        <h3 className="tag1">100% Natural Food</h3>
        <h1 className="tag2">Choose the best <br></br>
healthier way<br></br>
of life</h1>
    <button className="button1">
        <div className="wrapbutton">
        <div>Explore Now</div>
        <div><IoArrowForwardOutline  fontSize={30}/></div>
        </div>
    </button>
      </div>
     </div>
     {/* section2 */}
     <div className="section2">
      <div className="insidebox1" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div>
            <h3 className="tag4">Natural!!</h3>
            <h2 className="tag5">Get Garden <br></br> Fresh Fruits</h2>
        </div>
      </div>
      <div className="insidebox2" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">

      </div>
     </div>
     {/* section3 */}
     <div className="section3" 
     data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <div className="insidebox3">
            <img src={logo8}/>
        </div>
        <div>
            <h4 className="tag6">About Us</h4>
            <h2 className="tag7">We Believe in Working<br></br>Accredited Farmers</h2>
            <p className="tag8">Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br></br>
been the industry's standard dummy text ever since the 1500s, when an unknown <br></br> printer took a galley.</p>
<div className="wraptag">
    <div>
        <img src={logo9}/>
    </div>
    <div>
        <h4 className="tag9">Organic Foods Only</h4>
        <p className="tag10">Simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum</p>
    </div>
</div>
<div className="wraptag">
    <div>
        <img src={logo10}/>
    </div>
    <div>
        <h4 className="tag9">Quality Standards</h4>
        <p className="tag10">Simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum</p>
    </div>
</div>
 <button className="button2">
        <div className="wrapbutton">
        <div>Explore Now</div>
        <div><IoArrowForwardOutline  fontSize={25}/></div>
        </div>
    </button>
        </div>
     </div>
     {/* section4 */}
     <div className="section5"
     data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
        <div>
            <h4 className="tag14">Categories </h4>
            <h2 className="tag15">Our Products</h2>
        </div>
     </div>

     <div className="section4" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
        <div className="cardlist">
        {
            Vegetable.map((item)=>(
                <div className="wrapcards">
                    <img src={item.image} className="image11"/>
                    <div><img src={item.image1}/></div>
                    <h3 className="tag11">{item.name}</h3>
                    <img src={item.imag3}className="line"/>
                    <div className="wraptags">
                       <div className="wrapp"><div><del className="tag12">{item.price}</del></div>
                         <div><p className="tag13">{item.price1}</p></div>
                         <div><img src={item.image2}/></div></div>

                    </div>
                </div>
            ))
        }
     </div>
     </div>
     <div className="textbutton"  data-aos="fade-down">
        <div>
            <button className="button2">
        <div className="wrapbutton">
        <div>Load More</div>
        <div><IoArrowForwardOutline  fontSize={30}/></div>
        </div>
    </button>
        </div>
     </div>
     {/* section6 */}
     <div className="section6">
        <div>
            <h4 className="tag14">Testimonial</h4>
            <h1 className="tag15">What Our Customer Saying?</h1>
            <img src={logo18} className="image2"/>
           <div><img src={logo13}/></div>
           <p className="tag16">Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br></br> text of the printing and typesetting industry. Lorem Ipsum has been.</p>
           <h4 className="tag17">Sara Taylor</h4>
           <p className="tag18">Consumer</p>
           <img src={logo19} className="image3"/>
           <div className="wrapoval">
            <div>
                <img src={logo20}/>
            </div>
             <div>
                <img src={logo21}/>
            </div>
             <div>
                <img src={logo22}/>
            </div>
             <div>
                <img src={logo23}/>
            </div>
           </div>
        </div>
     </div>
     {/* SECTION7 */}
     <div className="section7">
        <div className="wrapnewtag">
            <div><h4 className="tag20">Offer</h4><h2 className="tag21">We Offer Organic For You</h2></div>
            <div><button className="button1">View All Product</button></div>
        </div>
       <div>
        <div className="newcardwrap">
            <div className="newcard">
                <div>
                    <button className="button3">Vegetable</button>
                    <img src={logo24} width={330} className="padleft"/>
                    <h4 className="tag11">Mung Bean</h4>
                    <img src={logo14} className="image4"/>
                    <div className="wrapall">
                        <div>
                            <del className="tag12">$20.00</del>
                        </div>
                        <div><h3>$11.00</h3></div>
                        <div><img src={logo13} className="padright"/></div>
                       
                    </div>
                </div>
            </div>
             <div className="newcard">
                <div>
                    <button className="button3">Vegetable</button>
                    <img src={logo26} width={300} height={310} className="padleft"/>
                    <h4 className="tag11">Brown Hazelnut</h4>
                    <img src={logo14} className="image4"/>
                    <div className="wrapall">
                        <div>
                            <del className="tag12">$20.00</del>
                        </div>
                        <div><h3>$12.00</h3></div>
                        <div><img src={logo13} className="padright"/></div>
                       
                    </div>
                </div>
            </div>
             <div className="newcard">
                <div>
                    <button className="button3">Vegetable</button>
                    <img src={logo27} width={330} height={310} className="padleft"/>
                    <h4 className="tag11">Onion</h4>
                    <img src={logo14} className="image4"/>
                    <div className="wrapall">
                        <div>
                            <del className="tag12">$20.00</del>
                        </div>
                        <div><h3>$17.00</h3></div>
                        <div><img src={logo13} className="padright"/></div>
                       
                    </div>
                </div>
            </div>
             <div className="newcard">
                <div>
                    <button className="button3">Vegetable</button>
                    <img src={logo28} width={330} height={310} className="padleft"/>
                    <h4 className="tag11"> Cabbage</h4>
                    <img src={logo14} className="image4"/>
                    <div className="wrapall">
                        <div>
                            <del className="tag12">$20.00</del>
                        </div>
                        <div><h3>$17.00</h3></div>
                        <div><img src={logo13} className="padright"/></div>
                       
                    </div>
                </div>
            </div>
        </div>
       </div>
     </div>
     {/* section8 */}

     <div className="section8">
        <div>
            <img src={logo29}/>
        </div>
        <div className="insidetext">
            <div>
                <h5 className="tag20">Eco Friendly</h5>
                <h1 className="tag23">Econis is a Friendly <br></br>Organic Store</h1>
                <h4 className="tag24">Start with Our Company First</h4>
                <p className="tag25">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br></br> doloremque laudantium. Sed ut perspiciatis.</p>
                 <h4 className="tag24">Start with Our Company First</h4>
                <p className="tag25">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br></br> doloremque laudantium. Sed ut perspiciatis.</p>
                 <h4 className="tag24">Start with Our Company First</h4>
                <p className="tag25">Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium <br></br> doloremque laudantium. Sed ut perspiciatis.</p>
            </div>
        </div>
     </div>
     {/* section9 */}
     <div className="section9">
        <div className="newrapbutton">
            <div>
                <img src={logo30} width={535} height={583} className="paddtop"/>
            </div>
            <div>
                <img src={logo31} width={535}height={583} className="paddtop"/>
            </div>
             <div>
                <img src={logo32} width={535}height={583} className="paddtop"/>
            </div>
        </div>
     </div>
     {/* section10 */}

     <div className="section10">
        <div>
            <h4 className="tag30">News</h4>
            <div className="twotag">
           <div><h2 className="tag26">Discover weekly content about <br></br> organic food, & more</h2></div>
           <div><button className="button4">More News</button></div>
            </div>
            <div className="wrapimagecard">
                <div className="insidecard">
                 <div className="twoinsidecard">
                 <h4 className="tag27">By Rachi Card</h4>
                 <h3 className="tag28">The Benefits of Vitamin D & How to Get It</h3>
                 <p className="tag29">Simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum</p>
                 <button className="button1">Read More</button>
                 </div>
                </div>
                <div className="insidecard1">
                     <div className="twoinsidecard">
                 <h4 className="tag27">By Rachi Card</h4>
                 <h3 className="tag28">The Benefits of Vitamin D & How to Get It</h3>
                 <p className="tag29">Simply dummy text of the printing and typesetting <br></br> industry. Lorem Ipsum</p>
                 <button className="button1">Read More</button>
                 </div>
                </div>
            </div>
        </div>
     </div>
     <div className="oldwrapimage">
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
        </div></div>
   </div>
     <Footer/>
        </>
    )
}
export default Organick