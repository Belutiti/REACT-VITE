import { useContextGlobal } from '../Components/utils/global.context'

const Detail = () => {
 const {state}= useContextGlobal()
 console.log("ID:", id);

  return (
    <div>
      <h1>Detail Dentist {state.detaiList.id} </h1>
      <h2>Nombre: {state.detaiList.name}</h2>
      <h3>Email: {state.detaiList.email}</h3>
      <h3>Telefono: {state.detaiList.phone}</h3>
      <h3>Sitio: {state.detaiList.website}</h3>
    </div>
  )
}

export default Detail