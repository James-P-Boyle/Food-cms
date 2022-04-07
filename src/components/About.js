import { client } from "../client";
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
    <div>
      <h2 className="text-center text-dark mt-5">About Us</h2>
      <div className="text-center mb-5 text-dark">Here is our story</div>
      <div className="container aboutus">
        <div className="row mt-5 mx-auto my-5 p-2 card-custom border-0 shadow-lg">
          <div className="card-body col-md-6 d-flex flex-column text-center py-4 align-items-center">
            <h5 className="card-title mx-auto">About Us</h5>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="col-md-6">
            <img src={`https:${hero}`} className="card-img-bottom" alt="..." />
          </div>
          <div className="col-md-6">
            <img src={`https:${hero}`} className="card-img-bottom" alt="..." />
          </div>
          <div className="col-md-6 d-flex flex-column text-center py-4 align-items-center">
            <h5 className="card-title">Where We Started</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
              fermentum odio eu feugiat pretium nibh ipsum consequat. Vitae
              turpis massa sed elementum tempus egestas sed sed. Lacus laoreet
              non curabitur gravida arcu ac. Pellentesque diam volutpat commodo
              sed egestas egestas. Posuere lorem ipsum dolor sit. Sit amet
              consectetur adipiscing elit. Eu feugiat pretium nibh ipsum
              consequat nisl. Urna condimentum mattis pellentesque id nibh
              tortor id aliquet lectus. Nam at lectus urna duis convallis
              convallis tellus id interdum.
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column text-center py-4 align-items-center">
            <h5 className="card-title">The Journey</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
              dignissim convallis aenean et. Ornare aenean euismod elementum
              nisi quis eleifend quam adipiscing. Amet dictum sit amet justo.
              Tortor posuere ac ut consequat. Mauris ultrices eros in cursus
              turpis. At ultrices mi tempus imperdiet nulla malesuada
              pellentesque. Mattis nunc sed blandit libero volutpat sed cras
              ornare arcu. Consectetur adipiscing elit pellentesque habitant
              morbi tristique senectus et. Leo urna molestie at elementum. Sed
              blandit libero volutpat sed cras ornare arcu dui vivamus. Egestas
              maecenas pharetra convallis posuere. Facilisis magna etiam tempor
              orci eu lobortis elementum. Sit amet consectetur adipiscing elit.
            </p>
          </div>
          <div className="col-md-6">
            <img src={`https:${hero}`} className="card-img-bottom" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="container mt-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">About Us</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <h5 className="card-title">Where We Started</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <h5 className="card-title">The Journey</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <img src={`https:${hero}`} className="card-img-bottom" alt="..." />
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
        
      </div>
    </div> */
}
