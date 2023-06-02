import React from 'react'
import Formulario from './Formulario'
import useCotizador from '../hooks/useCotizador'
import Spinner from './Spinner'
import Resultado from './Resultado'

export default function AppSeguro() {

  const { resultado, cargando } = useCotizador()


  return (
    <>
    <header className=' my-10'>
     <h1 className=' text-white text-4xl text-center font-black'>Cotizador de Seguros de Auto</h1>
    </header>
    <main className=' bg-white md:w-2/3 lg:w-2/4 mx-auto shadow-lg rounded-lg p-10'>
     <Formulario/>
     {cargando ? <Spinner/> : <Resultado/>}
    </main>
    </>
    )
}
