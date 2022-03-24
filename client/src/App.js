import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard';
import AddPayment from './pages/AddPayment';
import CompletedPayments from './pages/CompletedPayments';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-payment' element={<AddPayment />} />
          <Route path='/completed-payments' element={<CompletedPayments />} />
        </Routes>
    </Router>
  );
}

export default App;