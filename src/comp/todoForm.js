import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import styled from 'styled-components'
import { Completed } from './completed'
import { Progress }  from './progress'


const Container = styled.div`

display: flex;
justify-content: center;
flex-direction: column;

padding: 25px 0 25px 0 ;
width: 80vw;



`


const AppContainer = styled.div`

display: flex;
justify-content: space-between;
flex-direction: row;

padding: 25px 0 25px 0 ;



`

const InputTodoContainer = styled.form`



display: flex;

border-radius: 5px;




`

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


`


const TodoContainer = styled.div`
width: 50vw;

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
margin: 0 25px 0 0px;



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


font-size: 8px;
width: 75px;
text-align: right;



`

const Logo = styled.div`


font-size: 30px;

margin: 25px 0;
font-weight: 700;




`

export const Message = styled.div`


font-size: 15px;
color: blue;
transition: 1s ease;

animation: 2s blink ease infinite;






`

const Header = styled.div`


font-size: 15px;
color: blue;
display: flex;
justify-content: space-between;
align-items: center;





`

const Switch = styled.div`


font-size: 15px;




width: 25px;
height: 25px;
border-radius: 50px;
transition: 0.3s ease;



`


const DarkMode = styled.div`


font-size: 15px;
color: blue;
border: 1px solid blue;
width: 50px;
height: 25px;
border-radius: 50px;
position: relative;
cursor: pointer;

&:hover ${Switch}{

    transform: scale(0.9);
    transition: 0.3s ease;
    
    
}






`





export const TodoForm = ({dark, setDark, colorOne, colorTwo}) => {




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

        todos.push({value:inputValue, completed:false, date:new Date(), id:randomNum()  })

        setTodos([...todos])

        setInputValue('')


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



        <TodoItemCard  onClick={() => deleteTodo(index, todos)} style={{ 
            border: '1px solid blue', 
            color: todos.completed ? colorOne : colorTwo,
            background: todos.completed ? colorTwo : colorOne
            
            
            }} >
            
            {todos.value}


        <DateTime>
            {todos.date.toString().slice(0, 24)}
        </DateTime>

            
            
        </TodoItemCard>


        <DeleteButton onClick={() => completeTodo(todos, index)} style={{ 
            border: '1px solid blue', 
            color: todos.completed ? 'white' : 'blue',
            background: todos.completed ? 'blue' : 'white'
            
            }}>

                {todos.completed ? '✔' : ' '}
                
                
                
            </DeleteButton>


        </TodoItemContainer>

        
        )
        
        })



    return(

<Container>
<Header style={{color: colorTwo}}>
<Logo>todo</Logo>


<DarkMode onClick={() => setDark(!dark)} style={{ color: colorTwo, border: `1px solid ${colorTwo}` }}><Switch style={{ color: colorTwo, background: colorTwo, position: 'absolute', right: dark ? '0px' : '25px' }} ></Switch></DarkMode>
</Header>

        <Progress todos={todos} completed={completeTodos} colorTwo={colorTwo} colorOne={colorOne}></Progress>
    
        <AppContainer>




        <TodoContainer>

            {/* <SimpleSelect todos={todos} setTodos={setTodos}></SimpleSelect> */}

            


        <InputTodoContainer onSubmit={handleSubmit}>
            <InputTodo onChange={handleChange} style={{ color: colorTwo, border: `1px solid ${colorTwo}` }}  value={inputValue} placeholder={'add todo'}></InputTodo>
            
            
        </InputTodoContainer>
      
        {todoItems}

    
        </TodoContainer>

        <Completed setCompleteTodos={setCompleteTodos} completeTodos={completeTodos} todos={todos} setTodos={setTodos} colorOne={colorOne} colorTwo={colorTwo}></Completed>

        


    

        </AppContainer>
        <Message style={{ color: colorTwo}}>{todos.length == 1 ? 'Click on todo to delete' : todos.length == 0 ? 'Add todo to get started' : '' }</Message>




        </Container>
        
    )

}