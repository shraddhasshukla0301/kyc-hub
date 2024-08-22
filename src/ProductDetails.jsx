import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [compareList, setCompareList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products from the API
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const handleCompare = (product) => {
    if (
      compareList.length < 4 &&
      !compareList.find((p) => p.id === product.id)
    ) {
      setCompareList([...compareList, product]);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    { title: "Description", dataIndex: "description", key: "description" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    { title: "Brand", dataIndex: "brand", key: "brand" },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Image",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (text, record) => (
        <img src={record.thumbnail} alt="thumbnail" width={50} />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          disabled={compareList.find((p) => p.id === record.id)}
          onClick={() => handleCompare(record)}
        >
          {compareList.find((p) => p.id === record.id) ? "Added" : "Compare"}
        </Button>
      ),
    },
  ];

  return (
    <div>
      <h1>Product Details</h1>
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />

      {compareList.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <Button
            type="primary"
            onClick={() => navigate("/compare", { state: { compareList } })}
          >
            Compare Selected Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
