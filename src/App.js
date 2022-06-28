import { Button } from 'react-bootstrap';
import './App.css';
import Registration from './pages/reister-login/Registration';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Registration />}></Route>
          <Route path='*' element={<h1>404 not found</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
