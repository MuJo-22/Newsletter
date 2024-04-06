import React, { useState } from 'react';
import axios from 'axios'; // for making HTTP requests

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // You can replace the URL with your backend API endpoint
      await axios.post('http://192.168.137.1:3001', { email });
      alert('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      alert('Subscription failed. Please try again later.');
    }
  };

  return (
    <div style={{ backgroundColor: 'blue', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <div>
          <h2 style={{ color: 'white' }}>Subscribe to Newsletter</h2>
          <input
            type="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            style={{ padding: '10px', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>Subscribe now</button>
        </div>
      </form>
    </div>
  );
};
export default NewsletterForm;
