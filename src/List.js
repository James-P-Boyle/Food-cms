import Recipe from "./Recipes";
import React from "react";

export default function List(props) {
  console.log(props);
  return (
    <div className="list">
      {props.dataObj.map((item, index) => {
        return (
          <Recipe
            key={item.fields.title}
            img={item.fields.picture.fields.file.url}
            title={item.fields.title}
            instructions={item.fields.instructions}
            ingredients={item.fields.ingredients1}
          />
        );
      })}
    </div>
  );
}
