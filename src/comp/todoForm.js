import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import styled from 'styled-components'
import { Completed } from './completed'
import { Progress }  from './progress'


const AppContainer = styled.div`

display: flex;
justify-content: center;
flex-direction: row;

padding: 25px 0 25px 0 ;



`


const TodoContainer = styled.div`
width: 40vw;

display: flex;

flex-direction: column;

@media (max-width: 1000px) {
    width: 80vw;
  }


`

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

`

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
margin: 0 0 0 25px;


&:hover{
    transition: ease 0.3s;
    transform: scale(1.02);
    box-shadow:  8px 8px 16px #fafafa,
    -8px -8px 16px #ffffff;
}
`

const DeleteButton = styled.div`


min-width:30px;
height:30px;
background: white;
border-radius: 5px;
transition: ease 0.1s;
cursor: pointer;
color: blue;
display: flex;
align-items: center;
justify-content: center;

border: 1px solid blue;
position: relative;

&:hover{
    transition: ease 0.1s;
    transform: scale(1.22);

}
`

const DateTime = styled.div`


font-size: 10px;



`



export const TodoForm = () => {


    // list of todos //
    const [todos, setTodos] = useState([])

    // track input value //
    const [inputValue, setInputValue] = useState('')

    // list of completed todos //
    const [completeTodos, setCompleteTodos] = useState([])



    // handle input change //
    const handleChange = (e) => {

        setInputValue(e.target.value)

    }


    // handle form submit //
    const handleSubmit = (e) => {

        e.preventDefault();

        const randomNum = () =>{

         return Math.floor(Math.random() * Math.floor(300))

        };

        todos.push({value:inputValue, completed:false, date:new Date().toString().slice(0, 24), id:randomNum()  })

        setTodos([...todos])


    }


    // delete todos //
    const deleteTodo = (todoIndex, myTodos) => {
        console.log(todoIndex)

        // get this index and remove from todos array //

        const newTodos = todos.filter((todos) => todos.id !== myTodos.id);

        setTodos(newTodos)

        const newCompletedtodos = completeTodos.filter((todos) => todos.id !== myTodos.id);

        setCompleteTodos(newCompletedtodos)

        console.log(completeTodos)

        console.log(myTodos.value)
 
    }


    const completeTodo = (myTodos, todoIndex) => {

        myTodos.completed = !myTodos.completed;

        setTodos([...todos])

        if (myTodos.completed == true) {

        setCompleteTodos([...completeTodos, myTodos])

        console.log(completeTodos)

        } else {

            const newCompletedtodos = completeTodos.filter((todos) => todos.id !== myTodos.id);

            setCompleteTodos(newCompletedtodos)
        }



        

        
    }



    const todoItems = todos.map((todos, index) => {


        return(
        <TodoItemContainer key={index} >

        <DeleteButton onClick={() => completeTodo(todos, index)} style={{ 
            border: '1px solid blue', 
            color: todos.completed ? 'white' : 'blue',
            background: todos.completed ? 'blue' : 'white'
            
            }}>

                {todos.completed ? '✔' : ' '}
                
                
                
            </DeleteButton>

        <TodoItemCard  onClick={() => deleteTodo(index, todos)} style={{ 
            border: '1px solid blue', 
            color: todos.completed ? 'white' : 'blue',
            background: todos.completed ? 'blue' : 'white'
            
            
            }} >
            
            {todos.value}


        <DateTime>
            {todos.date}
        </DateTime>

            
            
        </TodoItemCard>


        </TodoItemContainer>

        
        )
        
        })



    return(

<>

        <Progress todos={todos} completed={completeTodos}></Progress>
    
        <AppContainer>




        <TodoContainer>

            {/* <SimpleSelect todos={todos} setTodos={setTodos}></SimpleSelect> */}

            


        <form onSubmit={handleSubmit}>
            <TextField onChange={handleChange}  style={{width:'100%'}} value={inputValue} id="outlined-basic" label="Todo" variant="outlined" ></TextField>
            
            
        </form>
      
        {todoItems}

    
        </TodoContainer>

        <Completed setCompleteTodos={setCompleteTodos} completeTodos={completeTodos} todos={todos} setTodos={setTodos}></Completed>

        


        

        </AppContainer>




</>
        
    )

}