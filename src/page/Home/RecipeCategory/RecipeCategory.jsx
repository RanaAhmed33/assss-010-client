import React from "react";
import f1 from "../../../image/f1.jpg";
import f2 from "../../../image/f2.jpg";
import f3 from "../../../image/f3.jpg";
import f4 from "../../../image/f4.jpg";
import f5 from "../../../image/f5.jpg";

const RecipeCategory = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10">
      <div className="rounded-full space-y-2">
        <img className="rounded-full" src={f1} alt="" />
        <h1 className="text-lg font-bold text-center">Appetizers</h1>
      </div>
      <div className="rounded-full space-y-2 ">
        <img className="rounded-full " src={f2} alt="" />
        <h1 className="text-lg font-bold text-center">Vegetable</h1>
      </div>
      <div className="rounded-full space-y-2">
        <img className="rounded-full " src={f3} alt="" />
        <h1 className="text-lg font-bold text-center">Coconut</h1>
      </div>
      <div className="rounded-full space-y-2">
        <img className="rounded-full " src={f4} alt="" />
        <h1 className="text-lg font-bold text-center">Pasta</h1>
      </div>
      <div className="space-y-2 relative">
        <img className="rounded-full" src={f5} alt="" />
        {/* <div className="bg-black bg-opacity-75 opacity-0 hover:opacity-70  absolute inset-0  transition duration-700 rounded-full"></div> */}
        <h1 className="text-lg font-bold text-center">Desserts</h1>
      </div>
    </div>
  );
};

export default RecipeCategory;
