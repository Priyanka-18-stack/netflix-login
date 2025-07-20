const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());
const fakeUser = {
  email: 'user@example.com',
  password: 'password123'
}
app.get('/', (req, res) => {
  res.send('Server is running!');
});
app.post('/login', (req, res) => {
  const { email, password } = req.body;
   if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  if (email === fakeUser.email && password === fakeUser.password) {
    return res.status(200).json({ message: 'Login successful!' });
  }

  return res.status(401).json({ message: 'Invalid email or password.' });
});
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});