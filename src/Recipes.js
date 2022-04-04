import { useNavigate } from "react-router-dom";

export default function Recipes(props) {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <div className="container-sm">
        <div className="row pt-5 pb-5">
          <div className="col-md-3 p-2 card card-custom border-0 shadow-lg">
            <img src={props.img} className="img-fluid" alt={props.title}></img>

            <div className="card-body d-flex flex-column text-center">
              <h5 className="">{props.title}</h5>
            </div>

            <div>
              <p className="card-text">
                <small
                  className="btn btn-outline-dark  py-1  d-flex justify-content-center"
                  onClick={() => {
                    navigate(`/recipe/${props.id}`);
                  }}
                >
                  VIEW RECIPE
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* pass down props and style how it will look */

{
  /* <div className="card mb-3 mx-auto m-5 card-custom border-0 shadow-lg"></div> */
}

{
  /* 
    </div>
    <div className="col-md-4 p-2">

    </div>
    <div className="col-md-4 p-2">

    </div>
    <div className="col-md-4 p-2">

    </div>
    <div className="col-md-4 p-2">

    </div>
    <div className="col-md-4 p-2">

    </div>
  </div>
</div> */
}

{
  /* <div className="row g-0">
          <div className="col-md-8 d-flex">
            <img src={props.img} className="img-fluid" alt={props.title}></img>
          </div>
          <div className="col-md-4">
            <div className="card-body d-flex flex-column justify-content-between h-100">
              <h5 className="card-title card-header fw-bolder display-5 mb-3 text-center">
                {props.title}
              </h5>

              <p className="card-text display-6 text-center">
                {props.catchPhrase}
              </p>

              <p className="card-text">
                <small
                  className="btn btn-outline-dark  py-3 d-flex justify-content-center"
                  onClick={() => {
                    navigate(`/recipe/${props.id}`);
                  }}
                >
                  VIEW RECIPE
                </small>
              </p>
            </div>
          </div>
        </div> */
}
