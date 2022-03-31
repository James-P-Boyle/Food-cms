import { client } from "./client";
import React from "react";
import { useEffect, useState } from "react";

export default function About() {
  const [hero, setHero] = useState({});
  //we need get image and set it as state

  useEffect(() => {
    client
      .getEntries({
        content_type: "heroimages",
      })
      .then((entries) => {
        setHero(entries.items[1].fields.pic.fields.file.url);
      })
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
        <img src={`https:${hero}`} className="card-img-bottom" alt="..." />
      </div>
    </div>
  );
}
