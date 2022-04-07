export default function DesertCards(props) {
  console.log(props);
  return (
    <>
      <div className="container mt-5">
        <h4 className="text-center display-4 fw-bolder pt-5">
          Our Top Rated Deserts
        </h4>
        <div className="row d-flex justify-content-around py-3">
          {props.desertObj.map((desert) => {
            return (
              <>
                <div className="col-10 col-md-5 border-0 shadow my-4 card">
                  <img
                    src={desert.fields.picture.fields.file.url}
                    alt=""
                    className="rounded"
                  />
                  <h2 className="display-6 text-center">
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
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
