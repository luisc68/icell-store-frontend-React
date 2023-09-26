import React, { useState, useEffect } from 'react';
import './navbar.css';
import './App.css';
import './modal.css';
import cart from './img/cart.png';
import Modal from './Modal';
import PaymentForm from './PaymentForm';
import trash from './img/trash.png';

const Navbar = ({ carrito, setCarrito }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [totalCarrito, setTotalCarrito] = useState(0);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openPaymentModal = () => setPaymentModalOpen(true);
  const closePaymentModal = () => setPaymentModalOpen(false);

  useEffect(() => {
    calcularTotalCarrito();
  }, [carrito]);

  const calcularTotalCarrito = () => {
    let total = 0;
    carrito.forEach((producto) => {
      total += producto.precio;
    });
    setTotalCarrito(total.toFixed(2));
  };

  const handlePagarClick = () => {
    if (carrito.length !== 0) {
      closeModal();
      openPaymentModal();
    }
  };

  const handleCheckout = (paymentData) => {
    console.log('Datos de pago:', paymentData);
    setCarrito([]);
    alert('¡Pedido realizado con éxito!');
    closePaymentModal();
  };

  const limpiarCarrito = () => {
    setCarrito([]);
    closeModal();
  };

  return (
    <div className="main-header">
      <a className="logo-header">
        <span className="site-name">iCell</span>
        <span className="site-name">Store / Venta de Aifons</span>
      </a>
      <nav>
        <ul className="classul">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contactanos</a></li>
          <div>
            <button onClick={openModal} className="image-button">
              <img src={cart} alt="Carrito de Compras" />
              <span id="item-count">{carrito.length}</span>
            </button>
          </div>
        </ul>
      </nav>
      <Modal isOpen={modalOpen} onClose={closeModal}>
        <h2 className="cartitle">Carrito de Compras</h2>
        {carrito.length === 0 ? (
          <>
            <p>Carrito vacío</p>
            <button className="button" onClick={closeModal}>
              &times;
            </button>
          </>
        ) : (
          <>
            <ul id="cart-items" className="cart-items">
              <p className="price-cart">Precio: </p>
              {carrito.map((producto) => (
                <li key={producto.id}>
                  <img src={producto.imagen} alt={producto.nombre} />
                  <div>
                    <p>{producto.nombre}</p>
                    <p className="price-cart-price">${producto.precio}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="total">Total: ${totalCarrito}</p>
            <button onClick={limpiarCarrito} className="image-trash">
              <img src={trash} alt="Carrito de Compras" />
            </button>

            <button className="button" onClick={closeModal}>
              &times;
            </button>
            <button
              className="checkout"
              onClick={handlePagarClick}
              disabled={carrito.length === 0}
            >
              Pagar
            </button>
          </>
        )}
      </Modal>
      <Modal isOpen={paymentModalOpen} onClose={closePaymentModal}>
        <h2 className="payment-title">Método de Pago</h2>
        <button className="button" onClick={closePaymentModal}>
          &times;
        </button>
        <PaymentForm handleCheckout={handleCheckout} />
      </Modal>
    </div>
  );
};

export default Navbar;
