import FoodItem from "./FoodItem";

export default function FOodList({foodData, setFoodId}) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem  key={food.id} food = {food} setFoodId = {setFoodId}/>
      ))}
    </div>
  );
}
