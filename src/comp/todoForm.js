import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { Completed } from "./completed";
import { Progress } from "./progress";
import AddIcon from "@material-ui/icons/Add";
import DoneIcon from "@material-ui/icons/Done";

const blink = keyframes`
    from{
        opacity: 0%
    }
    50%{
        opacity: 100%
    }
    to{
        opacity: 0
    }
}

`

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  padding: 25px 0 25px 0;
  width: 60vw;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  padding: 25px 0 25px 0;
`;

const InputTodoContainer = styled.form`
  display: flex;

  border-radius: 5px;

  position: relative;
`;

const InputTodo = styled.input`
height: 60px;
margin: 0;
width: 100%;
border: none;
display: flex;
background transparent;
padding: 0 0 0 25px;

border-radius: 5px;
font-size: 15px;



&:focus{
  

    outline: none;
}

&::placeholder {
    color: lightGrey;
    font-size: 15px;
  }


`;

const TodoContainer = styled.div`
  width: 50vw;

  display: flex;

  flex-direction: column;

  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

const TodoItemContainer = styled.div`

margin: 25px 0 0 0 ;
position: relative

border-radius: 5px;
transition: ease 0.3s;
cursor: pointer;
color: white;
display: flex;
align-items: center;

justify-content: space-between;

`;

const TodoItemCard = styled.div`
  height: 60px;
  width: 80%;

  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  color: blue;
  display: flex;
  align-items: center;
  padding: 0 25px 0 25px;
  justify-content: space-between;
  margin: 0 25px 0 0px;

  &:hover {
    transition: ease 0.3s;
    transform: scale(1.02);
    box-shadow: 0px 0px 10px #ffffff;
  }
`;

const DeleteButton = styled.div`
  min-width: 50px;
  height: 50px;
  background: white;
  border-radius: 5px;
  transition: ease 0.1s;
  cursor: pointer;
  color: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px 0 0;

  position: relative;

  &:hover {
    transition: ease 0.1s;
    transform: scale(1.22);
    box-shadow: 0px 0px 10px #ffffff;
  }
`;

const DateTime = styled.div`
  font-size: 8px;
  width: 75px;
  text-align: right;
`;

const Logo = styled.div`
  font-size: 30px;

  margin: 25px 0;
  font-weight: 700;
`;

export const Message = styled.div`
  font-size: 15px;
  color: blue;
  transition: 1s ease;
  animation-name: ${blink};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

const Header = styled.div`
  font-size: 15px;
  color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Switch = styled.div`
  font-size: 15px;

  width: 25px;
  height: 25px;
  border-radius: 50px;
  transition: 0.3s ease;
`;

const DarkMode = styled.div`
  font-size: 15px;
  color: blue;
  border: 1px solid blue;
  width: 50px;
  height: 25px;
  border-radius: 50px;
  position: relative;
  cursor: pointer;

  &:hover ${Switch} {
    transform: scale(0.9);
    transition: 0.3s ease;
  }
`;

const AddButton = styled.div`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  border-radius: 5px;
  cursor: pointer;

  background: white;
  border: 1px solid blue;
  transition: 0.3s ease;

  &:hover {
    background: blue;
    color: white;
    transition: 0.3s ease;
    border: 1px solid white;
  }
`;



