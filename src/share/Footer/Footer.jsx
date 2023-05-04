import React from "react";
import icon from "../../image/Group 9969.png";

const Footer = () => {
  return (
    <footer>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 bg-black p-12 gap-5 mt-10">
        <div>
          <h1 className="text-3xl font-bold text-white mb-4 title-text -mt-2">
            CHEF BOSS
          </h1>
          <p className="text-zinc-500 mb-6">
            We provide best and fresh foods for our respectable customers
          </p>
          <img className="cursor-pointer" src={icon} alt="" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white mb-4 title-text">
            COMPANY
          </h1>
          <ul className="text-zinc-500 leading-7">
            <li>About Us</li>
            <li>Works</li>
            <li>our Chefs</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-bold text-white mb-4 title-text">
            PRODUCTS
          </h1>
          <ul className="text-zinc-500 leading-7">
            <li>Foods</li>
            <li>Plans and Pricing</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg title-text font-bold text-white mb-4">
            SUPPORT
          </h1>
          <ul className="text-zinc-500 leading-7">
            <li>Help Desk</li>
            <li>Sales</li>
            <li>Chef</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg title-text font-bold text-white mb-4">
            CONTACT US
          </h1>

        </ul>
      </div>
    </div>
    </footer >
  );
};

export default Footer;
