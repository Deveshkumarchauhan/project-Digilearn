import React, { useState } from "react";
import "./FramePymentgetway.css";
import image16 from "../../../assets img/image 16.svg";
import image17 from "../../../assets img/image 17.svg";
import Rectangle1133 from "../../../assets img/Rectangle 1133.svg";
export default function CheckoutPage() {
  const [payment, setPayment] = useState("card");

  return (
    <div className="checkout-container">
      {/* Title + Breadcrumb */}
      <h2 className="checkout-title">
        Checkout Page
        <span className="checkout-breadcrumb">
          Details &gt; Shopping Cart &gt;<span className="blue"> Checkout</span>
        </span>
      </h2>

      <div className="checkout-wrapper">
        {/* Left Side */}
        <div className="checkout-form">
          {/* Country + State */}
          <div className="form-row">
            <div className="form-group">
              <label>Country</label>
              <input type="text" placeholder="Enter Country" />
            </div>
            <div className="form-group">
              <label>State/Union Territory</label>
              <input type="text" placeholder="Enter State" />
            </div>
          </div>

          <h3 className="section-title">Payment Method</h3>

          {/* Credit / Debit Card */}
          <div className={`payment-box ${payment === "card" ? "active" : ""}`}>
            <label className="radio-label">  <span className="payment-title">
              <input
                type="radio"
                
                name="payment"
                value="card"
                checked={payment === "card"}
                onChange={() => setPayment("card")}
              />
             Credit/Debit Card</span>
              <img
                src={image17}
                alt="MasterCard"
                className="card-logo"
              />
            </label>

            {payment === "card" && (
              <div className="card-details">
                <div className="form-group">
                  <label>Name of Card</label>
                  <input type="text" placeholder="Name of card" />
                </div>
                <div className="form-group">
                  <label>Card Number</label>
                  <input type="text" placeholder="Card Number" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Expiry Date</label>
                    <input type="text" placeholder="MM/YY" />
                  </div>
                  <div className="form-group">
                    <label>CVC/CVV</label>
                    <input type="text" placeholder="CVC" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PayPal */}
          <div
            className={`payment-box ${payment === "paypal" ? "active" : ""}`}
          >
            <label className="radio-label">  <span className="payment-title">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={payment === "paypal"}
                onChange={() => setPayment("paypal")}
              />
              PayPal</span>
              <img
                src={image16}
                alt="PayPal"
                className="paypal-logo"
              />
            </label>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-details">
          <h3 className="section-title">Order Details</h3>

          <div className="order-item">
            <img src={Rectangle1133} alt="course" />
            <div>
              <p className="item-title">
                Introduction to User Experience Design
              </p>
              <p className="item-subtitle">155 Lectures • 22 Hours</p>
              <p className="item-price">$45.00</p>
            </div>
          </div>

          {/* Coupon */}
          <div className="coupon">
            <input type="text" placeholder="Enter Coupon Code" />
            <button>Apply</button>
          </div>

          {/* Price Summary */}
          <div className="price-summary">
            <p>
              <span>Price</span>
              <span>$300.00</span>
            </p>
            <p>
              <span>Discount</span>
              <span>-$10.00</span>
            </p>
            <p>
              <span>Tax</span>
              <span>$20.00</span>
            </p>
            <p className="total">
              <span>Total</span>
              <span>$290.00</span>
            </p>
          </div>

          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
}
