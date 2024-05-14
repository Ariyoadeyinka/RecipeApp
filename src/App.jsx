import { useState } from "react";
import Search from "./components/search";
import FoodList from "./components/FoodList";
import NavBar from "./components/NavBar";
import './css/App.css'

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <NavBar/>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <FoodList foodData ={foodData} />
    </div>
  );
}

export default App;
