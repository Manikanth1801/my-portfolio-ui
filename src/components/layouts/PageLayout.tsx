import React, { FC } from 'react'
import Header from '../header/Header'
import { Breadcrumb, Layout } from 'antd';
import FooterComponent from '../footer/Footer';
const {Content} = Layout
interface PageLayoutProps {
    children: React.ReactNode
}

const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
  }));

const PageLayout:FC<PageLayoutProps>= ({children}) => {

  return (
    <Layout>
    <Header />
    <Content style={{ padding: '0 48px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>My Portfolio/</Breadcrumb.Item>
      </Breadcrumb>
      <div
      >
        {children}
      </div>
    </Content>
   <FooterComponent/>
  </Layout>
  )
}

export default PageLayout