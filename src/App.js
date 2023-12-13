import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const text1 = 'Hello World'
  const changeText = 'Hello Pakistan'
  const [textValue , settextValue] = useState(true)
  const [bulb , setbulb] = useState(false)

  const bulbOnImg = 'https://www.freepnglogos.com/uploads/bulb-png/bulb-file-oxygen-actions-help-hint-svg-wikimedia-commons-18.png '
  const bulbOffImg = 'https://freepngimg.com/save/31669-bulb-off-transparent-image/500x500'

  const text = 'Welcome Saad Ahmed'
  const name = "Hello World";
  const obj = { name: "Hello World Object" }
  const data = ['We', 'are', 'United'] //Show these in seperate tags
  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }] //Show these in seperate tags
  const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }] //Show these in a Table
  const carsList = [
    { name: 'Civic', model: 2002, color: 'Black', feature: ['Power window', 'Power Staring'] },
    { name: 'Mehran', model: 2002, color: 'White', feature: ['Boss', 'Gas Chorti hai'] },
    { name: 'Corolla', model: 2002, color: 'Blue', feature: ['Petrol bohat peeti hai'] },

  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <h3>{text}</h3>
        <h4>{textValue ? text1 : changeText}</h4>
        <button onClick={() => {settextValue(!textValue)}}>Change Text</button>
        <img src={!bulb ? bulbOffImg : bulbOnImg} width={'300px'} alt="logo" />

        <div className='btn'>
        <button onClick={(() => setbulb(true))}>On</button>
        <button onClick={(() => setbulb(false))}>Off</button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <h3>Name</h3>
        <p>{name}</p>
        <h3>Obj</h3>
        <p>{obj.name}</p>
        <h3>Data</h3>
        <p>{data.map(function (item) {
          return <i> {item}</i>
        })}</p>
        <h3>List</h3>
        {list.map(function (item) {
          return <p>{item.name}</p>
        })}
        <table border={2}>
          <tr>
            <th>Company</th>
            <th>Jobs</th>
          </tr>
          {complex.map(function (item) {
            return <tr>
              <td>{item.company}</td>
              <td><ol>{item.jobs.map(function (a) {
                return <li>{a}</li>
              })}</ol></td>
            </tr>
          })}
        </table>
        <br></br>
        <table border={2}>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Color</th>
            <th>Features</th>
          </tr>
          {carsList.map(function (item) {
            return <tr>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>{item.color}</td>
              <td><ol>{item.feature.map(function (item) {
                return <li>{item}</li>
              })}</ol></td>
            </tr>
          })}
        </table>
      </header>
    </div>

  );
}

export default App;
