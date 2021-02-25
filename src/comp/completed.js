import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";
import { Message } from "./todoForm";
import DoneIcon from "@material-ui/icons/Done";

const CompletedTodoContainer = styled.div`
  width: 30vw;
  height: calc(100vw-50px;);
  background: ;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  border: 1px solid blue;
  border-radius: 5px;
  color: blue;
  margin-left: 25px;
  position: relative;
  max-height: 80vh;
  position: sticky;
  top: 10vh;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const CompleteHeader = styled.div`
  background: white;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: -20px;
  font-size: 12px;
`;

const CompletedItem = styled.div`
  margin: 10px;
  font-size: 15px;
  display: flex;
`;

const CompleteTodos = styled.div``;

const ClearButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  font-size: 12px;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-radius: 5px;
    transition: 0.3s;
    transform: scale(0.9);
  }
`;

export const Completed = ({
  completeTodos,
  setCompleteTodos,
  todos,
  setTodos,
  colorOne,
  colorTwo,
  saveToStorage,
}) => {
  const clearCompleted = () => {
    setCompleteTodos([]);
    console.log(todos);
    const newTodos = completeTodos.filter((todos) => todos.completed == false);
    setTodos(newTodos);

    return saveToStorage;
  };

  const completedList = completeTodos.map((completed, index) => {
    return (
      <CompletedItem key={index}>
        <DoneIcon></DoneIcon>
        {completed.value}
      </CompletedItem>
    );
  });

  return (
    <>
      <CompletedTodoContainer
        style={{ color: colorTwo, border: `1px solid ${colorTwo}` }}
      >
        {completeTodos.length > 0 ? (
          <ClearButton
            style={{
              color: colorOne,
              background: colorTwo,
              border: `1px solid ${colorOne}`,
            }}
            onClick={clearCompleted}
          >
            clear
          </ClearButton>
        ) : (
          ""
        )}

        <CompleteHeader style={{ color: colorTwo, background: colorOne }}>
          Completed {completeTodos.length}
        </CompleteHeader>

        <CompleteTodos>
          {completeTodos.length == 0 ? "Complete an item" : completedList}
        </CompleteTodos>
      </CompletedTodoContainer>
    </>
  );
};
