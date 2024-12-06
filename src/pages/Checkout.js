import React, { useState } from "react";
import Header from "../components/Header";
import "./Checkout.css";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePayment = () => {
    alert(`Pagamento realizado com ${paymentMethod}!`);
  };

  return (
    <div>
      <Header />
      <div className="checkout-container">
        <h2>Finalizar Compra</h2>
        <div className="payment-options">
          <button onClick={() => setPaymentMethod("Cartão de Crédito")}>
            Cartão de Crédito
          </button>
          <button onClick={() => setPaymentMethod("Boleto Bancário")}>
            Boleto Bancário
          </button>
          <button onClick={() => setPaymentMethod("PayPal")}>PayPal</button>
        </div>
        {paymentMethod && (
          <div className="confirmation">
            <p>Método selecionado: {paymentMethod}</p>
            <button className="confirm-button" onClick={handlePayment}>
              Confirmar Pagamento
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
