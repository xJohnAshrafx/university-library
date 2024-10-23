// src/App.jsx
import './App.css';
import Register from './component/register';
function App() {
  return (
    <div className="app-container">
      <div className="welcome-banner">
        <h1>Welcome to the Library of University</h1>
      </div>
      <div className="form-wrapper">
        <h2>Create an Account</h2>
        <p className="subheading"> Join us today and get access to the university's Library and have a collection of resources!</p>
        <Register />
      </div>
    </div>
  );
}

export default App;