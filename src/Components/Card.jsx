import React from "react";

const Card = ({ name, Artist, img, added,handler,index}) => {
  return (
    <>
      <div className="w-52 px-3 py-5 bg-slate-400 mt-4 rounded-md flex gap-6 relative ">
        <div className="w-20 h-20 bg-orange-300 rounded-md overflow-hidden">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className="">
          <h3 className=" text-nowrap text-lg font-semibold">{Artist}</h3>
          <h3 className=" text-xs font-medium">{name}</h3>
        </div>
        <button onClick={()=>handler(index)}  className={`text-nowrap rounded-full ${added?"bg-green-400" :"bg-orange-400"} px-1 absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%] `}>
          {added ? "Added":"Add to favourite"}
          
        </button>
      </div>
    </>
  );
};

export default Card;
