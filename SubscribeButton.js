import React from 'react';

const SubscribeButton = () => {
  const handleSubscribe = () => {
    // You can add code here to handle subscription logic, like sending a request to your backend
    console.log('Subscribed!');
  };

  return (
    <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={handleSubscribe}>
      Subscribe Now
    </button>
  );
};

export default SubscribeButton;
