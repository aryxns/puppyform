import React, { useState, useEffect, useCallback, useRef } from 'react';
import firebase from "./firebase";

const App = () => {
  const [name, setName] = React.useState("");
  const [paragraph, setPara] = React.useState("");
  const [url, setURL] = React.useState("");
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
    <div className="mt-10 grid justify-items-center">
    <input onChange={(e)=>setName(e.target.value)} className="p-2 w-80 text-xl border-2" placeholder="Product Name"></input>
    <input onChange={(e)=>setURL(e.target.value)} className="p-2 mt-5 w-80 text-xl border-2" placeholder="Product URL (no https/www)"></input>
    <textarea onChange={(e)=>setPara(e.target.value)} className="p-2 mt-5 h-20 w-2/5 text-xl border-2" placeholder="Product Description with Features"></textarea>
    <button onClick={submit} className="mt-10 p-2 text-2xl text-white font-bold bg-blue-400 hover:bg-blue-900 ">Submit</button>
    </div>
    </div>
  )
}

export default App
