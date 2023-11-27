import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const {id}= useParams()
  const urlDinamico=`https://jsonplaceholder.typicode.com/users/${id}`
  const [dentistasId, setDentistasId]= useState({})

  useEffect(()=>{
    const apiDentistaId=()=>{
      axios.get(urlDinamico)
      .then((response)=>setDentistasId(response.data))
    }
    apiDentistaId()
  }, [])


  return (
    <>
      <h1>Detail Dentist {id} </h1>
      <h2>Nombre: {dentistasId.name}</h2>
      <h3>Email: {dentistasId.email}</h3>
      <h3>Telefono: {dentistasId.phone}</h3>
      <h3>Sitio: {dentistasId.website}</h3>
    </>
  )
}

export default Detail