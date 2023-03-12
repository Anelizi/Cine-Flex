import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SessionDate({ days }) {
  const weekdays = days.weekday;
  const dates = days.date;
  const showtime = days.showtimes;

  return (
    <SessionContainer>
      {weekdays} - {dates}
      <ButtonsContainer>
        {showtime.map((s) => (
          <Link to={`/assentos/${s.id}`} key={s.id}>
            <button>{s.name}</button>
          </Link>
        ))}
      </ButtonsContainer>
    </SessionContainer>
  );
}
const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-size: 20px;
  color: #293845;
  padding: 0 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  button {
    margin-right: 20px;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
`;
