import * as React from 'react';
import { useState } from 'react';
import { validateEmail } from "../../utils/helpers";
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Footer from '../Footer';

function Contact() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "username") {
      setUsername(inputValue);
      if (!inputValue) {
        setErrorMessage("Name is required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "email") {
      setEmail(inputValue);
      if (!inputValue) {
        setErrorMessage("Email is required");
      } else {
        setErrorMessage("");
      }
    } else if (inputType === "message") {
      setMessage(inputValue);
      if (!inputValue) {
        setErrorMessage("Message is required");
      } else {
        setErrorMessage("");
      }
    } else {
      setErrorMessage(`Unkown Input ${inputValue}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMessage("Name is required");
      return;
    } else if (!email) {
      setErrorMessage("Email is required");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage("Invalid email");
      return;
    } else if (!message) {
      setErrorMessage("Message is required");
      return;
    } else if (username && validateEmail(email) && email && message) {
      setSuccessMessage(`Thank you for reaching out, ${username}! If your message is time sensitive, please email me with the link below`);
    }

    console.log(username);
    console.log(email);
    console.log(message);

    setUsername('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  }

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '75%' },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Box>
          <TextField 
            id="username"
            value={username}
            onChange={handleChange}
            label="Name" 
            variant="outlined"
            size="small"
          />
          <TextField 
            id="email"
            value={email}
            onChange={handleChange}
            label="Email" 
            variant="outlined"
            size="small" 
          />
          <TextField
            id="message"
            value={message}
            onChange={handleChange}
            label="Message"
            multiline
            rows={10}
            size="small"
          />
        </Box>
        <Button variant="text" color="primary" type="submit">Submit</Button>
        {errorMessage && (
          <Alert severity="error">{errorMessage}</Alert>
        )}
        {successMessage && (
          <Alert severity="success">{successMessage}</Alert>
        )}
      </Box>
      <Footer/>
    </>
  )
}

export default Contact;