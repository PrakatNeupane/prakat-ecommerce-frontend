import { Button } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import RegistrationPage from './pages/register-login/Registration';
import LoginPage from './pages/register-login/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<RegistrationPage />}></Route>
          <Route path='/' element={<LoginPage />}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
