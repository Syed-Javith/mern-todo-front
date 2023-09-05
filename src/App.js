
import './App.css';
import {BrowserRouter as Router, Routes , Route, Link} from "react-router-dom"
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Todo from './pages/Todo';
import Error from './pages/Error';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import { useState , createContext} from 'react';


// export const UserContext = createContext();

function App() {
  

  // console.log(user);
  
  return (
    // <UserContext.Provider value={user}>
    <Router>
      
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/todo' element={<Todo  />}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
      <Footer />
    </Router>
    // </UserContext.Provider>
  );
}

export default App ;
