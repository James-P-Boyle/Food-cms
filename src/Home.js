import List from "./List";

export default function Home(props) {
  console.log(props.dataObj);
  return (
    <div className="row mt-1">
      <div className="col-12">
        <div className="container-fluid hero">
          <div className="card bg-primary text-white border-0 mt-2">
            <img
              src=""
              className="card-img hero-img"
              alt="Background Image"
            ></img>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <div className="container">
                <h5 className="card-title display-3 fw-bolder mb-0">
                  GREAT RECIPES
                </h5>
                <p className="card-text lead fs-2">MADE EASY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <List dataObj={props.dataObj} />
    </div>
  );
}
