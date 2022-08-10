import logo from './logo.svg';
import './App.css';
import Form from './pages/Form';
import Home from './pages/home';
import Success from './pages/Success';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

const App = () => {

return(
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/form' element={<Form />} />
  <Route path='/Success/:name' element={<Success />} />
  </Routes>
  </BrowserRouter>
  </>
)
}

export default App;
