import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "./client";
import React from "react";

export default function Recipe() {
  const [foodItem, setFoodItem] = useState({});
  const { recipeid } = useParams();

  useEffect(() => {
    client
      .getEntry(recipeid)
      .then((entry) => setFoodItem(entry))
      .catch(console.error);
  }, [recipeid]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {foodItem.fields ? <h1>{foodItem.fields.title}</h1> : ""}
          </h5>
          <p className="card-text">
            {foodItem.fields ? <h5>{foodItem.fields.instructions}</h5> : ""}
          </p>
          <p className="card-text">
            {foodItem.fields ? <h5>{foodItem.fields.ingredients1}</h5> : ""}
          </p>
          <p className="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        {foodItem.fields ? (
          <img
            src={`https://${foodItem.fields.picture.fields.file.url}`}
            alt="item"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
