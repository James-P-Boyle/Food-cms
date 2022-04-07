import { useNavigate } from "react-router-dom";

export default function VeganHome() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid bg-danger py-5 my-5">
        <div className="row d-flex flex-column text-center py-5 align-items-center">
          <div className="col-8 text-white">
            <h1 className="display-3 my-5">Vegan Recipes</h1>
            <p className="my-5 lead">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A cum
              veritatis ex animi? Eveniet voluptatibus incidunt ea sequi, porro
              nostrum voluptates commodi similique! Quo aspernatur neque nisi
              expedita doloremque similique eveniet! Optio repellat quia
              voluptatem est id sint. Earum, nihil?
            </p>
            <button
              onClick={() => {
                navigate(`/vegan`);
              }}
              className="btn btn-outline-light btn-dark  mt-3 py-2 px-5 z-top"
            >
              Discover Our Recipes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
