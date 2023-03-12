import { useState } from "react";
import styled from "styled-components";
export default function SeatItem({
  id,
  place,
  setPlace,
  name,
  isAvailable,
}) {
  const [select, setSelect] = useState(false);

  function selected() {
    const newSelect = !select;

    setSelect(newSelect);

    const newPlace = newSelect
      ? [...place, { id, name }]
      : place.filter((e) => e.id !== id);

    setPlace(newPlace);
  }

  return isAvailable ? (
    <Seat select={select} onClick={selected}>
      {name}
    </Seat>
  ) : (
    <SeatNo>{name}</SeatNo>
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
