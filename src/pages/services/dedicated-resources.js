import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import MenuContextProvider from '@/context/menu-context'
import Services from '@/components/service-card-5'
// import ServiceOffers from '@/components/services-offers'
import HeaderTwo from '@/components/header-two'
import CallToActionOne from '@/components/call-to-action-one'

import dedicatedBg from '@/images/bg/m-dedicated.jpg'

const services = [
  {
    title: 'Complete team',
    text: 'A team completely dedicated to the support, creation and optimization of your product',
    icon: '👨‍👩‍👦‍👦'
  },
  {
    title: 'Additional resources',
    text: 'Developers, designers, devOps and even QA Test available to complement your current team',
    icon: '🙆‍♂️'
  },
  {
    title: 'Performance audit',
    text: 'A performance and maintainability audit about the infra, the frontend and the backend of your product',
    icon: '📈'
  }
]

const services2 = [
  {
    title: 'Optimization',
    text: 'Dedicated team to improve the performance and maintainability of your project following an audit',
    icon: '🆙'
  },
  {
    title: 'Code maintenance',
    text: 'Dedicated resources to maintain your project, such as fixing bugs and adding features',
    icon: '👨‍🔧'
  }
]

const DedicatedResources = () => {
  return (

    <MenuContextProvider>
      <Layout PageTitle="Dedicated Resources">
        <HeaderTwo />
        <PageBanner title="Dedicated Resources" name="Services" bg={dedicatedBg} />
        <Services services={services} services2={services2} />
        {/* <ServiceOffers /> */}
        <CallToActionOne extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default DedicatedResources
