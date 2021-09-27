import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import BlogOne from '@/components/blog-one'
import MenuContextProvider from '@/context/menu-context'
import HeaderTwo from '@/components/header-two'

import newsBg from '@/images/bg/m-news.jpg'

const BlogPage = () => {
  return (
    <MenuContextProvider>
      <Layout PageTitle="Blog">
        <HeaderTwo />
        <PageBanner title="Blog" name="Blog" bg={newsBg} />
        <BlogOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  )
}

export default BlogPage
