import { Layout, Menu, Icon, Button } from "antd";
import Link from "next/link";
import router from "../config/router.config";
import styles from "./BasicLayout.less"

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MainLayout extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <Link href="/"><a><img className="logo" src="/static/logo.png"/></a></Link>
          <Menu theme="dark" mode="inline" defaultOpenKeys={[router[0].path]} selectedKeys={[router[0].routes[0].path]}>
            {
              router.map( (menu) => {
                return menu.routes?<SubMenu key={menu.path} title={<span><Icon type={menu.icon} /><span>{menu.name}</span></span>}>
                  { menu.routes.map( subMenu => (
                    <Menu.Item key={subMenu.path}>
                      <Link href={subMenu.path}>
                        <a>
                          <span>{ subMenu.name }</span>
                        </a>
                      </Link>
                    </Menu.Item>
                  ) ) }
                </SubMenu>:<Menu.Item key={menu.path}>
                  <Link href={menu.path}>
                    <a>
                      <Icon type={ menu.icon } />
                      <span>{ menu.name }</span>
                    </a>
                  </Link>
                </Menu.Item>
             } )
            }
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            BPS Kolaka ©2018 Created by Muh. Shamad
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
