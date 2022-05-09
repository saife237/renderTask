import logo from './logo.svg';
import './App.css';
import Card from './Card';
import { useEffect, useState } from 'react';
import Data from './Data';
function App() {
  const [active, setActive] = useState("FirstCard")

  // useEffect(()=>{
  //   document.title = title;
  // })
  return (
    <div className="App">
    <nav>
    <div className='btn1'>
    <h3>John Smith</h3>
    <p>Jsmith@gmail.com</p>
    <p>12345678</p>
    <button onClick={()=> setActive("FirstCard")}>Click to View Details</button>
      </div>
      <div className='btn2'>
    <h3>ABCD</h3>
    <p>abcd@test.com</p>
    <p>98765430</p>
      <button onClick={()=> setActive("SecondCard")}>Click to View Details</button>
      </div>
      <div className='btn3'>
    <h3>Tyrion</h3>
    <p>Tyrion@test.com</p>
    <p>7654890</p>
    <button onClick={()=> setActive("ThirdCard")}>Click to View Details</button>
      </div>
    </nav>
    <div>
    {active === "FirstCard" && <Card data={Data} cardIndex={0}/>}
    {active === "SecondCard" && <Card data={Data} cardIndex={1}/>}
    {active === "ThirdCard" && <Card data={Data} cardIndex={2}/>}
    </div>
    </div>
  );
}

export default App;
