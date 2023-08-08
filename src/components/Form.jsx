import styled from '@emotion/styled'
import useSelectMonedas from '../Hook/useSelectMonedas'

import { monedas } from '../Data/monedas'



const Boton = styled.input`
    background-color: #fad928;
    border: none;
    width:100%;
    padding: 10px;
    color: #0b110d;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    border-radius: 10px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #fca608;
        cursor: pointer;
    }
`

const Form = () => {



  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas);


  return (
    <form>
        <SelectMonedas/>

        {moneda}

        <Boton type='submit' value='cotizar'/>
    </form>
  )
}

export default Form