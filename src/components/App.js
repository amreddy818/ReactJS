import React,{useState} from 'react';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'

function App(){
  const [Lists,setLists] = useState([]);
  const Fun = (OBJ) => {
    setLists([...Lists,OBJ]);
    console.log(Lists);
  };
  return (
    <div>
      <Header />
      <AddContact Fun = {Fun}/>
      <ContactList Contacts = {Lists}/>
    </div>
  );
}

export default App;
