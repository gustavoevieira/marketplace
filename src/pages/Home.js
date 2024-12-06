import React, { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import products from "../data/products";
import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className="home-container">
        <SearchBar onSearch={setSearchTerm} />
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="no-results">Nenhum produto encontrado.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
