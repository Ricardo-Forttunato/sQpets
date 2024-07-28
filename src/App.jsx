
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Homepage from './components/Homepage/Homepage';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
