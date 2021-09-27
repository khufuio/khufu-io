import React from 'react'
import { Link } from 'gatsby'

const BlogCard = ({ data }) => {
  const { image, title, url, date } = data
  return (
    <div className="latestBlogItem">
      <div className="lbi_thumb">
        <img src={image} alt={title} />
      </div>
      <Link to={url}>
        <div className="lbi_details">
          <span className="lbid_date">
            {date}
          </span>
          <h2>
            {title}
          </h2>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
