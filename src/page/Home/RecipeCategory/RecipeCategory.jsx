import React from "react";
import rc1 from "../../../image/rc1.jpg";
import rc2 from "../../../image/rc2.jpg";
import rc3 from "../../../image/rc3.jpg";
import rc4 from "../../../image/rc4.jpg";
import rc5 from "../../../image/rc5.jpg";


const RecipeCategory = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10">
      <div className="rounded-full space-y-3">
        <img className="rounded-full" src={rc1} alt="" />
        <h1 className="text-lg font-bold text-center text-red-500">HOT DOG</h1>
      </div>
      <div className="rounded-full space-y-3 ">
        <img className="rounded-full " src={rc2} alt="" />
        <h1 className="text-lg font-bold text-center text-red-500">DONUT</h1>
      </div>
      <div className="rounded-full space-y-3">
        <img className="rounded-full " src={rc3} alt="" />
        <h1 className="text-lg font-bold text-center text-red-500">PASTA</h1>
      </div>
      <div className="rounded-full space-y-3">
        <img className="rounded-full " src={rc4} alt="" />
        <h1 className="text-lg font-bold text-center text-red-500">FRIED RICE</h1>
      </div>
      <div className="rounded-full  space-y-3">
        <img className="rounded-full" src={rc5} alt="" />
        <h1 className="text-lg font-bold text-center text-red-500">ONION RING</h1>
      </div>
    </div>
  );
};

export default RecipeCategory;
