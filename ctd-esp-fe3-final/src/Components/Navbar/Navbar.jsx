import React from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <ThemeToggle />
    </nav>
  )
}

export default Navbar