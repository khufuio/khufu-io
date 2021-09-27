import React from 'react'
import { Link } from 'gatsby'

const ServiceCardTwo = ({ data }) => {
  const { url, icon, title } = data
  return (
    <Link className="icon_box_1 text-center" to={url}>
      <div className="flipper">
        <div className="front">
          <i style={{
            fontStyle: 'inherit'
          }}>{icon}</i>
          <h3>{title}</h3>
        </div>
        <div className="back">
          <i style={{
            fontStyle: 'inherit'
          }}>{icon}</i>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCardTwo
