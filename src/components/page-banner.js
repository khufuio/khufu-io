import React from 'react'

import { FormattedMessage } from 'react-intl'

const PageBanner = ({ title, name, bg }) => {
  return (
    <section className="pageBanner">
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="banner_content text-center">
              <h4>
                <a href="/">khufu</a> - <FormattedMessage id={name} />
              </h4>
              <h2><FormattedMessage id={title} /></h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PageBanner
