import Container from "react-bootstrap/Container";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import TableUsers from "./components/TableUser";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div className="app-container">
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<TableUsers />} />
          </Routes>
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
