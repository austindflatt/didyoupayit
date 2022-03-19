import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer';
import { HeaderMiddle } from './components/Header';
import { Home } from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <HeaderMiddle />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;