import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [imagem, setImagem] = useState([]);

  useEffect(() => {
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(url);

    promise.then((res) => {
      setImagem(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

//   if (imagem.length === 0){
//     return <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"/>
//   }

  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {imagem.map((i) => (
          <MovieContainer key={i.id}>
            <Link to="">
              <img src={i.posterURL} alt="poster" />
            </Link>
          </MovieContainer>
        ))}
      </ListContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-top: 70px;
`;
const ListContainer = styled.div`
  width: 330px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 10px;
`;
const MovieContainer = styled.div`
  width: 145px;
  height: 210px;
  box-shadow: 0px 2px 4px 2px #0000001a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  img {
    width: 130px;
    height: 190px;
  }
`;
