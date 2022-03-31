import { useNavigate } from "react-router-dom";

export default function Recipes(props) {
  const navigate = useNavigate();
  return (
    <div className="card mb-3 m-5">
      <div className="row g-0">
        <div className="col-md-6 d-flex">
          <img
            src={props.img}
            className="img-fluid rounded-start foodImg"
            alt={props.title}
          ></img>
        </div>
        <div className="col-md-6">
          <div className="card-body d-flex flex-column justify-content-between h-100">
            <h5 className="card-title card-header fw-bolder display-5 mb-3">
              {props.title}
            </h5>

            <p className="card-text">{props.catchPhrase}</p>

            <p className="card-text d-flex justify-content-evenly">
              <small
                className="btn btn-outline-dark px-4 py-2"
                onClick={() => {
                  navigate(`/recipe/${props.id}`);
                }}
              >
                VIEW INGREDIENTS
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* pass down props and style how it will look */
