import React, { useState, useEffect, useCallback, useRef } from 'react';
import firebase from "./firebase";

const App = () => {
  const [name, setName] = React.useState("");
  const [q1, setq1] = React.useState("");
  const [q2, setq2] = React.useState("");
  const [q3, setq3] = React.useState("");
  const [q4, setq4] = React.useState("");
  const [q5, setq5] = React.useState("");
  const paragraph = q1 + " " + q2 + " " + q3 + " " + q4 + " " + q5;
  const [url, setURL] = React.useState("");
  useEffect(()=>{
    console.log(paragraph);
  }, [paragraph]);
  function submit(){
    const db = firebase.firestore().collection("puppy").doc(url).set({
      name: name,
      paragraph:paragraph
    });
    setTimeout(()=>{window.location.href = "https://" + url}, 2000);
  }
  return(
    <div className="m-10">
    <h1 className="text-2xl font-bold grid justify-items-center">Puppy - New Product Details</h1>
    <div className="mt-5 grid justify-items-center">
    <label className="mt-5 text-xl">Product Name</label>
    <input onChange={(e)=>setName(e.target.value)} className="p-2 w-80 text-lg mt-5 border-2" placeholder="Anteam"></input>
    <label className="mt-5 text-xl">Product URL (no https/www)</label>
    <input onChange={(e)=>setURL(e.target.value)} className="p-2 mt-5 w-80 text-xl border-2" placeholder="anteam.com"></input>
    <label className="mt-5 text-xl">what does your product do? (core value proposition)</label>
    <textarea onChange={(e)=>setq1(e.target.value)} className="p-2 mt-5 h-20 w-2/5 text-lg border-2" placeholder="Anteam helps founders by..."></textarea>
    <label className="mt-5 text-xl">what is your pricing model?</label>
    <textarea onChange={(e)=>setq2(e.target.value)} className="p-2 mt-5 h-20 w-2/5 text-lg border-2" placeholder="we charge 10$/month for small companies and..."></textarea>
    <label className="mt-5 text-xl">how can users use your core product? (describe pages and features)</label>
    <textarea onChange={(e)=>setq3(e.target.value)} className="p-2 mt-5 h-20 w-2/5 text-lg border-2" placeholder="user can create new interviews by clicking the 'create' button..."></textarea>
    <label className="mt-5 text-xl">how can someone sign up for your product?</label>
    <textarea onChange={(e)=>setq4(e.target.value)} className="p-2 mt-5 h-20 w-2/5 text-lg border-2" placeholder="someone can sign up for our product by clicking the signup button on..."></textarea>
    <label className="mt-5 text-xl">who is the perfect user for your product?</label>
    <textarea onChange={(e)=>setq5(e.target.value)} className="p-2 mt-5 h-20 w-2/5 text-lg border-2" placeholder="the perfect user for this product is a busy recruiter..."></textarea>
    <button onClick={submit} className="mt-10 p-2 text-2xl text-white font-bold bg-blue-400 hover:bg-blue-900 ">Submit</button>
    </div>
    </div>
  )
}

export default App
