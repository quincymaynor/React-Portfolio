import { useState } from 'react';

function Contact(props) {
  const [input, setInput] = useState('');

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
      <h1 class="title4">Contact Me</h1>
      <div>
        <form class="contactme" id="contactme" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={input}
            name="name"
            className="name-input"
          ></input>
          <input
            type="text"
            placeholder="Email"
            value={input}
            name="email"
            className="email-input"
          ></input>
          <input
            type="text"
            placeholder="Message"
            value={input}
            name="message"
            className="message-input"
          ></input>
          <button className="contact-button">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact;
