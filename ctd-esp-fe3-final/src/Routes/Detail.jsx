import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
  const {id}= useParams()
  const urlDinamico=`https://jsonplaceholder.typicode.com/users/${id}`
  const [dentistasId, setDentistasId]= useState({})
  const {theme}=useContext(ContextGlobal)

  useEffect(()=>{
    const apiDentistaId=()=>{
      axios.get(urlDinamico)
      .then((response)=>setDentistasId(response.data))
    }
    apiDentistaId()
  }, [])


  return (
    <div className={theme ? 'estiloClaro' : 'estiloOscuro'}>
      <h1>Detail Dentist {id} </h1>
      <h2>Nombre: {dentistasId.name}</h2>
      <h3>Email: {dentistasId.email}</h3>
      <h3>Telefono: {dentistasId.phone}</h3>
      <h3>Sitio: {dentistasId.website}</h3>
    </div>
  )
}

export default Detail