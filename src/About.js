import { client } from "./client";
import React from "react";
import { useEffect, useState } from "react";

export default function About() {
  const [images, setImages] = useState({});
  //we need get image and set it as state
  console.log(images);
  useEffect(() => {
    client
      .getEntry({
        content_type: "Images",
      })
      .then((entry) => setImages(entry.fields.images))
      .catch(console.error);
  }, []);

  return (
    <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">About Us</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        <img
          src={`https:${images[0].fields.file.url}`}
          className="card-img-bottom"
          alt="..."
        />
      </div>
    </div>
  );
}
