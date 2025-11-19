import React, { useState } from "react";
import sampleProducts from "../data/products";

const FarmerDashboard = () => {
  // local session state; not persistent (no backend)
  const [listings, setListings] = useState(sampleProducts);
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    unit: "kg",
    description: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleAdd(e) {
    e.preventDefault();
    const next = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price) || 0,
    };
    setListings((prev) => [next, ...prev]);
    setForm({ name: "", category: "", price: "", unit: "kg", description: "" });
  }

  return (
    <section className="farmer container">
      <h2>Farmer Dashboard</h2>
      <p>Add a new product (this demo stores it locally only):</p>

      <form className="small-form" onSubmit={handleAdd}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product name"
          required
        />
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category (e.g., Vegetable)"
          required
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price per unit (number)"
          required
        />
        <input
          name="unit"
          value={form.unit}
          onChange={handleChange}
          placeholder="Unit (e.g., kg)"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Short description"
        />
        <button type="submit">Add Product</button>
      </form>

      <h3>Your Listings</h3>
      <div className="list-grid">
        {listings.map((p) => (
          <div key={p.id} className="listing-card">
            <h4>{p.name}</h4>
            <p className="muted">
              {p.category} • ${p.price} / {p.unit}
            </p>
            <p className="small muted">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FarmerDashboard;
