import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const EditProduct = ({ addProd }) => {
  const [product, setProduct] = useState();
  const [oldProduct, setOldProduct] = useState();
  const navigate = useNavigate();
  const obj = useParams();
  const getProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/product/update/${obj.id}`
      );
      setOldProduct(res.data);
      console.log("old product", res.data);
    } catch (error) {
      console.log(error);
    }
  };
  const updateProduct = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/product/update/${obj.id}`,
        product
      );
      console.log("updated");
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpdate = () => {
    updateProduct();
    setProduct({});
    setOldProduct({});
    addProd();
    navigate("/");
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <>
        <h1>Update a product</h1>
        <Row>
          <Form.Label column lg={2}>
            Product Name:
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="{oldProduct.name}"
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            Price:
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="{oldProduct.price}"
              onChange={(e) =>
                setProduct({ ...product, price: e.target.value })
              }
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            Description:
          </Form.Label>
          <Col>
            <Form.Control
              type="text"
              placeholder="{oldProduct.description}"
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Form.Label column lg={2}>
            Categories:
          </Form.Label>
          <Col>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
            >
              <option value="" disabled defaultValue={""}>
                Categories
              </option>
              <option value="electronics">Electronics</option>
              <option value="gaming">Gaming</option>
              <option value="food">Food</option>
              <option value="laptop">Laptop</option>
              <option value="other">Other</option>
            </Form.Select>
          </Col>
        </Row>
        <br />
        <Button
          variant="primary"
          size="lg"
          onClick={() => {
            handleUpdate();
          }}
        >
          Update Product
        </Button>
      </>
    </div>
  );
};

export default EditProduct;
/*
const [product, setProduct] = useState([]);
const obj = useParams();
console.log("obj", obj);
try {
  const res = await axios.get(
    `http://localhost:5000/api/product/update/${obj.id}`
  );
} catch (error) {
  console.log(error);
}
*/
