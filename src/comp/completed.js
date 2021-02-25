import React, { useState } from 'react'
import { TextField } from '@material-ui/core';
import styled from 'styled-components'



const CompletedTodoContainer = styled.div`
    width: 25vw; 
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

    @media (max-width: 1000px) {
        display: none;
      }



`

const CompleteHeader = styled.div`


    background: white;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: -20px;
    font-size: 12px

`

const CompletedItem = styled.div`
margin: 10px





`

const ClearButton = styled.div`






`

export const Completed = ({ completeTodos, setCompleteTodos, todos, setTodos }) => {

    const clearCompleted = () => {
        setCompleteTodos([])


        console.log(todos)
        const newTodos = completeTodos.filter((todos) => todos.completed == false);
        setTodos(newTodos)
        
    }


    const completedList = completeTodos.map((completed, index) => {

        return(
            <CompletedItem key={index}>{completed.value}</CompletedItem>
        )

    })
    

    

    return(

        
        

        <CompletedTodoContainer>

            

            <CompleteHeader>Completed {completeTodos.length}</CompleteHeader>


            {completeTodos.length == 0 ? 'complete an item' : completedList}


            {completeTodos.length > 0 ? <ClearButton onClick={clearCompleted}>clear</ClearButton> : ''}

        
        </CompletedTodoContainer>

    )
}