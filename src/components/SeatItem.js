import { useState } from "react";
import styled from "styled-components";
export default function SeatItem({ id, place, setPlace, number, isAvailable }) {
  const [select, setSelect] = useState(false);

  function selected() {
    if (place) {
      setSelect(true);
      setPlace(place.filter((n) => n.id !== id));
      setPlace([...place, { id: id, number: number }]);
    } else {
      setSelect(false);
    }
  }

  function unavailable() {
    alert("Esse assento não está disponível");
  }

  return isAvailable ? (
    <Seat select={select} onClick={selected}>
      {number}
    </Seat>
  ) : (
    <SeatNo onClick={unavailable}>{number}</SeatNo>
  );
}
const Seat = styled.div`
  border: 1px solid ${({ select }) => (select ? "#0E7D71" : "#7B8B99")};
  background-color: ${({ select }) => (select ? "#1AAE9E" : "#C3CFD9")};
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
  cursor: pointer;
`;
const SeatNo = styled.div`
  border: 1px solid #f7c52b;
  background-color: #fbe192;
  height: 25px;
  width: 25px;
  border-radius: 25px;
  font-family: "Roboto";
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 3px;
  cursor: default;
`;
