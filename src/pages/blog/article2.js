import React from 'react'
import Footer from '@/components/footer'
import Layout from '@/components/layout'
import PageBanner from '@/components/page-banner'
import BlogDetails from '@/components/blog-details'
import MenuContextProvider from '@/context/menu-context'
import SearchContextProvider from '@/context/search-context'
import HeaderTwo from '@/components/header-two'

import blogImage2 from '@/images/bg/m-blog2.jpg'

const BlogSinglePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Blog Details Page">
          <HeaderTwo />
          <PageBanner title="Blog Details" name="Blog" bg={blogImage2} />
          <BlogDetails />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  )
}

export default BlogSinglePage
