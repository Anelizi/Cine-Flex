import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import SeatForm from "../../components/SeatForm";
import SeatItem from "../../components/SeatItem";

export default function SeatsPage({
  name,
  setName,
  cpf,
  setCPF,
  setMovie,
  setDate,
  setTime,
  setNumberID,
}) {
  const [seat, setSeat] = useState([]);
  const [place, setPlace] = useState([]);
  const { idSessao } = useParams();

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;
    const promise = axios.get(url);

    promise.then((res) => {
      setSeat(res.data);
      setMovie(res.data.movie.title);
      setDate(res.data.day.date);
      setTime(res.data.name);
    });

    promise.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (seat.length === 0) {
    return (
      <Image src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
    );
  }

  return (
    <PageContainer>
      Selecione o(s) assento(s)
      <SeatsContainer>
        {seat.seats.map((s) => (
          <SeatItem
            key={s.id}
            id={s.id}
            place={place}
            setPlace={setPlace}
            number={s.name}
            isAvailable={s.isAvailable}
          />
        ))}
      </SeatsContainer>
      <CaptionContainer>
        <CaptionItem>
          <CaptionCircle place={true} />
          Selecionado
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle />
          Disponível
        </CaptionItem>
        <CaptionItem>
          <CaptionCircle place={false} />
          Indisponível
        </CaptionItem>
      </CaptionContainer>
      <SeatForm
        setNumberID={setNumberID}
        place={place}
        name={name}
        setName={setName}
        cpf={cpf}
        setCPF={setCPF}
      />
      <FooterContainer>
        <div>
          <img src={seat.movie.posterURL} alt="poster" />
        </div>
        <div>
          <p>{seat.movie.title}</p>
          <p>
            {seat.day.weekday} - {seat.name}
          </p>
        </div>
      </FooterContainer>
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
  padding-bottom: 120px;
  padding-top: 70px;
`;
const SeatsContainer = styled.div`
  width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const CaptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  margin: 20px;
`;
const CaptionCircle = styled.div`
  border: 1px solid
    ${({ place }) =>
      place === true ? "#0E7D71" : place === false ? "#F7C52B" : "#7B8B99"};
  background-color: ${({ place }) =>
    place === true ? "#1AAE9E" : place === false ? "#FBE192" : "#C3CFD9"};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
`;
const CaptionItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
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
