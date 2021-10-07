import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import MenuContextProvider from '@/context/menu-context'
import Services from '@/components/service-card-5'
import CardPrice from '@/components/card-price'
// import ServiceOffers from '@/components/services-offers'
import HeaderTwo from '@/components/header-two'
import FooterContactBanner from '@/components/footer-contact-banner'

import { Link } from 'gatsby'

import dedicatedBg from '@/images/bg/m-fullapp.jpg'

import { FormattedMessage } from 'react-intl'

const services = [
  {
    title: 'page.services.full_app.services.1.title',
    text: 'page.services.full_app.services.1.content',
    icon: '💡'
  },
  {
    title: 'page.services.full_app.services.2.title',
    text: 'page.services.full_app.services.2.content',
    icon: '🎨'
  },
  {
    title: 'page.services.full_app.services.3.title',
    text: 'page.services.full_app.services.3.content',
    icon: '💻'
  }
]

const services2 = [
  {
    title: 'page.services.full_app.services.4.title',
    text: 'page.services.full_app.services.4.content',
    icon: '🔨'
  },
  {
    title: 'page.services.full_app.services.5.title',
    text: 'page.services.full_app.services.5.content',
    icon: '🏢'
  }
]

const DedicatedResources = () => {
  return (

    <MenuContextProvider>
      <Layout PageTitle="Full App Development">
        <HeaderTwo />
        <PageBanner title="page.services.full_app.header.title" name="page.services.full_app.header.subtitle" bg={dedicatedBg} />
        <Services services={services} services2={services2} />
        {/* <ServiceOffers /> */}
        <CardPrice title='page.services.full_app.offers.title' offers={[
          {
            name: 'page.services.full_app.offers.1.title',
            services: [
              <span key='0'><span style={{ marginRight: 10 }}>💡</span><FormattedMessage id='page.services.full_app.offers.product' /></span>,
              <span key='2'><span style={{ marginRight: 10 }}>🎨</span><FormattedMessage id='page.services.full_app.offers.ux' /></span>,
              <span key='3'><span style={{ marginRight: 10 }}>💻</span><FormattedMessage id='page.services.full_app.offers.dev' /></span>
            ],
            actionLabel: 'page.services.full_app.offers.1.action'
          },
          {
            name: 'page.services.full_app.offers.2.title',
            services: [
              <span key='0'><span style={{ marginRight: 10 }}>💡</span><FormattedMessage id='page.services.full_app.offers.product' /></span>,
              <span key='2'><span style={{ marginRight: 10 }}>🎨</span><FormattedMessage id='page.services.full_app.offers.ux' /></span>,
              <span key='3'><span style={{ marginRight: 10 }}>💻</span><FormattedMessage id='page.services.full_app.offers.dev' /></span>,
              <span key='4'><span style={{ marginRight: 10 }}>🔨</span><FormattedMessage id='page.services.full_app.offers.ci' /></span>,
              <span key='5'><span style={{ marginRight: 10 }}>🏢</span><FormattedMessage id='page.services.full_app.offers.devops' /></span>
            ],
            actionLabel: 'page.services.full_app.offers.2.action'
          },
          {
            name: 'page.services.full_app.offers.3.title',
            services: [
              <span key='1'><span style={{ marginRight: 10 }}>📈</span><FormattedMessage id='page.services.full_app.offers.audit' /></span>,
              <span key='2'><span style={{ marginRight: 10 }}>🎨</span><FormattedMessage id='page.services.full_app.offers.ux' /></span>,
              <span key='3'><span style={{ marginRight: 10 }}>💻</span><FormattedMessage id='page.services.full_app.offers.dev' /></span>,
              <span key='6'><span style={{ marginRight: 10 }}>🆙</span><FormattedMessage id='page.services.full_app.offers.opti' /></span>
            ],
            actionLabel: 'page.services.full_app.offers.3.action'
          }
        ]} />
        <div style={{
          marginBottom: '50px',
          textAlign: 'center'
        }}>
          <FormattedMessage id='page.services.full_app.footer.text' /> <Link className='quotesref' href='https://quotes.khufu.io' target='_blank' referrer='np-referrer'><FormattedMessage id='page.services.full_app.footer.action' /></Link>
        </div>
        <FooterContactBanner extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default DedicatedResources
