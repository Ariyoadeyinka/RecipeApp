import styles from "../css/fooddetails.module.css";
import { useEffect, useState } from "react";
import Ingredients from "./Ingredients";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "90656c90bda049b4ac85da1c37f92ced";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        {" "}
        <h1 className={styles.recipeName}>{food.title}</h1>{" "}
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏲️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨🏾‍👩🏾‍👧🏾‍👧🏾Serves {food.servings}</strong>
          </span>
          <span>
            {" "}
            <strong>
              {" "}
              {food.vegetarian ? "🥬Vegetarian" : "🍖Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮Vegan Meal" : ""}</strong>
          </span>
        </div>
        <div>
          <strong>
            {" "}
            $ <span>{food.pricePerServing / 100} Per serving</span>
          </strong>
        </div>
        <h2>Ingredients</h2>
        <Ingredients food = {food} isLoading={isLoading}/>
        <div className={styles.recipeInstructions}>
          <h2>Instructions</h2>

          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li >{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
