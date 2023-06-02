export const MARCAS = [
    {
        id: 1,
        nombre: "Europeo"
    },
    {
        id: 2,
        nombre: "Americano"
    },
    {
        id: 3,
        nombre: "Asiatico"
    }
]

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from (new Array(20), (value, i) => YEARMAX-i)

export const PLANES =[
    { id: 1, nombre: "básico"},
    { id: 2, nombre: "completo"}
]