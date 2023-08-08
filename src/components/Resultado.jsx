import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display:flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  background-color: #d07e0e;
  border-radius: 20px;
`;


const Imagen = styled.img`
    display:block;
    width:120px;

`

const Datos = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen crpto" />
      <div>
        <Precio>
          El precio es de: <span>{PRICE}</span>
        </Precio>
        <Datos>
          Precio mas alto del dia: <span>{HIGHDAY}</span>
        </Datos>
        <Datos>
          Precio mas bajo del dia: <span>{LOWDAY}</span>
        </Datos>
        <Datos>
          Variacion ultimas 24hr: <span>{CHANGEPCT24HOUR}</span>
        </Datos>
        <Datos>
          Ultima actualizacion: <span>{LASTUPDATE}</span>
        </Datos>
      </div>
    </Contenedor>
  );
};

export default Resultado;
