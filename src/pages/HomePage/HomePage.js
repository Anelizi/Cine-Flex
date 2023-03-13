import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeMovie from "../../components/HomeMovie";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/movies";
    const promise = axios.get(url);

    promise.then((res) => {
      setMovies(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (movies.length === 0) {
    return (
      <Image src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
    );
  }
  return (
    <PageContainer>
      Selecione o filme
      <ListContainer>
        {movies.map((m) => (
          <Link to={`/sessoes/${m.id}`} key={m.id}>
            <HomeMovie data-test="movie" movies={m.posterURL} title={m.title}/>
          </Link>
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
const Image = styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
