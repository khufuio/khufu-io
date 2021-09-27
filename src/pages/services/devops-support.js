import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import MenuContextProvider from '@/context/menu-context'
import Services from '@/components/service-card-5'
// import ServiceOffers from '@/components/services-offers'
import HeaderTwo from '@/components/header-two'
import CallToActionOne from '@/components/call-to-action-one'

import dedicatedBg from '@/images/bg/m-devops.jpg'

const services = [
  {
    title: 'Alert notifications',
    text: 'We set up an alert system on your infra in order to be instantly informed in the case of incident',
    icon: '🔔'
  },
  {
    title: 'Performance dashboard',
    text: 'We connect your infra to a centralized dashboard in order to monitor your services',
    icon: '📊'
  },
  {
    title: 'Automated backups',
    text: 'We set up a regular and automated backups on your infra to deal with major incidents',
    icon: '🔄'
  }
]

const services2 = [
  {
    title: 'Incident management',
    text: 'We manage infra unexpected incidents on your infra in order to limit your product accessibility',
    icon: '🧯'
  },
  {
    title: 'Reporting',
    text: 'We generate a regular report for you on the performance and incidents occurring on your infra',
    icon: '🗃'
  }
]

const DedicatedResources = () => {
  return (

    <MenuContextProvider>
      <Layout PageTitle="DevOps Support">
        <HeaderTwo />
        <PageBanner title="DevOps Support" name="Services" bg={dedicatedBg} />
        <Services services={services} services2={services2} />
        {/* <ServiceOffers /> */}
        <CallToActionOne extraClassName="ready" />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default DedicatedResources
