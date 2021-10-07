import React from 'react'

import { FormattedMessage } from 'react-intl'

const ServiceCardOne = ({ data }) => {
  const { title, text, icon } = data
  return (
    <div className="icon_box_2 text-center">
      <h3><FormattedMessage id={title} /></h3>
      <p><FormattedMessage id={text} /></p>
      <div className="iconWrap">
        <i style={{
          fontStyle: 'inherit'
        }}>{icon}</i>
      </div>
    </div>
  )
}

export default ServiceCardOne
