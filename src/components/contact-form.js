import React from 'react'

const ContactForm = () => {
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">Contact With Us</h4>
            <h2 className="sec_title">Write Us a Message</h2>
            <p className="sec_desc">We are committed to providing our customers with exceptional service while<br />offering our employees the best training.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="f_name"
                    id="f_name"
                    required
                    placeholder="First Name *"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="text"
                    name="l_name"
                    id="l_name"
                    required
                    placeholder="Last Name *"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form required"
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Email Address *"
                  />
                </div>
                <div className="col-lg-6 col-sm-6">
                  <input
                    className="input-form"
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="col-lg-12 col-sm-12">
                  <textarea
                    className="input-form required"
                    name="con_message"
                    id="con_message"
                    required
                    placeholder="Write Message *"
                  ></textarea>
                </div>
              </div>
              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
              >
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
