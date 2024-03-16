import SingleMeal from "./SingleMeal";
import useHttp from "./useHTTP";
import Error from "./Error";

const requestConfig = {};

let mealData = [];
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3002/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  // if (!data) {
  //   return <p>No meals found.</p>
  // }

  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <SingleMeal key={meal.id} data={meal} />
      ))}
    </ul>
  );
}
