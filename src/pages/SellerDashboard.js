import React from "react";
import Header from "../components/Header";
import "./SellerDashboard.css";

function SellerDashboard() {
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h2>Painel do Vendedor</h2>
        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Total de Vendas</h3>
            <p>R$ 5.230,00</p>
          </div>
          <div className="stat-card">
            <h3>Produtos Vendidos</h3>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h3>Avaliação Média</h3>
            <p>4.8/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
