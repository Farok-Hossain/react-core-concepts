import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  // const nayoks = ['Rubel', 'Bapparaz', 'Bappi', 'Shuvo'];

  const cinemas = [
    {nayok:'Josim', nayika:'Shabana'},
    {nayok:'Razzak', nayika:'Kobori'},
    {nayok:'Omorsani', nayika:'Mousomi'}
  ]

  return (
    <div className="App">

      <Counter></Counter>
      <MyPoints></MyPoints>
      <ExternalUsers></ExternalUsers>

      <ul>
        {
          // nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>
      {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema> */}
        {
          // cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
        }
      {/* <Player name="Cristiano Ronaldo" Profession="Footballer" country="Portugal"></Player>
      <Player name="Neymar" Profession="Footballer" country="Brazil"></Player> */}
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h2>External Users</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}


function User(props){
  return(
    <div className="player">
      <h2>name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  )
}


function MyPoints() {
  const [points, setPoints] = useState(1);

  const handlePoints = () => setPoints(points * 2);
  return(
    <div className="points">
      <h2>My Points: {points}</h2>
      <button onClick={handlePoints}>Multiply points by 2</button>
    </div>
  )
}


function Players(props) {
  const player ={
    backgroundColor:'green',
    padding:'20px', 
    margin:'20px',
    borderRadius: '20px'
  }
  return(
    <div style={player}>
      <h2>Name:{props.name}</h2>
      <h2>Profession:{props.Profession}</h2>
      <h2>Country:{props.country}</h2>
    </div>
  );
}

function Cinema(props) {
  const cinema ={
    backgroundColor:'orange',
    padding: '20px',
    margin:'15px',
    borderRadius:'15px'
  }
  return (
    <div style={cinema}>
      <h2>Nayok:{props.nayok}</h2>
      <h2>Nayika:{props.nayika}</h2>
    </div>
  )
}


export default App;
