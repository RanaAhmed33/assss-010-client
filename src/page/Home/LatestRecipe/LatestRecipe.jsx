import React from "react";
import Recipes from "../../Recipes/Recipes";
import LatestRecipesDetails from "../LatestRecipeDetails/LatestRecipesDetails";

const LatestRecipe = ({ chef }) => {
  const { id, name, picture, likes, experience, recipes, description } = chef;
  console.log(chef);
  return (
    <>
      {recipes.map((menu, index) => (
        <LatestRecipesDetails
          menu={menu}
          picture={picture}
          key={index}
          name={name}
        ></LatestRecipesDetails>
      ))}
    </>
  );
};

export default LatestRecipe;
