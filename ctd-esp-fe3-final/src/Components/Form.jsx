import React, { useState } from "react";

const Form = () => {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
  });

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
          type="text"
          value={usuario.nombre}
          placeholder="Escriba su nombre"
          onChange={handleNombreChange}
        />
         <label>Email</label>
        <input
          type="text"
          value={usuario.email}
          placeholder="Escriba su email"
          onChange={handleEmailChange}
        />
        <button>Enviar</button>
      </form>
      {show ? <h1>Gracias {usuario.nombre}, te contactaremos cuanto antes vía mail</h1> : null}
      {error && <h4>Por favor verifique su información nuevamente</h4>}
    </div>
  );
};

export default Form;
