import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_rg0rhtd",
      "template_4j7xifu",
      e.target,
      "user_vrAXqipX6Doxnl5gdkliT"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
  alert("your email send successfully");
}

const Contact = () => {
  return (
    <div className="contact-img mt-5 ps-5 pt-5 pe-5">
      <h3 className="text-center" style={{ color: "green" }}>
        Con<span style={{ color: "salmon" }}>t</span>act with{" "}
        <span style={{ color: "salmon" }}>m</span>e..
      </h3>
      <div className="row">
        <div className="col-md-6">
          <p className="mt-5 pt-5" style={{ fontWeight: "bold", color: "green" }}>
            Event-maker.com, Inc. is an American multinational technology
            company which focuses on e-commerce, cloud computing, digital
            streaming, and artificial intelligence. It is one of the Big Five
            companies in the U.S. information technology industry, along with
            Google, Apple, Microsoft, and Facebook
          </p>
        </div>
        <div className="col-md-6">
          <form className="contact-form p-3 " onSubmit={sendEmail}>
            <input
              className="form-control"
              type="hidden"
              name="contact_number"
            />
            <br />
            <label>Name</label>
            <input className="form-control" type="text" name="user_name" />
            <br />
            <label>Email</label>
            <input className="form-control" type="email" name="user_email" />
            <br />
            <label>Message</label>
            <textarea className="form-control" name="message" />
            <br />
            <input className="form-control" type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
