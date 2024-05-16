import { useEffect, useState } from "react";
import MealItem from "./MealItem";
// import { getMeals } from "../http";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function getMeals() {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        // Failed to fetch
      }

      const resData = await response.json();

      setLoadedMeals(resData);
    }

    getMeals();
  }, []);

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
