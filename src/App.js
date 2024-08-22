import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";
import CompareProducts from "./CompareProducts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const { Header, Content, Sider } = Layout;

function App() {
  return (
    <Router>
      <Layout style={{ height: "100vh" }}>
        {/* Navbar */}
        <Header style={{ background: "#fff", padding: 0 }}>
          <Navbar />
        </Header>

        <Layout>
          {/* Sidebar */}
          <Sider width={200} style={{ background: "#fff" }}>
            <Sidebar />
          </Sider>

          {/* Content Area */}
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
              <Routes>
                <Route path="/" element={<ProductDetails />} />
                <Route path="/compare" element={<CompareProducts />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
