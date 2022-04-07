import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
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
    <div className="container my-2">
      <div className="card card-custom mx-auto border-1">
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

          <div className="row">
            <div className="col-md-8">
              {foodItem.fields
                ? foodItem.fields.instructions1.content.map((node, index) => {
                    console.log(node);
                    if (node.nodeType === "ordered-list") {
                      return (
                        <ol key={index}>
                          {node.content.map((orderedItem, index) => {
                            return (
                              <li key={index}>
                                {orderedItem.content[0].content[0].value}
                              </li>
                            );
                          })}
                        </ol>
                      );
                    } else if (node.nodeType === "heading-2") {
                      return (
                        <h2 className="display-6 fw-bolder" key={index}>
                          {node.content[0].value}
                        </h2>
                      );
                    } else {
                      return "";
                    }
                  })
                : "Loading"}
            </div>

            <div className="col-md-4">
              {foodItem.fields
                ? foodItem.fields.ingredients2.content.map((node, index) => {
                    if (node.nodeType === "unordered-list") {
                      return (
                        <ul key={`ing-${index}`}>
                          {node.content.map((listItem, index) => {
                            return (
                              <li key={`ing-ul-${index}`}>
                                {listItem.content[0].content[0].value}
                              </li>
                            );
                          })}
                        </ul>
                      );
                    } else if (node.nodeType === "heading-2") {
                      return (
                        <h2
                          className="display-6 fw-bolder"
                          key={`ing-${index}`}
                        >
                          {node.content[0].value}
                        </h2>
                      );
                    } else {
                      return "";
                    }
                  })
                : "Loading"}
            </div>
          </div>

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
