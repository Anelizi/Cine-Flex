import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SessionDate from "../../components/SessionDate";

export default function SessionsPage() {
  const [dates, setDates] = useState([]);
  const { idFilme } = useParams();

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;
    const promise = axios.get(url);

    promise.then((res) => {
      setDates(res.data);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (dates.length === 0) {
    return (
      <Image src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
    );
  }

  return (
    <PageContainer>
      Selecione o horário
      <div>
        {dates.days.map((d) => (
          <SessionDate key={d.id} days={d} />
        ))}
      </div>
      <FooterContainer>
        <div>
          <img src={dates.posterURL} alt={dates.title} />
        </div>
        <div>
          <p>{dates.title}</p>
        </div>
      </FooterContainer>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 24px;
  text-align: center;
  color: #293845;
  margin-top: 30px;
  padding-bottom: 120px;
  padding-top: 70px;
  div {
    margin-top: 20px;
  }
`;
const FooterContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #c3cfd9;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  div:nth-child(1) {
    box-shadow: 0px 2px 4px 2px #0000001a;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 12px;
    img {
      width: 50px;
      height: 70px;
      padding: 8px;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    p {
      text-align: left;
      &:nth-child(2) {
        margin-top: 10px;
      }
    }
  }
`;
const Image = styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
