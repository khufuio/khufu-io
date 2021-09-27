import React from 'react'
const PortfolioCard = ({ data }) => {
  const { image, title, url, urlExt } = data

  return (
    <div className={'singlefolio'}>
      <img src={image} alt={title} />
      <div className="folioHover">
        <h4> { url
          ? <a href={url}>{title}</a>
          : urlExt
            ? <a href={urlExt} target="_blank" rel="noreferrer">{title}</a>
            : <span>{title}</span>
        }</h4>
      </div>
    </div>
  )
}

export default PortfolioCard
