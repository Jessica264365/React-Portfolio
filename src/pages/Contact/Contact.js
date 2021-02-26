import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <main class="container ">
      <section class="row">
        <section class="col-lg-8 col-md-8 col-xs-12 contactsubmit">
          <h1>Contact</h1>
          <hr />
          <form action="mailto:jessicamorrison.webdev@gmail.com" method="post">
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Full Name"
                name="name"
              />
            </div>
            <div class="form-group">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                placeholder="youremail@youremail.com"
                name="email"
              />
            </div>
            <div class="form-group">
              <label>Message</label>

              <textarea class="form-control" rows="3" name="message"></textarea>
            </div>

            <button type="submit" class="btn btn-primary mb-2" value="Submit">
              Submit
            </button>
          </form>
        </section>
      </section>
    </main>
  );
}
export default Contact;
