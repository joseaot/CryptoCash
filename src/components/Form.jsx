import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Error from "./Error";
import useSelectMonedas from "../Hook/useSelectMonedas";

import { monedas } from "../Data/monedas";

const Boton = styled.input`
  background-color: #fad928;
  border: none;
  width: 100%;
  padding: 10px;
  color: #0b110d;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  margin-top: 30px;

  &:hover {
    background-color: #fca608;
    cursor: pointer;
  }
`;

const Form = ({setMonedas}) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [cryptomoneda, SelectCryptomoneda] = useSelectMonedas(
    "Elige tu cryptoMoneda",
    cryptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCrypto = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });

      setCryptos(arrayCrypto);
    };
    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, cryptomoneda].includes("")) {
      setError(true);
      return;
    }

    setError(false)
    setMonedas({
      moneda,
      cryptomoneda
    })
  };

  return (
    <>
    {error && <Error>todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCryptomoneda />

        <Boton type="submit" value="cotizar" />
      </form>
    </>
  );
};

export default Form;
