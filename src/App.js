import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import List from "./List";
import { client } from "./client";
import Recipe from "./Recipe";

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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<List dataObj={data} />} />
        <Route path="/recipe/:recipeid" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default App;
