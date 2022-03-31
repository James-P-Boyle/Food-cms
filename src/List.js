import Recipes from "./Recipes";
import React from "react";

export default function List(props) {
  console.log(props.dataObj[0]);
  return (
    <div className="list">
      {props.dataObj.map((item, index) => {
        return (
          <Recipes
            id={item.sys.id}
            key={item.fields.id}
            img={item.fields.picture.fields.file.url}
            title={item.fields.title}
            instructions={item.fields.instructions}
            ingredients={item.fields.ingredients1}
            catchPhrase={item.fields.blurb}
          />
        );
      })}
    </div>
  );
}
