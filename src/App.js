import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [toggle , settoggle] = useState(true)
const [list , setlist] = useState([])
const [text, settext] = useState('')
const [updateIndex , setUpdateIndex] = useState(null)

function inputValue(e){
  const value = e.target.value
  settext(value)
}
function addItem(){
  const copyText = [...list]
  copyText.push(text)
  settext('')
  setlist(copyText)
}

function deleteItem(index){
  const copyList = [...list]
  copyList.splice(index , 1)
  setlist(copyList)
}

function editItem(index){
  const updatedText = list[index]
  settext(updatedText)
  setUpdateIndex(index)
  settoggle(false)
}

function updateItem(){
  const updateList = [...list]
  updateList[updateIndex] = text;
  setlist(updateList);
  settext('');
  setUpdateIndex(null);
  settoggle(true);

  
  
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        {/* <img src={logo} className='App-logo'/> */}
        <input type='text' onChange={inputValue} value={text} placeholder='Enter any item'/>
        {toggle ? <button onClick={addItem}>Add</button> 
        :
         <button onClick={() => updateItem()}>Update</button>}


        <ul>
          {list.map(function(item , index){
           return <li key={index}>
            {item}
            <button onClick={() => editItem(index)}>Edit</button>
            <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          })}
        </ul>
      </header>
    </div>

  );
}

export default App;
