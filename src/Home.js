import { useEffect, useState } from "react";
import { client } from "./client";

export default function Home(props) {
  const [slides, setSlides] = useState([]);
  console.log(slides);
  useEffect(() => {
    client
      .getEntries({
        content_type: "heroimages",
      })
      .then((entries) => {
        setSlides(entries.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
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
        {slides.length ? (
          <div className="carousel-inner">
            {slides.map((slide, index) => {
              return (
                <div
                  className={!index ? "carousel-item active" : "carousel-item"}
                >
                  <img
                    src={`https:${slide.fields.pic.fields.file.url}`}
                    className="d-block w-100 display-relative"
                    alt="..."
                  />
                  <div className="imgOverlay"></div>
                  <div className="carousel-caption h-100 d-flex flex-column justify-content-center align-items-start">
                    <h5 className="display-2 fw-bolder z-top">
                      {slide.fields.brand}
                    </h5>
                    <p className="display-6 z-top">{slide.fields.message}</p>
                    <button className="btn btn-outline-light btn-dark  mt-3 py-2 px-5 z-top">
                      OUR MENU
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          "Loading"
        )}

        <button
          class="carousel-control-prev indicator"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next indicator"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
