import Page from '../../components/MyLayout.js'
import React, { Component } from 'react'
import Head from 'next/head'
import markdown from 'markdown-in-js'

import { Layout, Menu, Breadcrumb, Icon} from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

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
    mode: 'inline',
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  }

  render() {
    return (
    <Page>
      <h3 style={{color: '#63686f', marginTop: 25}}>Collapsed-Sider-2</h3>
      <p style={{color: '#888c92', marginTop: 25}}>
          Two-columns layout. The sider menu can be collapsed when horizontal space is limited.
          Generally, the mainnav is placed on the left side of the page, and the secondary menu is placed on the top of the working area.
          Contents will adapt the layout to the viewing area to improve the horizontal space usage,
          while the layout of the whole page is not stable.
          The level of the aisde navigation is scalable. The first, second, and third level navigations could be present more fluently
          and relevantly, and aside navigation can be fixed, allowing the user to quickly switch and spot the current position,
          improving the user experience. However, this navigation occupies some horizontal space of the contents
      </p>

      <div style={{padding: '0 18%', marginTop: 25}}>
        <Layout style={{border: '3px solid #eee'}}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo" />
            <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={['6']}>
              <SubMenu
                key="sub1"
                title={<span><Icon type="user" /><span className="nav-text">User</span></span>}
              >
                <Menu.Item key="1">Tom</Menu.Item>
                <Menu.Item key="2">Bill</Menu.Item>
                <Menu.Item key="3">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={<span><Icon type="team" /><span className="nav-text">Team</span></span>}
              >
                <Menu.Item key="4">Team 1</Menu.Item>
                <Menu.Item key="5">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="6">
                <span>
                  <Icon type="file" />
                  <span className="nav-text">File</span>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2016 Created by Ant UED
            </Footer>
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
