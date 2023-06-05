// Handle registration request
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Perform registration logic and save user credentials
  // ...
// W chatgpt moment
  // If registration is successful, send success response
  res.json({ success: true, message: 'Account created successfully!' });
});

// Handle login request
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Perform authentication logic and validate user credentials
  // ... If Error 404 login incorrect

  // If authentication is successful, generate a session/token and send it to the client
  const sessionToken = generateSessionToken();
  res.cookie('sessionToken', sessionToken); // Store the session token in a cookie
  res.json({ success: true, message: 'Login successful!' });
});
