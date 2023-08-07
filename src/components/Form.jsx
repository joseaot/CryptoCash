import styled from '@emotion/styled'

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

    &:hover{
        background-color: #fca608;
        cursor: pointer;
    }
`

const Form = () => {
  return (
    <form>

        <Boton type='submit' value='cotizar'/>
    </form>
  )
}

export default Form