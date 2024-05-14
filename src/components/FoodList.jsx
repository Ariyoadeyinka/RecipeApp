import FoodItem from "./FoodItem";

export default function FOodList({foodData}) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food = {food}/>
      ))}
    </div>
  );
}
