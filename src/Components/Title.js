// import React, { useState } from "react";
import Info from "./Info";

const Title = ({data,index,setShowindex}) => {

    const handleclick = ()=>{
        setShowindex(index)
    }
 return (
  <>
  <div className="w-full space-y-4">
  <div className="w-full text-left p-3 border border-gray-300 cursor-pointer" onClick={handleclick}>
  <span className="block text-left">{data.title}</span>
  </div>
  </div>
  </> 
)
};

export default Title;
