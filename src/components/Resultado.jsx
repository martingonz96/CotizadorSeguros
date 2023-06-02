
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants'
import { useCallback, useMemo, useRef } from 'react'

function Resultado() {

    

    const { resultado, datos } = useCotizador()

    const { marca, plan, year } = datos

   const yearRef= useRef(year)

    const [marcaNombre] = useCallback(MARCAS.filter(m =>{
        return  m.id === Number(marca)
      }), [resultado]) 

    const [planNombre] = useCallback(PLANES.filter(p =>{
        return  p.id === Number(plan)
      }), [resultado]) 

    if ( resultado === 0) {
        return null
    }

  return (
    <div className=' text-center bg-gray-100 p-5 mt-5 shadow'>
        <h2 className=' font-black text-3xl text-gray-700'>
            Resumen
        </h2>
        <p className=' my-2'><span className=' font-bold'>Marca: </span>{marcaNombre.nombre}</p>
        <p className=' my-2'><span className=' font-bold'>Plan: </span>{planNombre.nombre}</p>
        <p className=' my-2'><span className=' font-bold'>Año del auto: </span>{yearRef.current}</p>
        <p className=' my-2 text-2xl'><span className=' font-bold'>Total Cotización: </span>{resultado}</p>
    </div>
  )
}

export default Resultado