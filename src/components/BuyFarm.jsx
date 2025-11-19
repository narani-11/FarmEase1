import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const pre = location.state?.product || {};
  const [form, setForm] = useState({
    name: "",
    email: "",
    productName: pre.name || "",
    quantity: 1,
    address: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // In a real app: send to backend. Here we just show a confirmation.
    alert("Order placed! Thanks. (Demo: no payment integration)");
    // after purchase, redirect to feedback
    navigate("/feedback");
  }

  return (
    <section className="buy container">
      <h2>Buy Product</h2>
      <form className="small-form" onSubmit={handleSubmit}>
        <label>
          Your name
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Product
          <input
            name="productName"
            value={form.productName}
            onChange={handleChange}
          />
        </label>

        <label>
          Quantity
          <input
            name="quantity"
            type="number"
            min="1"
            value={form.quantity}
            onChange={handleChange}
          />
        </label>

        <label>
          Shipping address
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Place Order</button>
      </form>
    </section>
  );
};

export default BuyForm;
