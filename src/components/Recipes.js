import { useNavigate } from "react-router-dom";

export default function Recipes(props) {
  const navigate = useNavigate();
  return (
    
    
      <div className="bottom-pink-border col-sm-5 col-md-3 mx-1 my-5 p-2 card card-custom shadow-lg">
        
        <img src={props.img} className="img-fluid" alt={props.title}></img>
        <div className="card-body d-flex flex-column text-center">
          <h5 className="">{props.title}</h5>
        </div>
        <div className="text-center">
          <small
            className="btn btn-outline-dark py-1 px-5"
            onClick={() => {
              navigate(`/recipe/${props.id}`);
            }}
          >
            VIEW RECIPE
          </small>
        </div>
      </div>
  );
}
