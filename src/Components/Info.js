import React from "react";

const Info = ({data}) => {
  return (
    <>
    <p className=" text-center text-lg p-4  border-gray-300 w-3/4">{data.info}</p>
    </>
  )
  
};

export default Info;
