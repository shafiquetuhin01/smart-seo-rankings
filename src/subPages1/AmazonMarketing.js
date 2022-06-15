import React from "react";
import { useState } from "react";
import "./AmazonMarketing.css";
const AmazonMarketing = () => {
  const [color, setColor]=useState('bg-primary');
  const handleColor = (change) =>{
    setColor(change);
  }
  return (
    <div className="mt-12 mx-auto">
      <div className="text-center text-3xl mb-5 text-indigo-300 flex gap-3 items-center justify-center">
        <h2 onMouseEnter={()=>handleColor('bg-primary')}
        onMouseOut={()=>handleColor('bg-primary')}
         className="hover:bg-purple-500 border p-3 bg-amber-400 text-white border-black">First item Primay</h2>
        <h2 onMouseEnter={()=>handleColor('bg-secondary')}
        onMouseOut={()=>handleColor('bg-primary')} className="border p-3 bg-amber-400 hover:bg-slate-600 text-white border-black">Second item Secondary</h2>
        <h2 onMouseEnter={()=>handleColor('bg-accent')}
        onMouseOut={()=>handleColor('bg-primary')} className="border p-3 bg-amber-400 hover:bg-cyan-600 text-white border-black">Third item Accent</h2>
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className={`w-96 h-96 ${color}`}></div>
        
      </div>
      
    </div>
  );
};

export default AmazonMarketing;
