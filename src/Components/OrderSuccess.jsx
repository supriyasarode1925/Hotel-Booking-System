
import React from 'react';
import './OrderSuccess.css';

export const OrderSuccess = () => {
  return (
    <div className="success-page-container">
      {/* Optional: Add floating abstract background shapes */}
      <div className="bg-bubble bubble-1"></div>
      <div className="bg-bubble bubble-2"></div>

      <div className="success-card">
        <div className="icon-container">
          {/* Animated Green Checkmark */}
          <svg className="checkmark" xmlns="http://w3.org" viewBox="0 0 52 52">
            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        
        <h1>Order Confirmed!</h1>
        <p className="thank-you-msg">Thank you for your purchase. Your order has been received and is being processed.</p>
        
        <div className="order-details">
          <p>Order ID: <strong>#1029485</strong></p>
          <p>Estimated Delivery: <strong>October 30, 2026</strong></p>
        </div>

        <button className="continue-btn" onClick={() => window.location.href = '/'}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
