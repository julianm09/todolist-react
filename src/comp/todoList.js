import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import styled from 'styled-components'



const TodoItemCard = styled.div`

margin: 25px 0 25px 0 ;
width: 500px;
height: 50px;

border-radius: 5px;
transition: ease 0.3s;
cursor: pointer;
color: white;
display: flex;
align-items: center;
padding-left: 25px;

&:hover{
    transition: ease 0.3s;
    transform: scale(1.02);
    box-shadow:  8px 8px 16px #fafafa,
    -8px -8px 16px #ffffff;
}
`


export const TodoList = ({ todos, setTodos }) => {   
    

const items = todos.map((todos, index) => {
    <TodoItemCard >
        
   
        {todos}
     
    </TodoItemCard>

})
    
    return(
    
    <>
    {items}

    </>

    )

}

