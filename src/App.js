import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import { client } from "./client";
import Recipe from "./Recipe";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import List from "./List";
import Login from "./Login";
import Register from "./Register";

function App() {
  //state to store our recieved recipes
  const [data, setData] = useState([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "foodRecipes",
      })
      .then((res) => setData(res.items))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home dataObj={data} />} />
        <Route path="/recipes" element={<List dataObj={data} />} />
        <Route path="/recipe/:recipeid" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
