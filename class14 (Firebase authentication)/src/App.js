import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Todo from './components/TodoApp/Todo';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
