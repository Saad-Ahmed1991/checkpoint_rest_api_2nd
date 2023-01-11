import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/productList/ProductList";
import { useEffect, useState } from "react";
import axios from "axios";
import AddProduct from "./components/addProduct/AddProduct";
import EditProduct from "./components/editProduct/EditProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [newProd, setnewProd] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/product/`);
      setProducts(res.data);
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
  };
  const addProd = () => {
    setnewProd("hhh");
  };
  useEffect(() => {
    fetchData();
  }, [newProd]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductList products={products} addProd={addProd} />}
        />
        <Route path="/product/add" element={<AddProduct addProd={addProd} />} />
        <Route
          path="/product/update/:id"
          element={<EditProduct addProd={addProd} />}
        />
      </Routes>
    </div>
  );
}

export default App;
