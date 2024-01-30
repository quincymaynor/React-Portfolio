import * as React from 'react';
import { useState } from 'react';
import { validateEmail } from "../../utils/helpers";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Footer from '../Footer';

function Contact(props) {
  const [input, setInput] = useState('');

  // const handleChange = (e) => {
  //   const { target } = e;
  //   const inputType = target.name;
  //   const inputValue = target.value;

  //   if (inputType === "username") {
  //     setInput(inputValue);
  //     if (!inputValue) {
  //       setErrorMessage("Name is required");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else if (inputType === "email") {
  //     setInput(inputValue);
  //     if (!inputValue) {
  //       setErrorMessage("Email is required");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else if (inputType === "message") {
  //     setInput(inputValue);
  //     if (!inputValue) {
  //       setErrorMessage("Message is required");
  //     } else {
  //       setErrorMessage("");
  //     }
  //   } else {
  //     setErrorMessage(`Unkown Input ${inputValue}`);
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!username) {
  //     setErrorMessage("Name is required");
  //     return;
  //   } else if (!validateEmail(email) && !email) {
  //     setErrorMessage("Valid email is required");
  //     return;
  //   } else if (!message) {
  //     setErrorMessage("Message is required");
  //     return;
  //   }

  //   setInput('');
  //   alert(
  //     `Thank you for reaching out, ${userName}!`
  //   );
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      name: input.name,
      email: input.email,
      message: input.message,
    });

    setInput('');
  };

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
      >
        <Box>
          <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            size="small"
          />
          <TextField 
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            size="small" 
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={10}
            size="small"
          />
        </Box>
        <Button variant="text" color="primary">Submit</Button>
      </Box>
      <Footer/>
    </>
  )
}

export default Contact;


// import { useState } from "react";
// import { validateEmail } from "../utils/helpers";

// export default function Contact() {
//   const [email, setEmail] = useState("");
//   const [userName, setUserName] = useState("");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleInputChange = (e) => {
//     const { target } = e;
//     const inputType = target.name;
//     const inputValue = target.value;

//     if (inputType === "email") {
//       setEmail(inputValue);
//       if (!inputValue) {
//         setErrorMessage("Email is required");
//       } else {
//         setErrorMessage("");
//       }
//     } else if (inputType === "userName") {
//       setUserName(inputValue);
//       if (!inputValue) {
//         setErrorMessage("Name is required");
//       } else {
//         setErrorMessage("");
//       }
//     } else if (inputType === "message") {
//       setMessage(inputValue);
//       if (!inputValue) {
//         setErrorMessage("Message is required");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       setErrorMessage(`Unkown Input ${inputValue}`);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!userName) {
//       setErrorMessage("Name is required");
//       return;
//     } else if (!validateEmail(email) && !email) {
//       setErrorMessage("Email is required");
//       return;
//     } else if (!message) {
//       setErrorMessage("Message is required");
//       return;
//     }

//     setUserName("");
//     setEmail("");
//     setMessage("");
//     setErrorMessage("");
//     alert(
//       `Thanks ${userName} for reaching out, I will be in contact with you shortly!`
//     );
//   };

//   return (
//     <>
//       <div className="pageHeaderBox">
//         <h2 className="pageHeader">Contact Me &#128172;</h2>
//       </div>
//       <div className="exampleForm">
//         Example form. Email me <a href="mailto: bradylange99@gmail.com">here</a>
//       </div>
//       <div className="formBox">
//         <form className="form" onSubmit={handleFormSubmit}>
//           <h2 className="formHeaders">Name:</h2>
//           <input
//             value={userName}
//             name="userName"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="name"
//           />
//           <h2 className="formHeaders">Email:</h2>
//           <input
//             value={email}
//             name="email"
//             onChange={handleInputChange}
//             type="email"
//             placeholder="email"
//           />
//           <h2 className="formHeaders">Message:</h2>
//           <textarea
//             rows={15}
//             value={message}
//             name="message"
//             onChange={handleInputChange}
//             type="text"
//             placeholder="message"
//           />
//           <button type="submit">Submit</button>
//         </form>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }




// import React, { useState, useRef } from "react";
// import { useForm } from "react-hook-form";
// // function to create a contact form and setting to get err notice
// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const form = useRef();
//   const [done, setDone] = useState(false);
//   const [notDone, setNotDone] = useState(false);
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setDone(false);
//     setNotDone(false);
//   };

//   const onSubmit = async (data) => {
//     const { name, email, message } = data;

//     console.log("Name: ", name);
//     console.log("Email: ", email);
//     console.log("Message: ", message);
//   };
//   console.log("errors", errors);

//   return (
//     <div className="form-container pt-4">
//       <h2>Contact me</h2>
//       <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div>
//           <input
//             type="text"
//             name="name"
//             {...register("name", {
//               required: { value: true, message: "Please enter your name" },
//               maxLength: {
//                 value: 30,
//                 message: "Please use 30 characters or less",
//               },
//             })}
//             className="input-name"
//             placeholder="Name"
//             onChange={handleChange}
//           ></input>
//           {errors.name && (
//             <span className="errorMessage">{errors.name.message}</span>
//           )}
//         </div>
//         <br />
//         <br />
//         <div>
//           <input
//             type="email"
//             name="email"
//             {...register("email", {
//               required: true,
//               pattern:
//                 /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
//             })}
//             className="input-email"
//             placeholder="Email"
//             onChange={handleChange}
//           ></input>
//           <br />
//           {errors.email && (
//             <span className="errorMessage">
//               Please enter a valid email address
//             </span>
//           )}
//         </div>
//         <br />
//         <br />
//         <div>
//           <textarea
//             rows={3}
//             name="message"
//             {...register("message", {
//               required: true,
//             })}
//             className="input-message"
//             placeholder="Message"
//             type="description"
//             onChange={handleChange}
//           ></textarea>
//           <br />
//           {errors.message && (
//             <span className="errorMessage">Please enter a message</span>
//           )}
//         </div>
//         <br />
//         <button type="submit" onSubmit={handleSubmit(onSubmit)} noValidate>
//           Send
//         </button>
//         <span className="done">
//           {done &&
//             "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}
//         </span>
//       </form>
//     </div>
//   );
// }

