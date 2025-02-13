import MealItem from "./MealItems.jsx";
import useHttp from "../../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isloading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isloading) {
    return <p className="center">Fetching Meals....</p>;
  }

  if(error) {
    return <Error title="Failed to fetch meals" message={error}/>
  }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}
