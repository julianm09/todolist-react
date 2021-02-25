import React from "react";
import styled from "styled-components";

const Progressbar = styled.div`
  width: 100%;
  height: 10px;
  background: white;
  position: absoulte;
  top: 10%;
  left: 10%;
  border-radius: 10px;
  border: 5px solid white;
  z-index: 100;
  transition: ease 0.5s;
  border: 1px solid blue;
  margin: 25px 0 0 0;
`;
const Progression = styled.div`
  width: 10vw;
  height: 10px;
  background: blue;
  position: absoulte;
  top: 10%;
  left: 10%;
  border-radius: 5px;
  transition: ease 0.5s;

  z-index: 100;
`;

export const Progress = ({ todos, completed }) => {



  const progress = () => {
    if (completed.length === 0) {
      return 0;
    } else {
      return completed.length / todos.length * 100;
    }
  };

  const finished = () => {
    if (progress() === 100) {
      return "1px solid blue";
    }
  };

  return (
    <Progressbar style={{ border: finished() }}>
      <Progression style={{ width: progress() + "%" }} />
    </Progressbar>
  );
};