import Page from '../../components/MyLayout.js'
import React, { Component } from 'react'
import Head from 'next/head'
import markdown from 'markdown-in-js'
import Img from 'react-image'

import { Layout, Menu, Breadcrumb, Icon} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

const { Header, Content, Sider, Footer } = Layout;
const { SubMenu } = Menu;

const Code = () => markdown`
    import { Layout, Menu, Breadcrumb } from 'antd';
    const { Header, Content, Footer } = Layout;

    ReactDOM.render(
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    , mountNode);
`

// const pageOne = () => (
export default class App extends Component {
  render() {

    return (
    <Page>
      <h3 style={{color: '#63686f', marginTop: 25}}>Header-Content-Footer</h3>
      <p style={{color: '#888c92', marginTop: 25}}>
        The most basic "header-content-footer" layout.
        Generally, the mainnav is placed at the top of the page, and includes the logo,
        the first level navigation, and the secondary menu (users, settings, notifications) from left to right in it.
        We always put contents in a fixed size navigation (eg: 1200px), the layout of the whole page is stable, it's not affected by viewing area.
        Top-bottom structure is conform with the top-bottom viewing habit, it's a classical navigation pattern of websites.
        This pattern demonstrates efficiency in the main workarea, while using some vertical space. And because the horizontal space of the navigation is limited,
        this pattern is not suitable for cases when the first level navigation contains many elements or links
      </p>

      <div style={{padding: '0 18%', marginTop: 25}}>
        <Layout className="layout">
          <Header>
            <Img src={"/logo.png"} />

            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Footer>
        </Layout>
      </div>
      <div>
        <Code />
      </div>
    </Page>
)
}
}

// export default pageOne
