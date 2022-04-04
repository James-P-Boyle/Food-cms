import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "./client";
import React from "react";

export default function Recipe() {
  const [foodItem, setFoodItem] = useState({});
  const { recipeid } = useParams();
  console.log(foodItem);

  useEffect(() => {
    client
      .getEntry(recipeid)
      .then((entry) => setFoodItem(entry))
      .catch(console.error);
  }, [recipeid]);

  return (
    <div className="container">
      <div className="card card-custom mx-auto">
        <div className="card-body">
          <div className="col-md-8 offset-md-2 text-center pt-3">
            {foodItem.fields ? (
              <img
                className="img-fluid"
                src={`https://${foodItem.fields.picture.fields.file.url}`}
                alt="item"
              />
            ) : (
              ""
            )}
          </div>
          <div className="text-center pt-5 pb-5">
            {foodItem.fields ? (
              <h5 className="card-title display-4 fw-bolder">
                {foodItem.fields.title}
              </h5>
            ) : (
              ""
            )}
          </div>
          {/*      <div className="container-sm">
            <div className="row pt-1 pb-5">
              <div className="col-md-6 p-2">
                <p className="card-text">
                  {foodItem.fields ? (
                    <h5>{foodItem.fields.ingredients2}</h5>

                  ) : (
                    ""
                  )}
                </p>
              </div>
              <div className="col-md-6 p-2">
                <p className="card-text">
                  {foodItem.fields ? (
                    <h5>{foodItem.fields.instructions1}</h5>
                  ) : (
                    ""
                  )}
                </p>
              </div>
            </div>
          </div> */}
          {foodItem.fields
            ? foodItem.fields.ingredients2.content.map((node) => {
                if (node.nodeType === "unordered-list") {
                  return (
                    <ul>
                      {node.content.map((listItem) => {
                        return <li>{listItem.content[0].content[0].value}</li>;
                      })}
                    </ul>
                  );
                } else if (node.nodeType === "heading-2") {
                  return <h2>{node.content[0].value}</h2>;
                }
              })
            : "Loading"}
          {/* ADD ELSE IF FOR OTHER LIST, EMPTY ELSE -- RETURN CONTENT NOT SUPPORTED */}
          <div>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
