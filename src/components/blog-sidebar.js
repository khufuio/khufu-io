import React, { Fragment } from 'react'

const BlogSidebar = ({ articles, articleI }) => {
  return (
    <Fragment>
      <aside className="widget recent_posts">
        <h3 className="widget_title">Latest Posts</h3>
        <div className="khufu_post_widget">
          {articles.map(({ title, image, url }, index) => parseInt(index) === parseInt(articleI)
            ? <></>
            : (
              <div className="mpw_item" key={index}>
                <img src={image} alt="" />
                <a href={url}>{title}</a>
              </div>
              ))}
        </div>
      </aside>
    </Fragment>
  )
}

export default BlogSidebar
