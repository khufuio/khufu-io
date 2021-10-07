import React, { useState, useEffect, useContext } from 'react'
import { LogoImage, NavLinks } from '@/data'
import { Col, Container, Row } from 'react-bootstrap'
// import { SearchContext } from '@/context/search-context'
import { MenuContext } from '@/context/menu-context'
import { Link } from 'gatsby'

import { FormattedMessage } from 'react-intl'

const HeaderTwo = () => {
  const [sticky, setSticky] = useState(false)
  // const { searchStatus, updateSearchStatus } = useContext(SearchContext)
  const { menuStatus, updateMenuStatus } = useContext(MenuContext)
  /* const handleSearchClick = e => {
    e.preventDefault()
    updateSearchStatus(!searchStatus)
  } */
  const handleMenuClick = e => {
    e.preventDefault()
    updateMenuStatus(!menuStatus)
  }

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true)
    } else if (window.scrollY < 70) {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sticky])

  return (
    <header
      className={`header_01 black_color ${
        sticky === true ? 'fixedHeader' : null
      }`}
      id="header"
    >
      <Container fluid>
        <Row className="justify-content-between">
          <Col className="col-6" lg={2} md={3} sm={3}>
            <div className="logo">
              <Link to="/">
                <img src={LogoImage.dark} alt="khufu_logo" />
              </Link>
            </div>
          </Col>
          <Col lg={8} sm={8} md={7} className="d-none d-lg-block ">
            <nav className="mainmenu text-center">
              <ul>
                {NavLinks.map((links, index) => {
                  return (
                    <li
                      key={index}
                      className={`${
                        undefined !== links.subItems
                          ? 'menu-item-has-children'
                          : ''
                      }`}
                    >
                      <Link to={links.url}><FormattedMessage id={links.name} /></Link>
                      {undefined !== links.subItems
                        ? (
                        <ul className="sub-menu">
                          {links.subItems.map((subLinks, index) => (
                            <li key={index}>
                              <Link to={subLinks.url}><FormattedMessage id={subLinks.name} /></Link>
                            </li>
                          ))}
                        </ul>
                          )
                        : null}
                    </li>
                  )
                })}
              </ul>
            </nav>
          </Col>
          <Col lg={2} md={2} sm={4} className="col-6">
            <div className="navigator text-right">
              <a
                href="#"
                className="menu mobilemenu d-none d-md-none d-lg-none"
              >
                <i className="mei-menu"></i>
              </a>
              <a
                id="open-overlay-nav"
                className="menu hamburger"
                onClick={handleMenuClick}
                href="#"
              >
                <i className="mei-menu"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default HeaderTwo
