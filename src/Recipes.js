export default function Recipe(props) {
  return (
    <div class="card mb-3 m-5">
      <div class="row g-0">
        <div class="col-md-4 d-flex">
          <img
            src={props.img}
            class="img-fluid rounded-start foodImg"
            alt={props.title}
          ></img>
        </div>
        <div class="col-md-8">
          <div class="card-body d-flex flex-column justify-content-between h-100">
            <h5 class="card-title card-header fw-bolder display-5 mb-3">
              {props.title}
            </h5>

            <p class="card-text">{props.instructions}</p>

            <p class="card-text d-flex justify-content-evenly">
              <small class="btn btn-outline-dark px-4 py-2 me-1">
                VIEW INGREDIENTS
              </small>
              <small class="btn btn-outline-dark px-5 py-2">VIEW RECIPE</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* pass down props and style how it will look */
