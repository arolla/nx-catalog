
import './App.css';
import Form from './components/Form';
import {useEffect, useState} from "react";
function App() {
 
  return (
  
    <div>
       {(load)?(<Form></Form>):(<h1>Chargement...</h1>)
       }
    
    </div>
  );
}

export default App;
