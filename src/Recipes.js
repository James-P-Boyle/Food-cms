export default function Recipe(props) {
  return (
    <div className="listItem">
      <div className="listItemText">
        <h1>{props.title}</h1>
        <p>{props.ingredients}</p>
        <p>{props.instructions}</p>
      </div>
    </div>
  );
}

/* pass down props and style how it will look */
