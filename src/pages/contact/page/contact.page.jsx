import React from "react";

const Contact = () => {
  return (
    <>
      {/* ...::::Start Contact Section:::... */}
      <div className="contact-section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4">
              {/* Start Contact Details */}
              <div
                className="contact-details-wrapper section-top-gap-100"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <div className="contact-details">
                  {/* Start Contact Details Single Item */}
                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <a href="tel:+012345678102">+012 345 678 102</a>
                      <a href="tel:+012345678102">+012 345 678 102</a>
                    </div>
                  </div>{" "}
                  {/* End Contact Details Single Item */}
                  {/* Start Contact Details Single Item */}
                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <a href="mailto:urname@email.com">urname@email.com</a>
                      <a href="http://www.yourwebsite.com">
                        www.yourwebsite.com
                      </a>
                    </div>
                  </div>{" "}
                  {/* End Contact Details Single Item */}
                  {/* Start Contact Details Single Item */}
                  <div className="contact-details-single-item">
                    <div className="contact-details-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="contact-details-content contact-phone">
                      <span>Address goes here,</span>
                      <span>street, Crossroad 123.</span>
                    </div>
                  </div>{" "}
                  {/* End Contact Details Single Item */}
                </div>
                {/* Start Contact Social Link */}
                <div className="contact-social">
                  <h4>Follow Us</h4>
                  <ul>
                    <li>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>{" "}
                {/* End Contact Social Link */}
              </div>{" "}
              {/* End Contact Details */}
            </div>
            <div className="col-lg-8">
              <div
                className="contact-form section-top-gap-100"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Get In Touch</h3>
                <form
                  id="contact-form"
                  action="assets\mail\contact.php"
                  method="POST"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="default-form-box mb-20">
                        <label for="contact-name">Name</label>
                        <input name="name" type="text" id="contact-name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="default-form-box mb-20">
                        <label for="contact-email">Email</label>
                        <input name="email" type="email" id="contact-email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="default-form-box mb-20">
                        <label for="contact-subject">Subject</label>
                        <input
                          name="subject"
                          type="text"
                          id="contact-subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="default-form-box mb-20">
                        <label for="contact-message">Your Message</label>
                        <textarea
                          name="message"
                          id="contact-message"
                          cols="30"
                          rows="10"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button className="contact-submit-btn" type="submit">
                        SEND
                      </button>
                    </div>
                    <p className="form-messege"></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ...::::ENd Contact Section:::... */}
    </>
  );
};

export default Contact;
