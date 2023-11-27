import React, { useContext } from 'react'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { ContextGlobal } from '../utils/global.context'

const Navbar = () => {
const {theme}= useContext(ContextGlobal)
  return (
    <nav className={theme ? 'estiloClaro' : 'estiloOscuro'}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <ThemeToggle />
    </nav>
  )
}

export default Navbar