import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddProduct({ addProd }) {
  const [newProduct, setNewProduct] = useState({});
  const navigate = useNavigate();

  const AddNewProduct = async () => {
    try {
      await axios.post(`http://localhost:5000/api/product/add`, newProduct);
      console.log("data added");
    } catch (error) {
      console.log("error", error);
    }
  };
  const handleAdd = () => {
    AddNewProduct();
    addProd();
    console.log(newProduct);
    setNewProduct({});
    navigate("/");
  };

  return (
    <>
      <h1>Add a new product</h1>
      <Row>
        <Form.Label column lg={2}>
          Product Name:
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            placeholder="Product Name"
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
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
            placeholder="Price"
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
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
            placeholder="Description"
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
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
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          >
            <option value="" disabled selected>
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
          handleAdd();
        }}
      >
        Add New Product
      </Button>
    </>
  );
}

export default AddProduct;
