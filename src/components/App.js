import  '../styles/App.css';
import  Button  from '@mui/material/Button';
import { useState } from 'react'

function App() {
  const [ score, setScore]=useState(0)

   function increment (){
    setScore(score+1)
   }
  return (
    <Button onClick={increment}>{score}</Button>
  );
}

export default App;
