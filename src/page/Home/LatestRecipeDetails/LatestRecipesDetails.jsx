import React from "react";
import Rating from "react-rating";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEyeSlash,
  FaRegEye,
  FaRegStar,
  FaStar,
  FaBookmark,
} from "react-icons/fa";
import { toast } from "react-hot-toast";
import LazyLoad from "react-lazyload";

const LatestRecipesDetails = ({ menu, picture, name }) => {
  const { recipeName, ingredients, cookingMethod, ratings, img } = menu;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <LazyLoad height={200}>
          <figure>
            <img src={img} alt="Foods" />
          </figure>
        </LazyLoad>

        <div className="card-body">
          <h2 className="card-title text-2xl text-red-500">{recipeName}</h2>
          <div className="space-x-2 text-lg">
            <Rating
              placeholderRating={ratings}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
          </div>
          <p className="text-gray-500 text-base">
            A CHEF IS A PROFESSIONAL COOK WHO PREPARES AND PRESENTS FOOD IN A VARIETY OF SETTINGS, SUCH AS RESTAURANTS, HOTELS, AND PRIVATE EVENTS.
          </p>
          <div className="flex gap-2 items-center">
            <img className="rounded-full w-[50px]" src={picture} alt="" />
            <p className="text-base ">
              By <span className=" font-bold">{name}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestRecipesDetails;
