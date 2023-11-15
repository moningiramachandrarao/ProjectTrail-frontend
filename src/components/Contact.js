import React, { useState } from 'react';

function Contact() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleMailto = () => {
    const mailtoLink = `mailto:edrivespacecars@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center yellow">Contact Us</h1>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Subject:</label>
        <input
          type="text"
          id="name"
          className="form-control"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea
          id="message"
          className="form-control"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <button onClick={handleMailto} className="btn mt-3" style={{ backgroundColor: "#ffac3c", color: "#282c4c" }}>Send Email</button>
    </div>
  );
}

export default Contact;
