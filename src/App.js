import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

function App() {
  //state to store our recieved recipes
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://cdn.contentful.com/spaces/ce1j5cwh25ny/entries?access_token=p2VPCU3amlJq8ICZWSVPhFMzfPoQN6RHL5Fp6E7mpf8`
      ) //the url we need to get the data
      .then((res) => {
        setRecipes(res.data.includes.Asset); //console.log the response, if successful setRecipes state
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <List recipes={recipes} />
    </div>
  );
}

export default App;
