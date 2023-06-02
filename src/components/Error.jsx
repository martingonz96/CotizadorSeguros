import useCotizador from '../hooks/useCotizador'



function Error() {

    const { error } = useCotizador()

  return (
    <div>
      <p className=' text-center border bg-red-100 border-red-600 p-3  text-red-400'>{error}</p>
    </div>
  )
}

export default Error