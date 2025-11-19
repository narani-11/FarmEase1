import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FarmerDashboard from "./components/FarmerDashboard";
import ConsumerBrowse from "./components/ConsumerBrowse";
import BuyForm from "./components/BuyForm";
import Feedback from "./components/Feedback";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmer" element={<FarmerDashboard />} />
          <Route path="/consumer" element={<ConsumerBrowse />} />
          <Route path="/buy" element={<BuyForm />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
