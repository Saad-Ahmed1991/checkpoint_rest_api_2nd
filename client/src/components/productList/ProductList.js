import React from "react";
import Product from "../product/Product";
import "./ProductList.css";

const ProductList = ({ products, addProd }) => {
  return (
    <div className="container">
      <div className="productList">
        {products.map((el) => (
          <Product key={el._id} el={el} addProd={addProd} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
