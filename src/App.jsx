import React, { useState, useEffect, useCallback, useRef } from 'react';
import firebase from "./firebase";
import Popup from "./Popup";

const App = () => {
  const [name, setName] = React.useState("");
  const [q1, setq1] = React.useState("");
  const [q2, setq2] = React.useState("");
  const [q3, setq3] = React.useState("");
  const [q4, setq4] = React.useState("");
  const [q5, setq5] = React.useState("");
  const paragraph = q1 + " " + q2 + " " + q3 + " " + q4 + " " + q5;
  const [url, setURL] = React.useState("");
  const [show, setShow] = React.useState(false);
  useEffect(()=>{
    console.log(paragraph);
  }, [paragraph]);
  function submit(){
//     const db = firebase.firestore().collection("puppy").doc(url).set({
//       name: name,
//       paragraph:paragraph
//     });
    setTimeout(()=>{window.location.href = "https://" + url}, 2000);
  }
  return(
    <div className="m-10">
    <h1 className="text-2xl font-bold grid justify-items-center">Puppy - New Product Details</h1>
    <div className="mt-5 grid justify-items-center text-center">
    <label className="mt-5 w-80 text-lg font-semibold">Product Name</label>
    <input onChange={(e)=>setName(e.target.value)} className="px-3 py-3 mt-5 placeholder-blueGray-300 text-blueGray-600 relative bg-white w-80 bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring" placeholder="Anteam"></input>
    <label className="mt-5 w-80 text-lg font-semibold">Product URL (no https/www)</label>
    <input onChange={(e)=>setURL(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white w-80 bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring mt-5" placeholder="anteam.com"></input>
    <label className="mt-5 w-80 text-lg font-semibold">what does your product do? (core value proposition)</label>
    <textarea onChange={(e)=>setq1(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring mt-5 w-80 h-20" placeholder="Anteam helps founders by..."></textarea>
    <label className="mt-5 w-80 text-lg font-semibold">what is your pricing model?</label>
    <textarea onChange={(e)=>setq2(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring mt-5 w-80" placeholder="we charge 10$/month for small companies and..."></textarea>
    <label className="mt-5 w-80 text-lg font-semibold">how can users use your core product? (describe pages and features)</label>
    <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase mt-5 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShow(true)}
      >view Reference</button>
    {show ? (
      <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold">
                    Reference - sample description for a calendar scheduling product.
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShow(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    The dashboard is where you can see all your upcoming meetings and the guests invited for each meeting. You can also see all your different meeting links on the dashboard. You can click the 'Create' button to create new meetings and set timing, guests and other details. You can click the 'Manage' button to edit existing meetings. 
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    ) : null}
    <textarea onChange={(e)=>setq3(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring mt-5 w-80" placeholder="user can create new interviews by clicking the 'create' button..."></textarea>
    <label className="mt-5 w-80 text-lg font-semibold">how can someone sign up for your product?</label>
    <textarea onChange={(e)=>setq4(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring mt-5 w-80" placeholder="someone can sign up for our product by clicking the signup button on..."></textarea>
    <label className="mt-5 w-80 text-lg font-semibold">who is the perfect user for your product?</label>
    <textarea onChange={(e)=>setq5(e.target.value)} className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring mt-5 w-80" placeholder="the perfect user for this product is a busy recruiter..."></textarea>
    <button onClick={submit} className="mt-10 bg-blue-500 text-white active:bg-blue-600 font-bold uppercase mt-5 text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Submit</button>
    </div>
    </div>
  )
}

export default App
