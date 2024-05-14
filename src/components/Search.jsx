import { useEffect, useState } from "react";
import styles from '../css/search.module.css'

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "90656c90bda049b4ac85da1c37f92ced";
export default function Search({setFoodData}) {
  const [query, setQuery] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data)
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]); 
  return (
    <div className={styles.searchContainer}> 
      <input className={styles.searchBox}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      />
    </div>
  );
}
