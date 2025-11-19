import React, { useState, useMemo } from "react";
import productsData from "../data/products";
import ProductCard from "./ProductCard";

const ConsumerBrowse = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // compute unique categories
  const categories = useMemo(() => {
    const set = new Set(productsData.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    return productsData.filter((p) => {
      const matchQ = p.name.toLowerCase().includes(query.toLowerCase());
      const matchC = category === "All" ? true : p.category === category;
      return matchQ && matchC;
    });
  }, [query, category]);

  return (
    <section className="consumer container">
      <h2>Browse Produce</h2>

      <div className="search-row">
        <input
          type="text"
          placeholder="Search products (e.g., tomatoes)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filtered.length ? (
          filtered.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>No products found for your search.</p>
        )}
      </div>
    </section>
  );
};

export default ConsumerBrowse;
