import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Landing } from "./pages/Landing"
import Register from "./pages/Register"
import Dashboard from './pages/Dashboard';
import AddPayment from './pages/AddPayment';
import CompletedPayments from './pages/CompletedPayments';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/add-payment' element={<AddPayment />} />
          <Route path='/completed-payments' element={<CompletedPayments />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
    </Router>
  );
}

export default App;