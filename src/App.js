import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { client } from "./client";
import Recipe from "./components/Recipe";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import List from "./components/List";
import Login from "./components/Login";
import Register from "./components/Register";
import Vegan from "./components/Vegan";

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
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<List dataObj={data} />} />
        <Route path="/recipe/:recipeid" element={<Recipe />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/vegan" element={<Vegan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
