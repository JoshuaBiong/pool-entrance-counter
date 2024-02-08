import { useState } from 'react'

import './App.css'

function App() {
  const [countChild, setCountCHild] = useState(0)
  const [countAdult, setCountAdult] = useState(0)

  return (
    <>
    
      <div className="container">
       

        <div className="cards">
          <div className="value">{countChild}</div>
          <div className="label">CHILD</div>
          <div className="buttons">
            <button onClick={()=> setCountCHild(countChild-1)}>-</button>
            <button onClick={()=>setCountCHild((countChild)=>countChild+1) }>+</button>
          </div>
        </div>
        <div className="cards">
          <div className="value">{countAdult}</div>
          <div className="label">ADULT</div>
          <div className="buttons">
            <button onClick={()=> setCountAdult(countAdult-1)}>-</button>
            <button onClick={()=>setCountAdult((countAdult)=>countAdult+1) }>+</button>
          </div>
        </div>
      </div>
     
    </>
  )}


export default App
 