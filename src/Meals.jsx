import SingleMeal from "./SingleMeal"
import useHttp from './useHTTP';
import Error from './Error';


const requestConfig = {};

let mealData = []
export default function Meals() {
  const { 
    data,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p style={{textAline : "center"}}>Fetching meals...</p>;
  }

  // if (!data) {
  //   return <p>No meals found.</p>
  // }
  // if(data.length>0){
  //   // mealData = [...data]
  // }
  if(error){
    return <Error title="Failed meal load" msg={error}/>
  }
;
  return (
    <ul id="meals">
    {data.length === 0 ? (
      <p></p> 
    ) : (
      data.map((meal) => <SingleMeal key={meal.id} data={meal} />)
    )}
  </ul>
  
  );
}