import axios from "axios";
import React, { useState , useEffect } from "react";
import { toast } from "react-toastify";
import './input.css'

function Input(){
   let [name,setName]=useState("")
    let [email,setEmail]=useState("")
     let [company,setCompany]=useState("")
      let [subject,setSubject]=useState("")
      let [massage,setMassage]=useState("")
   
      function clearState(){
    setName("")
    setEmail("")
    setCompany("")
    setMassage("")
    setSubject("")
    console.log(name);
     console.log(email);
      console.log(company);
       console.log(subject);
        console.log(massage);
    
  }
  function HandleSubmit(e){
    e.preventDefault()

    fetch("http://localhost:3002/users",{
      method: "POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({
        name: name,
        email: email,
        company:company,
        massage:massage,
        subject:subject
      })
    })
    clearState()
  }
   return(
    <>
    
   <div className="users">
    <form onSubmit={HandleSubmit}>
     <div className="wrapinput"> 
      <div><input type="text" placeholder="Your Email Address" value={name} onChange={(e)=>setName(e.target.value)}/></div>
       <div><input type="email" placeholder="example@yourmail.com" value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
       </div>
       <div className="wrapinput">
      <div><input type="text" placeholder="yourcompany name here" value={company} onChange={(e)=>setCompany(e.target.value)}/></div>
        <div><input type="text" placeholder="how can we help" value={subject} onChange={(e)=>setSubject(e.target.value)}/></div>
         </div>
          <input type="text" placeholder="hello there,i would like to talk about how to..." className="singleinput" value={massage} onChange={(e)=>setMassage(e.target.value)}/>
          <button type="submit" className="button45">send</button>
    </form>
   </div>

    </>
   )
}
export default Input