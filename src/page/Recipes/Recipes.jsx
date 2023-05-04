import React, { useState } from "react";
import { Link } from "react-router-dom";
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

const Recipes = ({ menu }) => {
  const { recipeName, ingredients, cookingMethod, ratings, img } = menu;
  const [love, setLove] = useState(false);
  const addLoveItem = () => {
    toast.success("Favorite Items Added Successfully");
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Foods" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl title-text">{recipeName}</h2>
        <h1 className="font-bold text-base text-gray-500">Ingredients</h1>
        <span className="ml-6">
          <ul className="list-disc">
            {ingredients.map((element, index) => (
              <li key={index} className="text-gray-500">
                {element}
              </li>
            ))}
          </ul>
        </span>
        <h1 className="font-bold text-base text-gray-500">Cooking Method</h1>
        <p className="text-gray-500 text-base text-justify ml-2">
          {cookingMethod}
        </p>

        <div className="flex justify-between">
          <div className="space-x-2">
            <Rating
              placeholderRating={ratings}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className="text-warning"></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span>{ratings}</span>
          </div>
          <div>
            {love ? (
              <button
                onClick={() => addLoveItem(setLove(!love))}
                disabled={love}
              >
                <FaBookmark className="text-2xl cursor-pointer"></FaBookmark>
              </button>
            ) : (
              <button
                onClick={() => addLoveItem(setLove(!love))}
                disabled={love}
              >
                <FaRegBookmark className="text-2xl cursor-pointer"></FaRegBookmark>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
