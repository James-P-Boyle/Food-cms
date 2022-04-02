export default function DesertCards() {
  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center display-4 fw-bolder pt-5">
          Our Top Rated Deserts
        </h2>
        <div className="row d-flex justify-content-around py-3">
          <div className="col-10 col-md-5 p-4 border border-dark my-4">
            <h2>Homemade Chocolate Cake</h2>
            <p>Simply Delicious</p>
            <div className="row">
              <div className="col-6">
                <button className="btn btn-outline-light btn-dark  mt-3 py-2 px-5 z-top">
                  OUR MENU
                </button>
              </div>
              <div className="col-6 d-flex align-items-end justify-content-end">
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>

          <div className="col-10 col-md-5 p-4 border border-dark my-4">
            <h2>Homemade Chocolate Cake</h2>
            <p>Simply Delicious</p>
            <div className="row">
              <div className="col-6">
                <button className="btn btn-outline-light btn-dark  mt-3 py-2 px-5">
                  OUR MENU
                </button>
              </div>
              <div className="col-6 d-flex align-items-end justify-content-end">
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star pe-1"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
