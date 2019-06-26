import { Layout, Menu, Icon, Avatar, Card} from 'antd';

import '../../css/layout.css';
import React from 'react';
const { Header, Sider, Content } = Layout;
const { Meta } = Card;


class LayoutApp extends React.Component {
  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout className='layout'>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Icon type="star" />
                <span>小八</span>
            </Menu.Item>
            <Menu.Item key="2">
                <Icon type="notification" />
                <span>我们的照片</span>
            </Menu.Item>
            <Menu.Item key="3">
                <Icon type="upload" />
                <span>测试</span> 
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
          <Content>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="xiaoba.jpg" />}
            >
                <Meta title="这是只公狗" description="哈哈哈" />
            </Card>
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default LayoutApp;