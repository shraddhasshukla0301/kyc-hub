import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Table } from "antd";

const CompareProducts = () => {
  const location = useLocation();
  const { compareList } = location.state || { compareList: [] };

  const compareColumns = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "Price", dataIndex: "price", key: "price" },
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
  ];

  return (
    <div>
      <h1>Compare Products</h1>

      {compareList.length === 0 ? (
        <p>No products selected for comparison.</p>
      ) : (
        <Table
          columns={compareColumns}
          dataSource={compareList}
          rowKey="id"
          pagination={false}
        />
      )}

      <div style={{ marginTop: "20px" }}>
        <Button
          type="primary"
          onClick={() => console.log("Add More products logic")}
        >
          Add More
        </Button>
      </div>
    </div>
  );
};

export default CompareProducts;
