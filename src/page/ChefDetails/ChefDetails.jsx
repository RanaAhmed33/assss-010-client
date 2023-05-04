import React from "react";
import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Recipes from "../Recipes/Recipes";
import Loading from "../../Loading/Loading";
import { useEffect } from "react";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const { id, name, picture, likes, experience, recipes, description } =
    chefDetails;
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // console.log(recipes);
  return (
    <section className="bg-[url('image/pattern-home.jpg')] bg-no-repeat">
      <h1 className="text-center text-4xl font-bold py-8">
        OUR CHEF DETAILS
        <hr className="w-24 mt-2 border-[3px] mx-auto border-orange-500" />
      </h1>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure className="w-full lg:w-2/5">
            <img
              className="rounded-md w-full md:h-1/5 lg:h-full lg:2/5"
              src={picture}
              alt="Album"
            />
          </figure>
          <div className="p-6 flex flex-col justify-center items-center text-center w-full lg:w-3/5 space-y-3">
            <h2 className=" text-4xl font-bold title-text">{name}</h2>
            <p className=" text-base font-medium text-slate-400 w-full lg:w-4/5 mx-auto">
              {description}
            </p>
            <p className="text-lg text-slate-500 font-bold">
              {experience} Year's Experience
            </p>
            <div className="flex items-center justify-center text-center gap-2">
              <span className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </span>
              <span className="text-base font-medium text-slate-500">
                {likes}
              </span>
            </div>
            <Link to="/">
              {" "}
              <button className="btn btn-outline">Back To Home</button>
            </Link>
          </div>
        </div>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((menu, index) => (
            <Recipes menu={menu} key={index}></Recipes>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;
