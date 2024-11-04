// src/App.jsx
import './App.css';
import Register from './component/register';
import Main from './component/main'; 
import HomePage from './component/HomePage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/main" element={<Main />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
