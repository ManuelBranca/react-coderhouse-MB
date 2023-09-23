import React from 'react'
import Gamer from '../../img/gamer.webp';
import './Main.css'

const Main = () => {
  return (
    <>
        <div className='container mt-5 landing'>
        <div className='row'>
          <div className='col-5 titulo-y-subtitulo'>
            <h1 className='titulo'>Mi tienda</h1>
            <h2 className='subtitulo'>Más de 10 años brindando los mejores servicios informáticos.</h2>
          </div>
          <div className='col-5'>
            <img src={Gamer} alt={"foto portada"} className='principal-img' />
          </div>
        </div>
      </div>
      <div className='container-fluid'>
      </div>
    </>
  )
}

export default Main