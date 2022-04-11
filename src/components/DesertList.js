import { useEffect, useState } from "react";
import { client } from "../client";

export default function DesertList() {
  const [cakeImgs, setCakeImgs] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "dessert",
      })
      .then((entries) => {
        setCakeImgs(entries.items);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h4 className="text-center display-4 fw-bolder pt-5">
          Our Top Rated Desserts
        </h4>
        <div className="row d-flex justify-content-around py-3">
          {cakeImgs.map((desert) => {
            return (
              <div
                key={desert.sys.id}
                className="col-10 col-md-5 shadow my-4 pt-2 card bottom-pink-border card-custom"
              >
                <img
                  src={desert.fields.picture.fields.file.url}
                  alt=""
                  className="rounded dessertImg"
                />

                <h2 className="display-7 mt-3 text-center">
                  {desert.fields.title}
                </h2>

                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-outline-light btn-dark  my-2 py-2 px-3">
                      View Recipe
                    </button>
                  </div>
                  <div className="col-6 d-flex align-items-center justify-content-end my-2 py-2 px-3">
                    <i className="fa fa-star pe-1"></i>
                    <i className="fa fa-star pe-1"></i>
                    <i className="fa fa-star pe-1"></i>
                    <i className="fa fa-star pe-1"></i>
                    <i className="fa fa-star"></i>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
