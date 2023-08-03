import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Users from './assets/Users.jsx';
import Edit from './assets/Edit';
import Create from './assets/Create';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        
        <BrowserRouter>
        <Routes>
        <Route path ='/' element={<Users/>}></Route>
        <Route path ='/create' element={<Create/>}></Route>
        <Route path ='/edit' element={<Edit/>}></Route>




      </Routes></BrowserRouter>
      
     
      </div>



   
  )
}

export default App
