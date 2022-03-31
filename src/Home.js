import List from "./List";
import { useEffect, useState } from "react";
/* import { useNavigate } from "react-router-dom"; */

export default function Home(props) {
  /*  const navigate = useNavigate(); */

  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="..." className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    /*  <div className="row mt-1">
      <div className="col-12">
        <div className="container-fluid hero">
          <div className="card bg-primary text-white border-0 mt-2">
            <img
              src=""
              className="card-img hero-img"
              alt="Background Image"
            ></img>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container h-50 d-flex flex-column justify-content-around">
                <div>
                  <h5 className="card-title display-3 fw-bolder ">
                    GREAT RECIPES
                  </h5>
                  <p className="card-text lead fs-2">MADE EASY</p>
                </div>
                <div>
                  <small
                    className="btn btn-outline-dark  py-3 px-4 "
                    onClick={() => {
                      navigate(`/recipes`);
                    }}
                  >
                    VIEW INGREDIENTS
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */
  );
}
