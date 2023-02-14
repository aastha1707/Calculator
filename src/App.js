
import './App.css';
import { useState } from 'react';

const App=()=> {

   const [answer,setResult]=useState("");

   const clickhandler=(event)=>{
    setResult(answer.concat(event.target.value))
   }

   const clearDisplay=()=>{
    setResult("");
   }

   function calculator(){
    fetch("http://localhost:8080/evaluate",
    {
       method:"POST",
       headers: { "Content-Type": "application/json" },
       body: answer,}).then(res =>res.json()).then((answer) =>setResult(answer));
   }

  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={answer}/>
      <input type="button" value="9" className='button' onClick={clickhandler}/>
      <input type="button" value="8" className='button' onClick={clickhandler}/>
      <input type="button" value="7" className='button' onClick={clickhandler}/>
      <input type="button" value="6" className='button' onClick={clickhandler}/>
      <input type="button" value="5" className='button' onClick={clickhandler}/>
      <input type="button" value="4" className='button' onClick={clickhandler}/>
      <input type="button" value="3" className='button' onClick={clickhandler}/>
      <input type="button" value="2" className='button' onClick={clickhandler}/>
      <input type="button" value="1" className='button' onClick={clickhandler}/>
      <input type="button" value="0" className='button' onClick={clickhandler}/>
      <input type="button" value="+" className='button' onClick={clickhandler}/>
      <input type="button" value="-" className='button' onClick={clickhandler}/>
      <input type="button" value="*" className='button' onClick={clickhandler}/>
      <input type="button" value="/" className='button' onClick={clickhandler}/>
      <input type="button" value="%" className='button' onClick={clickhandler}/>
      <input type="button" value="^" className='button' onClick={clickhandler}/>
      <input type="button" value="clear" className='button button1' onClick={clearDisplay}/>
      <input type="button" value="=" id="result" className='button button1' onClick={calculator}/>

    </div>
  );
}

export default App;
