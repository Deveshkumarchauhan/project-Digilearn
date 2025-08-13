import React from "react";
import "./Frame.css";
import contact from "../../../assets/contact us 1.svg";

const Frame = () => {
  return (
    <>
      <div className="contact-container">
        <div className="contact-text">
          <h1>
            CONTACT
            <br />
            US
          </h1>
        </div>
        <div className="contact-image">
          <img src={contact} alt="Contact Us" />
        </div>
      </div>

      {/* Assistance Form Section */}
      <div className="assist-wrap">
        <h1 className="assist-title">Do you require assistance?</h1>

        <div className="assist-card">
          <form className="assist-form" autoComplete="off">
            {/* Row: name + email */}
            <div className="row row-two">
              <input
                type="text"
                placeholder="Full Name"
                className="pill-input"
              />
              <input
                type="email"
                placeholder="E-mail Address"
                className="pill-input"
              />
            </div>

            {/* Row: select */}
            <div className="row">
              <div className="select-field">
                <select defaultValue="" className="pill-input select-input">
                  <option value="" disabled>
                    What can we help you with ?
                  </option>
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing</option>
                  <option>Feedback</option>
                </select>
              </div>
            </div>

            {/* Row: message */}
            <div className="row">
              <textarea
                placeholder="Type message here..."
                className="area-input"
                rows={7}
              />
            </div>

            {/* Button */}
            <button className="send-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Frame;
