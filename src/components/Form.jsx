import React from "react";
import { useState } from 'react';
import Popup from "./Popup";

import Speedometer from "./Speedometer";

function Form() {

  const [bmi, setBMI] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [trigger, setTrigger] = useState(false);

 
  const calculateBMI=()=>{
    let value=weight*10000/(height*height);
    value=Math.round(value *10)/10
    if(value<15) value=15;
    if(value>40) value=40
    setBMI(value);
    setTrigger(true)
  };

  return (
    <div className=" pl-5 pr-5 grid grid-cols-1 items-center">
      
      <div className="p-6 mx-auto  h-80 bg-white rounded-xl shadow-lg  mb-6 space-x-4 ">
        <div className="column-0 ">
          <div>
            <label className="block ">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Enter Your Weight
              </span>
              <input
                type="number"
                name="weight"
                className="mt-1 w-80 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-lg  focus:ring-1"
                placeholder="Your weight in KG"
                onInput={e=>setWeight(e.target.value)}
              />
            </label>
           
            <label className="block pt-5">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Enter Your Height
              </span>
              <input
                type="number"
                name="height"
                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-80 rounded-lg  focus:ring-1"
                placeholder="Your height in CM"
                onInput={e=>setHeight(e.target.value)}
              />
            </label>
            <div className="pt-5 flex flex-col items-center">
            <button className="pt-3 pb-3 pl-2 pr-2 text-indigo-100 w-71 h-12 rounded-lg bg-indigo-700 focus:shadow-outline" onClick={calculateBMI}>
              Calculate
            </button>
            </div>
           
            </div>
        </div>
      </div>
      
      <Speedometer value={bmi}/>
      {/* <Popup trigger={trigger}/> */}
    </div>
  );
}

export default Form;
