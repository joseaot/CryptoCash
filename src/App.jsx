import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Form from './components/Form'
import logo from './img/CC.png'
import { useEffect, useState } from 'react'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'



const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  margin-bottom: 100px;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width:400px;
  width:80%;
  margin: 100px auto 0 auto;
  display:block; 
`


const Heading = styled.h1`
  font-family: lato, sand-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width:100px;
    height: 6px;
    background-color: #fad928;
    display:block;
    margin: 10px auto 0 auto;
    border-radius: 20px;
  }
`


const Logo = styled.img `
  width:350px;
  display:flex;
  margin: -80px auto -80px;
  @media (max-width: 600px) {
    width: 300px; /* Reducir el ancho del logo en dispositivos móviles */
    margin-top: 1px; /* Ajustar el margen superior en dispositivos móviles */
  }
`


function App() {

  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect (() => {
    if(Object.keys(monedas).length>0){
      const {moneda, cryptomoneda} = monedas

      
      const cotizarCrypto = async () =>{
        setCargando(true)
        setResultado({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[cryptomoneda][moneda])

        setCargando(false)
      }
      cotizarCrypto()
    }
  },[monedas])


  return (
    <>
      <Logo src={logo} alt='logo'/>
      <Contenedor>
        <Imagen src={ImagenCripto} alt='Imagenes criptomonedas'/>


        <div>
          <Heading>Cotiza Criptomoneda al instante</Heading>
          <Form
            setMonedas={setMonedas}
          />
          {cargando && <Spinner/>}
          {resultado.PRICE && <Resultado resultado={resultado}/>}
        </div>


      </Contenedor>
    </>
  )
}

export default App
