import React, { useState } from "react";
import food1 from "../../../image/food1.jpg";
import { useLoaderData, useNavigation } from "react-router-dom";
import Chef from "../Chef/Chef";
import RecipeCategory from "../RecipeCategory/RecipeCategory";
import LatestRecipe from "../LatestRecipe/LatestRecipe";
import { useEffect } from "react";
import Loading from "../../../Loading/Loading";

const Home = () => {
  const chefData = useLoaderData();
  // console.log(chefData);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <section className=" bg-[url('image/team.jpg')] bg-no-repeat bg-center bg-cover bg-opacity-10">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 ">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="w-full h-[400px] bg-[url('image/burger1.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                  <h1 className="text-yellow-400 text-6xl font-bold">
                    BURGER
                  </h1>
                  <p className="text-white  mt-2 text-lg">

                    A CHEF IS A PROFESSIONAL COOK WHO PREPARES AND PRESENTS FOOD IN A VARIETY OF SETTINGS, SUCH AS RESTAURANTS, HOTELS, AND PRIVATE EVENTS.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <div className="w-full h-full bg-[url('image/thai-soup.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                  <h1 className="text-yellow-400 text-6xl font-bold">
                    THAI SOUP
                  </h1>
                  <p className="text-white mt-2 text-lg">

                    A CHEF IS A PROFESSIONAL COOK WHO PREPARES AND PRESENTS FOOD IN A VARIETY OF SETTINGS, SUCH AS RESTAURANTS, HOTELS, AND PRIVATE EVENTS.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <div className="w-full h-[400px] bg-[url('image/baked-chicken.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                  <h1 className="text-yellow-400 text-6xl font-bold">
                    BAKED CHICKEN
                  </h1>
                  <p className="text-white mt-2 text-lg">

                    A CHEF IS A PROFESSIONAL COOK WHO PREPARES AND PRESENTS FOOD IN A VARIETY OF SETTINGS, SUCH AS RESTAURANTS, HOTELS, AND PRIVATE EVENTS.
                  </p>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>


            <div id="slide4" className="carousel-item relative w-full">

              <div className="w-full h-[400px] bg-[url('image/fried-rice.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                <div className="w-full h-[400px] bg-[url('image/fried-rice2.jpg')] bg-no-repeat bg-center bg-cover flex flex-col items-center justify-center text-center rounded-md bg-opacity-80">
                  <div className="bg-black px-6 py-4 bg-opacity-60 text-gray-300 absolute inset-0 transition duration-700 rounded-md flex flex-col justify-center items-center">
                    <h1 className="text-yellow-400 text-6xl font-bold">
                      <h1>FRIED RICE</h1>
                    </h1>
                    <p className="text-white mt-2 text-lg">

                      A CHEF IS A PROFESSIONAL COOK WHO PREPARES AND PRESENTS FOOD IN A VARIETY OF SETTINGS, SUCH AS RESTAURANTS, HOTELS, AND PRIVATE EVENTS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>

                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>

              </div>
            </div>


          </div>
        </div>
      </section>
      <section className="mt-10">
        <h1 className="text-center text-4xl font-bold py-8 text-red-500">
          RECIPE COLLECTION
          <hr className="w-24 mt-2 border-[3px] mx-auto border-red-500" />
        </h1>
        <RecipeCategory></RecipeCategory>
      </section>
      <section>
        <h1 className="text-center text-4xl font-bold py-8 text-red-500">
          OUR CHEFS
          <hr className="w-24 mt-2 border-[3px] mx-auto border-red-500" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 gap-10">
          {chefData.map((chef) => (
            <Chef key={chef.id} chef={chef}></Chef>
          ))}
        </div>
      </section>

      <section >
        <h1 className="text-center text-4xl font-bold py-8 text-red-500">
          NEW RECIPES
          <hr className="w-24 mt-2 border-[3px] mx-auto border-red-500" />
        </h1>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chefData.slice(0, showAll ? 6 : 2).map((chef) => (
            <LatestRecipe key={chef.id} chef={chef}></LatestRecipe>
          ))}
        </div>
        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline btn-info"
            >
              SEE MORE
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
