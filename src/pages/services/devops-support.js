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

import dedicatedBg from '@/images/bg/m-devops.jpg'

import { FormattedMessage } from 'react-intl'

const services = [
  {
    title: 'page.services.devops.services.1.title',
    text: 'page.services.devops.services.1.content',
    icon: '🔔'
  },
  {
    title: 'page.services.devops.services.2.title',
    text: 'page.services.devops.services.2.content',
    icon: '📊'
  },
  {
    title: 'page.services.devops.services.3.title',
    text: 'page.services.devops.services.3.content',
    icon: '🔄'
  }
]

const services2 = [
  {
    title: 'page.services.devops.services.4.title',
    text: 'page.services.devops.services.4.content',
    icon: '🧯'
  },
  {
    title: 'page.services.devops.services.5.title',
    text: 'page.services.devops.services.5.content',
    icon: '🗃'
  }
]

const DedicatedResources = () => {
  return (

    <MenuContextProvider>
      <Layout PageTitle="DevOps Support">
        <HeaderTwo />
        <PageBanner title="page.services.devops.header.title" name="page.services.devops.header.subtitle" bg={dedicatedBg} />
        <Services services={services} services2={services2} />
        {/* <ServiceOffers /> */}
        <CardPrice title='page.services.devops.offers.title' offers={[
          {
            name: 'page.services.devops.offers.1.title',
            services: [
              <span key='1'><span style={{ marginRight: 10 }}>🔔</span><FormattedMessage id='page.services.devops.offers.alert' /></span>,
              <span key='3'><span style={{ marginRight: 10 }}>📊</span><FormattedMessage id='page.services.devops.offers.dashboard' /></span>,
              <span key='4'><span style={{ marginRight: 10 }}>🔄</span><FormattedMessage id='page.services.devops.offers.backup' /></span>
            ],
            actionLabel: 'page.services.devops.offers.1.action'
          },
          {
            name: 'page.services.devops.offers.2.title',
            services: [
              <span key='0'><span style={{ marginRight: 10 }}>🎁</span><FormattedMessage id='page.services.devops.offers.free' /></span>,
              <span key='2'><span style={{ marginRight: 10 }}>🧯</span><FormattedMessage id='page.services.devops.offers.incident' /></span>,
              <span key='5'><span style={{ marginRight: 10 }}>🗃</span><FormattedMessage id='page.services.devops.offers.reporting' /></span>,
              <span key='6'><span style={{ marginRight: 10 }}>🕙</span><FormattedMessage id='page.services.devops.offers.office_hours' /></span>
            ],
            actionLabel: 'page.services.devops.offers.2.action'
          },
          {
            name: 'page.services.devops.offers.3.title',
            services: [
              <span key='0'><span style={{ marginRight: 10 }}>🎁</span><FormattedMessage id='page.services.devops.offers.free' /></span>,
              <span key='2'><span style={{ marginRight: 10 }}>🧯</span><FormattedMessage id='page.services.devops.offers.incident' /></span>,
              <span key='5'><span style={{ marginRight: 10 }}>🗃</span><FormattedMessage id='page.services.devops.offers.reporting' /></span>,
              <span key='7'><span style={{ marginRight: 10 }}>🕙</span><FormattedMessage id='page.services.devops.offers.full_hours' /></span>
            ],
            actionLabel: 'page.services.devops.offers.3.action'
          }
        ]} />
        <FooterContactBanner extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default DedicatedResources
