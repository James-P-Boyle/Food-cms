import Recipe from "./Recipes";

export default function List(props) {
  //we have access to the list
  //map and return item
  return (
    <div className="list">
      {props.dataObj.map((element) => {
        return (
          <Recipe
            title={element.fields.title}
            instructions={element.fields.instructions}
            ingredients={element.fields.ingredients1}
          />
        );
      })}

      {/*   //return <List  key .. . . /> */}
    </div>
  );
}
