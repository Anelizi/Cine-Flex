import styled from "styled-components";
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [cpf, setCPF] = useState("");
  const [movie, setMovie] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [numberID, setNumberID] = useState([]);

  return (
    <BrowserRouter>
      <NavContainer>CINEFLEX</NavContainer>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <SeatsPage
              name={name}
              setName={setName}
              cpf={cpf}
              setCPF={setCPF}
              setMovie={setMovie}
              setDate={setDate}
              setTime={setTime}
              setNumberID={setNumberID}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <SuccessPage
              name={name}
              cpf={cpf}
              movie={movie}
              date={date}
              time={time}
              numberID={numberID}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
  color: #e8833a;
  font-family: "Roboto", sans-serif;
  font-size: 34px;
  position: fixed;
  top: 0;
  a {
    text-decoration: none;
    color: #e8833a;
  }
`;
