import React from "react";
import './shop.css'
import { Vegetable1 } from "../../components/information";
import Footer from "../../components/footer";

function Shop(){
    return(
        <>
        <div className="shop">
            <h2 className="tag50">Shop</h2>
        </div>
        {/* part1 */}
        <div className="part1">
                    <div className="cardlist">
                    {
                        Vegetable1.map((item)=>(
                            <div className="wrapcards">
                                <img src={item.image} className="image11"/>
                                <div><img src={item.image1} className="shop-image"/></div>
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
export default Shop