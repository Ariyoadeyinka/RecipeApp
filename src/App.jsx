import { useState } from "react";
import Search from "./components/search";
import FOodList from "./components/FoodList";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FOodList foodData ={foodData} />
    </div>
  );
}

export default App;
