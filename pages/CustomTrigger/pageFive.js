import Page from '../../components/MyLayout.js'
import React, { Component } from 'react'
import Head from 'next/head'
import markdown from 'markdown-in-js'
import enUS from 'antd/lib/locale-provider/en_US'

import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

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

  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
    <Page>
      <h3 style={{color: '#63686f', marginTop: 25}}>Custom Trigger</h3>
      <p style={{color: '#888c92', marginTop: 25}}>
          If you want to use a customized trigger, you can hide the default one by setting trigger={null}.
      </p>

      <div style={{padding: '0 18%', marginTop: 25}}>
        <Layout style={{border: '3px solid #eee'}}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span className="nav-text">nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span className="nav-text">nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span className="nav-text">nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
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
