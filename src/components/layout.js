import React, { Fragment, useContext, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { MenuContext } from '@/context/menu-context'
import PopupMenu from '@/components/popup-menu'
import { Link as ScrollLink } from 'react-scroll'

import { IntlProvider } from 'react-intl'

import 'typeface-oswald'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/css/animate.css'
import '@/css/font-awesome.min.css'
import '@/css/icons.css'
import '@/css/preset.css'
import '@/css/theme.css'
import '@/css/responsive.css'

import { translations } from '@/data'

const nlanguage = typeof window !== 'undefined' ? (window.navigator.language.split(/[-_]/)[0] || 'en') : 'en'
const language = ['en', 'fr', 'es'].includes(nlanguage) ? nlanguage : 'en'

const Layout = ({ PageTitle, children }) => {
  const { menuStatus } = useContext(MenuContext)
  const [scrollTop, setScrollTop] = useState(false)

  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true)
    } else if (window.scrollY < 70) {
      setScrollTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollTop)
    return () => {
      window.removeEventListener('scroll', handleScrollTop)
    }
  }, [scrollTop])

  return (
    <IntlProvider messages={translations[language]} locale={language} defaultLocale='en'>
      <Helmet>
        <title>
          Khufu - {PageTitle}
        </title>
      </Helmet>
      <div id="wrapper">{children}</div>
      {menuStatus === true ? <PopupMenu /> : null}

      {scrollTop === true
        ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top showit"
        >
          <i className="fa fa-angle-double-up"></i>
        </ScrollLink>
          )
        : null}
    </IntlProvider>
  )
}

export default Layout
