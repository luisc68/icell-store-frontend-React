import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import './navbar.css';

const PaymentForm = ({ handleCheckout }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [pais, setPais] = useState('');
  const [provincia, setProvincia] = useState('');
  const [telefono, setTelefono] = useState('');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaExpiracion, setFechaExpiracion] = useState('');
  const [nombreTarjeta, setNombreTarjeta] = useState('');
  const [codigoSeguridad, setCodigoSeguridad] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes hacer lo que necesites con los datos de pago
    // Por ejemplo, enviarlos a un servidor o procesarlos localmente
    const paymentData = {
      nombre,
      apellido,
      direccion,
      pais,
      provincia,
      telefono,
      numeroTarjeta,
      fechaExpiracion,
      nombreTarjeta,
      codigoSeguridad,
    };
    // Restablecer los campos del formulario después de enviar los datos
    setNombre('');
    setApellido('');
    setDireccion('');
    setPais('');
    setProvincia('');
    setTelefono('');
    setNumeroTarjeta('');
    setFechaExpiracion('');
    setNombreTarjeta('');
    setCodigoSeguridad('');
    // Llamar a la función handleCheckout pasando los datos de pago
    handleCheckout(paymentData);
  };

  return (
    <form onSubmit={handleSubmit}>
            <div>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>Card Number: </Form.Label>
          <Form.Control 
          type="text"
          value={numeroTarjeta}
          onChange={(e) => setNumeroTarjeta(e.target.value)}
          required
          placeholder="xxxx-xxxx-xxxx-xxxx"/>
          </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>Exp. Date: </Form.Label>
          <Form.Control 
          type="text"
          value={fechaExpiracion}
          onChange={(e) => setFechaExpiracion(e.target.value)}
          required
          placeholder="xx / xxxx"/>
          </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>Card Name: </Form.Label>
          <Form.Control 
          type="text"
          value={nombreTarjeta}
          onChange={(e) => setNombreTarjeta(e.target.value)}
          required
          placeholder="Nombre Apellido"/>
          </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>CCV: </Form.Label>
          <Form.Control 
          type="text"
          value={codigoSeguridad}
          onChange={(e) => setCodigoSeguridad(e.target.value)}
          required
          placeholder="xxx"/>
          </Form.Group>
      </div>
      <h2 className='payment-title'>Información de Envio</h2>
      <div className='payment'>
        <label>Nombre: </label>
        <Form.Control placeholder="Nombre"
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className='payment'>
        <label>Apellido: </label>
        <Form.Control placeholder="Apellido"
          type="text"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
      </div>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>Dirección: </Form.Label>
          <Form.Control 
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          required
          placeholder="300 mts norte"/>
          </Form.Group>
      <div>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>País: </Form.Label>
          <Form.Control 
          type="text"
          value={pais}
          onChange={(e) => setPais(e.target.value)}
          required
          placeholder="Costa Rica"/>
          </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>Provincia: </Form.Label>
          <Form.Control 
          type="text"
          value={provincia}
          onChange={(e) => setProvincia(e.target.value)}
          required
          placeholder="Alajuela"/>
          </Form.Group>
      </div>
      <div>
      <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label className='payment'>Teléfono: </Form.Label>
          <Form.Control 
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
          placeholder="+506-xxxx-xxxx"/>
          </Form.Group>
      </div>

      <button className="checkout" type="submit">Checkout</button>
    </form>
  );
};

export default PaymentForm;
