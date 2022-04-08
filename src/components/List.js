import Recipes from "./Recipes";
import React from "react";

export default function List(props) {
  return (
    <>
    <h2 className="text-center text-dark mt-5">Recipes</h2>
      <div className="text-center mb-2 text-dark">Here is our top picks for the week</div>
    <div className="container">
      <div className="row d-flex justify-content-evenly">
        {props.dataObj.map((item, index) => {
          return (
            <Recipes
              id={item.sys.id}
              key={item.sys.id}
              img={item.fields.picture.fields.file.url}
              title={item.fields.title}
              instructions={item.fields.instructions1}
              ingredients={item.fields.ingredients2}
              catchPhrase={item.fields.blurb}
            />
          );
        })}
      </div>
    </div>
    </>
  );
}
