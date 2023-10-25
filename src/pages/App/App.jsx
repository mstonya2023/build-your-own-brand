import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import HomePage from '../HomePage/HomePage';
export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          
      <Routes>
      {/* Route components in here */}
      <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
      <Route path="/orders" element={<OrderHistoryPage />} />
      </Routes>
          :
          <HomePage setUser={setUser} />
          
      }
    </main>
  );
}
