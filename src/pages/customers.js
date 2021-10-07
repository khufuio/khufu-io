import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import PortfolioOne from '@/components/portfolio-one'
import MenuContextProvider from '@/context/menu-context'
import HeaderTwo from '@/components/header-two'

import customersBg from '@/images/bg/m-customers.jpg'

const CustomersPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Customers">
        <HeaderTwo />
        <PageBanner title="page.customers.header.title" name="page.customers.header.subtitle" bg={customersBg} />
        <PortfolioOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default CustomersPage
