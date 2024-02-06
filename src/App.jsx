// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
      <div className="container">
        {/* <h1>{count}</h1>
        <button onClick={() => setCount((count) => count + 1)}>
        +  </button>
        <button onClick={() => setCount((count) => count - 1)}>
          -
        </button> */}

        <div className="cards">
          <div className="value">0</div>
          <div className="label">CHILD</div>
          <div className="buttons">
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        <div className="cards">
          <div className="value">0</div>
          <div className="label">ADULT</div>
          <div className="buttons">
            <button>-</button>
            <button>+</button>
          </div>
        </div>
      </div>
     
    </>
  )}

export default App