export const TodoForm = ({ dark, setDark, colorOne, colorTwo }) => {
  const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");

  // list of todos //
  const [todos, setTodos] = useState(savedTodos ? savedTodos : []);

  const [hovered, setHovered] = useState(false);

  // track input value //
  const [inputValue, setInputValue] = useState("");

  const savedCompletedTodos = JSON.parse(
    localStorage.getItem("completedTodos") || "[]"
  );

  // list of completed todos //
  const [completeTodos, setCompleteTodos] = useState(
    savedCompletedTodos ? savedCompletedTodos : []
  );

  const saveToStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));

    localStorage.setItem("completedTodos", JSON.stringify(completeTodos));
  };

  // handle input change //
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // handle form submit //
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.length > 0) {
      const randomNum = () => {
        return Math.floor(Math.random() * Math.floor(300));
      };

      todos.push({
        value: inputValue,
        completed: false,
        date: new Date(),
        id: randomNum(),
      });

      setTodos([...todos]);

      setInputValue("");

      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  // delete todos //
  const deleteTodo = (todoIndex, myTodos) => {
    console.log(todoIndex);

    // get this index and remove from todos array //

    const newTodos = todos.filter((todos) => todos.id !== myTodos.id);

    setTodos(newTodos);

    const newCompletedtodos = completeTodos.filter(
      (todos) => todos.id !== myTodos.id
    );

    setCompleteTodos(newCompletedtodos);

    console.log(completeTodos);

    console.log(myTodos.value);

    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const completeTodo = (myTodos, todoIndex) => {
    myTodos.completed = !myTodos.completed;

    setTodos([...todos]);

    if (myTodos.completed == true) {
      setCompleteTodos([...completeTodos, myTodos]);

      console.log(todos);

      saveToStorage();
    } else {
      const newCompletedtodos = completeTodos.filter(
        (todos) => todos.id !== myTodos.id
      );

      setCompleteTodos(newCompletedtodos);

      saveToStorage();
    }

    console.log(completeTodos);
  };

  const todoItems = todos.map((todos, index) => {
    return (
      <TodoItemContainer key={index}>
        <TodoItemCard
          onClick={() => deleteTodo(index, todos)}
          style={{
            border: `1px solid ${colorTwo}`,
            color: todos.completed ? colorOne : colorTwo,
            background: todos.completed ? colorTwo : colorOne,
          }}
        >
          {todos.value}

          <DateTime>{todos.date.toString().slice(0, 24)}</DateTime>
        </TodoItemCard>

        <DeleteButton
          onClick={() => completeTodo(todos, index)}
          style={{
            border: `1px solid ${colorTwo}`,
            color: todos.completed ? colorOne : colorTwo,
            background: todos.completed ? colorTwo : colorOne,
          }}
        >
          {todos.completed ? <DoneIcon></DoneIcon> : " "}
        </DeleteButton>
      </TodoItemContainer>
    );
  });

  return (
    <Container>
      <Header style={{ color: colorTwo }}>
        <Logo>todo.</Logo>

        <DarkMode
          onClick={() => setDark(!dark)}
          style={{ color: colorTwo, border: `1px solid ${colorTwo}` }}
        >
          <Switch
            style={{
              color: colorTwo,
              background: colorTwo,
              position: "absolute",
              right: dark ? "0px" : "25px",
            }}
          ></Switch>
        </DarkMode>
      </Header>

      <Progress
        todos={todos}
        completed={completeTodos}
        colorTwo={colorTwo}
        colorOne={colorOne}
      ></Progress>

      <AppContainer>
        <TodoContainer>
          {/* <SimpleSelect todos={todos} setTodos={setTodos}></SimpleSelect> */}

          <InputTodoContainer onSubmit={handleSubmit}>
            <InputTodo
              onChange={handleChange}
              style={{ color: colorTwo, border: `1px solid ${colorTwo}` }}
              value={inputValue}
              placeholder={"add todo"}
            ></InputTodo>
            <AddButton
              style={{
                color: hovered ? colorOne : colorTwo,
                border: `1px solid ${colorTwo}`,
                background: hovered ? colorTwo : colorOne,
              }}
              onMouseEnter={() => setHovered(!hovered)}
              onMouseLeave={() => setHovered(!hovered)}
              onClick={handleSubmit}
            >
              <AddIcon></AddIcon>
            </AddButton>
          </InputTodoContainer>

          {todoItems}
        </TodoContainer>

        <Completed
          setCompleteTodos={setCompleteTodos}
          completeTodos={completeTodos}
          todos={todos}
          setTodos={setTodos}
          colorOne={colorOne}
          colorTwo={colorTwo}
          saveToStorage={saveToStorage()}
        ></Completed>
      </AppContainer>
      <Message style={{ color: colorTwo }}>
        {todos.length == 1
          ? "Click on todo to delete"
          : todos.length == 0
          ? "Add todo to get started"
          : ""}
      </Message>
    </Container>
  );
};
