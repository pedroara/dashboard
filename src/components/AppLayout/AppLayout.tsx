import { AppLayoutProps } from "../../types/components/appLayout";
import { Layout, Spin } from "../Library";
import SidebarContainer from "../Sidebar/SidebarContainer";
const { Content, Footer } = Layout;

export default function AppLayout(props: AppLayoutProps) {
  const { loading } = props;
  const content = props.children;

  return loading ? (
    <Spin />
  ) : (
    <Layout style={{ minHeight: "100vh" }}>
      <SidebarContainer />
      <Layout className="site-layout">
        <Content>{content}</Content>
        <Footer style={{ textAlign: "center" }}>Tractian© 2023</Footer>
      </Layout>
    </Layout>
  );
}
