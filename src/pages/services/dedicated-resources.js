import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import MenuContextProvider from '@/context/menu-context'
import Services from '@/components/service-card-5'
import TablePrice from '@/components/table-price'
// import ServiceOffers from '@/components/services-offers'
import HeaderTwo from '@/components/header-two'
import FooterContactBanner from '@/components/footer-contact-banner'

import dedicatedBg from '@/images/bg/m-dedicated.jpg'

import { FormattedMessage } from 'react-intl'

const services = [
  {
    title: 'page.services.dedicated.services.1.title',
    text: 'page.services.dedicated.services.1.content',
    icon: '👨‍👩‍👦‍👦'
  },
  {
    title: 'page.services.dedicated.services.2.title',
    text: 'page.services.dedicated.services.2.content',
    icon: '🙆‍♂️'
  },
  {
    title: 'page.services.dedicated.services.3.title',
    text: 'page.services.dedicated.services.3.content',
    icon: '📈'
  }
]

const services2 = [
  {
    title: 'page.services.dedicated.services.4.title',
    text: 'page.services.dedicated.services.4.content',
    icon: '🆙'
  },
  {
    title: 'page.services.dedicated.services.5.title',
    text: 'page.services.dedicated.services.5.content',
    icon: '👨‍🔧'
  }
]

const DedicatedResources = () => {
  return (

    <MenuContextProvider>
      <Layout PageTitle="Dedicated Resources">
        <HeaderTwo />
        <PageBanner title="page.services.dedicated.header.title" name="page.services.dedicated.header.subtitle" bg={dedicatedBg} />
        <Services services={services} services2={services2} />
        <TablePrice title='page.services.dedicated.offers.daily.title' header={[
          '',
          <span key='1'><span style={{ marginRight: 10 }}>1️⃣</span><FormattedMessage id='page.services.dedicated.offers.junior' /></span>,
          <span key='2'><span style={{ marginRight: 10 }}>2️⃣</span><FormattedMessage id='page.services.dedicated.offers.int' /></span>,
          <span key='3'><span style={{ marginRight: 10 }}>3️⃣</span><FormattedMessage id='page.services.dedicated.offers.senior' /></span>
        ]} body={[
          [<span key='0'><span style={{ marginRight: 10 }}>💻</span><FormattedMessage id='page.services.dedicated.offers.developer' /></span>, '300 €', '500 €', '700 €'],
          [<span key='1'><span style={{ marginRight: 10 }}>🎨</span><FormattedMessage id='page.services.dedicated.offers.designer' /></span>, '300 €', '400 €', '500 €'],
          [<span key='2'><span style={{ marginRight: 10 }}>🛰</span><FormattedMessage id='page.services.dedicated.offers.devops' /></span>, '', '600 €', '800 €'],
          [<span key='3'><span style={{ marginRight: 10 }}>👨‍💻</span><FormattedMessage id='page.services.dedicated.offers.cto' /></span>, '', '', '1000 €'],
          [<span key='4'><span style={{ marginRight: 10 }}>✅</span><FormattedMessage id='page.services.dedicated.offers.qa' /></span>, '', '', '']
        ]} />
        <TablePrice title='page.services.dedicated.offers.monthly.title' header={[
          '',
          <span key='1'><span style={{ marginRight: 10 }}>1️⃣</span><FormattedMessage id='page.services.dedicated.offers.junior' /></span>,
          <span key='2'><span style={{ marginRight: 10 }}>2️⃣</span><FormattedMessage id='page.services.dedicated.offers.int' /></span>,
          <span key='3'><span style={{ marginRight: 10 }}>3️⃣</span><FormattedMessage id='page.services.dedicated.offers.senior' /></span>
        ]} body={[
          [<span key='0'><span style={{ marginRight: 10 }}>💻</span><FormattedMessage id='page.services.dedicated.offers.developer' /></span>, '4 500 €', '7 500 €', '10 500 €'],
          [<span key='1'><span style={{ marginRight: 10 }}>🎨</span><FormattedMessage id='page.services.dedicated.offers.designer' /></span>, '', '', ''],
          [<span key='2'><span style={{ marginRight: 10 }}>🛰</span><FormattedMessage id='page.services.dedicated.offers.devops' /></span>, '', '', ''],
          [<span key='3'><span style={{ marginRight: 10 }}>👨‍💻</span><FormattedMessage id='page.services.dedicated.offers.cto' /></span>, '', '', ''],
          [<span key='4'><span style={{ marginRight: 10 }}>✅</span><FormattedMessage id='page.services.dedicated.offers.qa' /></span>, '', '4 500 €', '']
        ]} />
        {/* <ServiceOffers /> */}
        <FooterContactBanner extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default DedicatedResources
