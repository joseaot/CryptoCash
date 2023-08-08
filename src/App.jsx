import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Form from './components/Form'
import bb from './img/bbremove.png'
import rueda from './img/ruedasf.png'


const Rueda = styled.img`
  width: 20%; /* Cambiar el ancho a un porcentaje */
  display: flex;
  margin-top: 5%; /* Cambiar el margen superior a un porcentaje */
  margin-left: 30%; /* Cambiar el margen izquierdo a un porcentaje */
  transition: transform 0.3s;
  animation: rotate 7s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 600px) {
    width: 20%; /* Reducir el ancho en dispositivos móviles */
    margin-top: 10px; /* Ajustar el margen superior en dispositivos móviles */
    margin-left: 0; /* No es necesario ajustar el margen izquierdo en dispositivos móviles */
  }
`;


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


// const Logo = styled.img `
//   width:350px;
//   display:flex;
//   margin: -80px auto -80px;
//   @media (max-width: 600px) {
//     width: 300px; /* Reducir el ancho del logo en dispositivos móviles */
//     margin-top: 1px; /* Ajustar el margen superior en dispositivos móviles */
//   }
// `


const Titulo = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column; /* Por defecto, se mostrará uno debajo del otro */

  @media (min-width: 1000px) {
    flex-direction: row; /* En pantallas de computadora, se mostrarán uno al lado del otro */
  }
`;

const Letra = styled.h1`
  margin-top: 100px;
  color: #fad928;
  font-family: lato, sans-serif;
  font-weight: 900;
  font-size: 60px;

  @media (min-width: 1000px) {
    display: flex;
    margin-right: 500px;
  }
  
  @media (max-width: 999px) {
    text-align: center;
    margin-top: 0;
    font-size: 40px; /* Ajusta el tamaño de la letra para dispositivos móviles */
  }
`;

const Bb = styled.img`
  width:9%;
  left:39%;
  top:18%;
  position: absolute;

  @media (max-width: 600px){
    top:6%;
    left:46%;
  }
`



function App() {

  


  return (
    <>
      <Titulo>
        <Rueda src={rueda} alt='rueda'/>
        <Bb src={bb} alt='bb'/>
        <Letra>Crypto Cash</Letra>
      </Titulo>
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
