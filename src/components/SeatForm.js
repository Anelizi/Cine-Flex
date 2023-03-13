import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SeatForm({ name, setName, cpf, setCPF, setNumberID, place }) {
  const navigate = useNavigate();

  function recerva(event) {
    event.preventDefault();

    if(place.length === 0){
        alert("escolha um assento")
    }else{
      

    let idss = [];
    let numberId =[];
    for(let i = 0; i < place.length; i++){
      idss.push(place[i].id)
      numberId.push(place[i].number)
    }
    setNumberID(numberId);
    

    const requisicao = axios.post(
      "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
      {
        ids: numberId,
        name: name,
        cpf: cpf,
      }
    );
    requisicao.then(() => navigate("/sucesso"));
    }
  }

  return (
    <FormContainer onSubmit={recerva}>
      <label for="name">Nome do Comprador:</label>
      <input
        data-test="client-name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Digite seu nome..."
        required
      />

      <label for="cpf">CPF do Comprador:</label>
      <input
        data-test="client-cpf"
        id="cpf"
        value={cpf}
        onChange={(e) => setCPF(e.target.value)}
        type="number"
        placeholder="Digite seu CPF..."
        required
      />

      <button data-test="book-seat-btn" onClick={recerva} type="submit">Reservar Assento(s)</button>
    </FormContainer>
  );
}
const FormContainer = styled.form`
  width: calc(100vw - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    align-self: center;
  }
  input {
    width: calc(100vw - 60px);
  }
`;
