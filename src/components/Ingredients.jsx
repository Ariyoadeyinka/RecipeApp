import Item from "./Item";

export default function Ingredients({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div>
            <Item item = {item}/>
          </div>
        ))
      )}
      {}
    </div>
  );
}
