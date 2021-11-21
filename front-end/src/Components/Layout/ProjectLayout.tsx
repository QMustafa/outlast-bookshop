import { Avatar, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { FC } from "react";
import { BookOutlined, UserOutlined } from '@ant-design/icons';
import "./Styles.css";

type ProjectLayoutProps = {
  children: JSX.Element,
};

export const ProjectLayout: FC<ProjectLayoutProps> = ({ children }: ProjectLayoutProps) => {
  const BodyWrapper = ({ children }: ProjectLayoutProps) => {
    return (
      <div>
        <main>{children}</main>
      </div>
    );
  };

  return (
    <BodyWrapper>
    <Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0
      }}
    >
      <div className="logo">
      <Avatar
        style={{
          color: '#f56a00',
          backgroundColor: '#fde3cf',
          marginRight: '16px'
        }}
      >
        Q
      </Avatar>
        Welcome Qutaiba!</div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<BookOutlined style={{ fontSize: '16px', color: 'wheat' }} />}>
          Book list
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{minHeight: '100vh'}}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Bookshop mvp project for outlast</Footer>
    </Layout>
  </Layout>
  </BodyWrapper>
  );
};
