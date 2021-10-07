import React from 'react'
import { LogoImage } from '@/data'

import { FormattedMessage } from 'react-intl'

const Footer = () => {
  const { light } = LogoImage
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="khufu_logo" />
              </a>
              <p>
                <FormattedMessage id='footer.resume' />
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title"><FormattedMessage id='footer.menu.contact' /></h3>
              <p>📞 +971 50 365 1761</p>
              <p>📧 <a href="mailto:hello@khufu.io">hello@khufu.io</a></p>
              <p>🌍 <a href="khufu.io">khufu.io</a></p>
              <p>📍 Dubai Oasis Silicon<br />Dubai, United Arab Emirates</p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title"><FormattedMessage id='footer.menu.social' /></h3>
              <ul>
                <li>
                  <a target="_blank" href="https://twitter.com/khufuio" rel="noreferrer">
                    <i className="fa fa-twitter"></i>Twitter
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com/khufuio/" rel="noreferrer">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.youtube.com/channel/UCsAKeHbY3m6i4rbkZ17INag" rel="noreferrer">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{' '}
              <a href="khufu.io">khufu.io</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
