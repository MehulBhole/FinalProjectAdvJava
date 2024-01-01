import React from "react";
import "../Css/Contactus.css";
export function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="maincontactus">
    <div className="containercontact">
      <h1>Connect With us</h1>
      <p>
        We would love to respond to your queries and help you succeed. <br />
        Feel free to get in touch with us
      </p>
      <div className="contact-box">
        <div className="contact-left">
          <h3>Send your Request</h3>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-group">
                <label>Phone</label>
                <input type="number" placeholder="Enter your Number" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>E-mail</label>
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div className="input-group">
                <label>Subject</label>
                <input type="text" placeholder="Enter Your Subject" />
              </div>
            </div>

            <label>Message</label>
            <textarea rows="5" placeholder="Text Area"></textarea>
            <button className="btntag" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="contact-right">
          <h3>Reach Us</h3>
          <table>
            <tbody>
              <tr>
                <td>Email</td>
                <td>Contactus@example.com</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>9876543210</td>
              </tr>
              <tr>
                <td>Fax</td>
                <td>+1-907-555-1234 for the US and +44-20-1224-3456 for the UKDelhi</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>
                  Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522
                  (257) 563-7401 Iris Watson P.O. Box 283 8562 Fusce Rd.
                  Frederick Nebraska 20620 (372) 587-2335 Celeste Slater
                  606-3727 Ullamcorper. Street Roseville NH 11523 (786) 713-8616
                </td>
              </tr>
             
              <tr>
                <td></td>
                <td className="fontsize"><b> “Exceeding your expectations, consistently.” “We don't just sell products, we provide solutions.” “Your happiness is our success.” “We're here to help you, every step of the way.”</b></td>
              </tr>
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
}
