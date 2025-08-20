import React from "react";
import "./FrameComplate.css";

export default function OrderComplete() {
  return (
    <div className="order-container">
      <div className="checkmark"></div>
      <h1>Order Complete</h1>
      <p>You Will Receive a confirmation email soon!</p>
    </div>
  );
}
