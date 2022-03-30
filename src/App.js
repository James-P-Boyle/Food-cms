import "./App.css";
import { useEffect, useState } from "react";

import List from "./List";
import { client } from "./client";

function App() {
  //state to store our recieved recipes
  const [data, setData] = useState([]);
  /*   const [cleanData, setCleanData] = useState([]); */

  useEffect(() => {
    client
      .getEntries()
      .then((res) => setData(res.items))
      .catch((error) => console.log(error));
  }, []);

  /* const cleanUpData = (data) => {
    const cleanData = data.map((dataFields) => {
      const { sys, fields } = dataFields;
      const { id } = sys;
      const title = fields.title;
      const ingredients = fields.ingredients;
      const instructions = fields.instructions;
      const foodImage = fields.image.fields.file.url;
      const updatedData = {
        id,
        title,
        ingredients,
        instructions,
        foodImage,
      };
      return updatedData;
    });
  }; */

  return (
    <div className="App">
      <List dataObj={data} />
    </div>
  );
}

export default App;
