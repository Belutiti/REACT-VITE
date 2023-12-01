import React, { useState } from "react";
import { useContextGlobal } from "../utils/global.context"

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

  const {state} = useContextGlobal();

  const formStyle = state.theme ? {
    backgroundColor: 'rgba(0, 0, 0, 0.345)'
  } : {
    backgroundColor: 'rgba(255, 255, 255, 0.19)'
  }

  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(usuario.email);
  };

  const handleNombreChange = (e) => {
    setUsuario({ ...usuario, nombre: e.target.value.trimStart() });
  };

  const handleEmailChange = (e) => {
    setUsuario({ ...usuario, email: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuario.nombre.length >= 5 && validateEmail()) {
      setShow(true);
      setError(false)
    } else {
      setError(true);
      setShow(false)
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h1 className='form-title'>Want to know more?</h1>
        <p>Send us your questions and we will contact you</p>
        <div className="input-container">
          <input
            type="text"
            id="name"
            value={usuario.nombre}
            placeholder="Escriba su nombre"
            onChange={handleNombreChange}
          />
          <input
            id="email"
            type="email"
            value={usuario.email}
            placeholder="Escriba su email"
            onChange={handleEmailChange}
          />
        </div>
        <button className="submit">Enviar</button>
      </form>
      {show ? <h4>Gracias {usuario.nombre}, te contactaremos cuanto antes vía mail</h4> : null}
      {error && <h4>Por favor verifique su información nuevamente</h4>}
    </>
  );
};

export default Form;
