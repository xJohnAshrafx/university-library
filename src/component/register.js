import { useState } from 'react';
import './Register.css';

function Register() {
  const [pass, setPass] = useState(false);

    const PassVisibility = () => {
    setPass(!pass);
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={pass ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="form-group">
            <label>
              <input type="checkbox" onChange={PassVisibility} /> Show Password
            </label>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
      ) : (
        <p className="success-message">Thank you for registering, {formData.username}!</p>
      )}
    </div>
  );
}

export default Register;
