import FoodItem from "./FoodItem";

export default function FOodList({foodData}) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem food = {food}/>
      ))}
    </div>
  );
}
