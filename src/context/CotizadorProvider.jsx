import { createContext, useState } from "react";
import { obtenerDiferenciaYear, calcularMarca, calcularPlan, formatearDinero } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) =>{

    const [datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    })

const handleChangeDatos = (e) => {
    setDatos({
        ...datos,
        [e.target.name] : e.target.value
    })
}

const [error, setError] = useState('')

const [resultado, setResultado] = useState(0)

const [cargando, setCargando] = useState(false)

const cotizarSeguro = () => {
    //Base
    let resultado = 2000

    //Diferencia de year
    const diferencia = obtenerDiferenciaYear(datos.year)

    //Hay que restar 3% cada year
    resultado -= ((diferencia * 3) * resultado) / 100

    //Americano 15%
    //Europeo 30%
    //Asiatico 5%

    resultado *= calcularMarca(datos.marca)

    //Basico 20%
    //Completo 50%
    
    resultado *= calcularPlan(datos.plan)

    resultado = formatearDinero(resultado)

    setCargando(true)

    setTimeout(()=>{
        setResultado(resultado)
        setCargando(false)
    }, 3000)

}





return (
    <CotizadorContext.Provider
    value={{
        datos,
        handleChangeDatos,
        setError,
        error,
        cotizarSeguro,
        resultado,
        cargando
    }}>
       {children}
    </CotizadorContext.Provider>
)
}

export {
    CotizadorProvider
}

export default CotizadorContext