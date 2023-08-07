import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Form from './components/Form'
import logo from './img/logoCrypto.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
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


  return (
    <>
      <Logo src={logo} alt='logo'/>
      <Contenedor>
        <Imagen src={ImagenCripto} alt='Imagenes criptomonedas'/>


        <div>
          <Heading>Cotiza Criptomoneda al instante</Heading>
          <Form/>
        </div>


      </Contenedor>
    </>
  )
}

export default App
