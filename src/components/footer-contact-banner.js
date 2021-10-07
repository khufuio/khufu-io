import React from 'react'
import { Link } from 'gatsby'

import { FormattedMessage } from 'react-intl'

const FooterContactBanner = ({ extraClassName, buttonClass }) => {
  return (
    <section className={`commonSection ${extraClassName}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-sm-8 col-md-9">
            <h2 className="sec_title white"><FormattedMessage id='component.footer_contact_banner.title' /></h2>
          </div>
          <div className="col-lg-3  col-sm-4 col-md-3 text-right">
            <Link to="/contact" className={`common_btn ${buttonClass}`}>
              <span><FormattedMessage id='component.footer_contact_banner.action' /></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterContactBanner
