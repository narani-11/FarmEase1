import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="hero container">
        <h2>Welcome to FarmEase</h2>
        <p>
          Buy fresh produce directly from local farmers or sell what you grow.
        </p>

        <div className="role-buttons">
          <Link className="btn" to="/consumer">
            I'm a Consumer
          </Link>
          <Link className="btn btn-outline" to="/farmer">
            I'm a Farmer
          </Link>
        </div>
      </div>

      <div className="container features">
        <article className="card">
          <h3>Buy Produce</h3>
          <p>Search, filter and buy fresh produce.</p>
        </article>
        <article className="card">
          <h3>Sell Produce</h3>
          <p>Add product listings and manage your produce.</p>
        </article>
        <article className="card">
          <h3>Feedback</h3>
          <p>Share your experience so we can improve.</p>
        </article>
      </div>
    </section>
  );
};

export default Home;
