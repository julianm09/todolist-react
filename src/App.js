import "./App.css";
import { TodoForm } from './comp/todoForm';
import React, { useState } from 'react';
/* import { useState } from 'react' */



function App() {

const [dark, setDark] = useState(false)

const colorOne = () => dark ? 'blue' : '#ffffff';
const colorTwo = () => dark ? '#ffffff' : 'blue';

  return (
  <div className="App" style={{background:colorOne()}}>
    <TodoForm dark={dark} setDark={setDark} colorOne={colorOne()} colorTwo={colorTwo()}></TodoForm>
  </div>
  )
}

export default App;
