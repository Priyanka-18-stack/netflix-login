import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Logo from "../assets/netflix-logo.png.svg";
import bgImage from "../assets/netflix-bg.jpg";
import './LoginPage.css';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [serverMessage, setServerMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const validateForm = () => {
    let isValid = true;
    setEmailError('');
    setPasswordError('');
    setServerMessage('');

    // Simple email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    // Password minimum length check
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    try {
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });
      setServerMessage(response.data.message);
      setMessageType('success');
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);

    } catch (error) {
      if (error.response && error.response.data.message) {
        setServerMessage(error.response.data.message);
        setMessageType('error')// Invalid credentials
      } else {
        setServerMessage("Something went wrong. Please try again.")
        setMessageType('error');
      }
    }
  };

  return (
    <div className="login">
      <div
        className="login__background"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <img src={Logo} alt="Netflix" className="login__logo" />
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        <div className="login__form">
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {emailError && <p className="error">{emailError}</p>}

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {passwordError && <p className="error">{passwordError}</p>}

            <button type="submit">Sign In</button>
          </form>
          {serverMessage && (
            <p className={messageType === 'success' ? 'message-success' : 'message-error'}>
              {serverMessage}
            </p>
          )}



          <p>
            <span>New to Netflix?</span> <a href="/signup">Sign up now.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
