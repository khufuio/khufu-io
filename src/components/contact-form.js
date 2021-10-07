import React from 'react'

import { FormattedMessage } from 'react-intl'

const ContactForm = () => {
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title"><FormattedMessage id='page.contact.form.subtitle' /></h4>
            <h2 className="sec_title"><FormattedMessage id='page.contact.form.title' /></h2>
            <p className="sec_desc"><FormattedMessage id='page.contact.form.description' /></p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-10 offset-md-1">
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              netlify
              name="contact"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <FormattedMessage id='page.contact.form.firstname'>
                    {
                      (msg) => <input
                        className="input-form required"
                        type="text"
                        name="f_name"
                        id="f_name"
                        required
                        placeholder={`${msg} *`}
                      />
                    }
                  </FormattedMessage>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <FormattedMessage id='page.contact.form.lastname'>
                    {
                      (msg) => <input
                        className="input-form required"
                        type="text"
                        name="l_name"
                        id="l_name"
                        required
                        placeholder={`${msg} *`}
                      />
                    }
                  </FormattedMessage>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <FormattedMessage id='page.contact.form.email'>
                    {
                      (msg) => <input
                        className="input-form required"
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder={`${msg} *`}
                      />
                    }
                  </FormattedMessage>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <FormattedMessage id='page.contact.form.phone'>
                    {
                      (msg) => <input
                        className="input-form required"
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder={msg}
                      />
                    }
                  </FormattedMessage>
                </div>
                <div className="col-lg-12 col-sm-12">
                  <FormattedMessage id='page.contact.form.message'>
                    {
                      (msg) => <textarea
                        className="input-form required"
                        name="con_message"
                        id="con_message"
                        required
                        placeholder={`${msg} *`}
                      />
                    }
                  </FormattedMessage>
                </div>
              </div>
              <button
                className="common_btn red_bg"
                type="submit"
                id="con_submit"
              >
                <span><FormattedMessage id='page.contact.form.action.send' /></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
