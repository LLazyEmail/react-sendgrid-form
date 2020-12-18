import { Layout, Typography, Col, Row } from 'antd';
import Nav from './Nav';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const PageLayout = ({ children }) => (
  <Layout style={{ height: '100vh' }}>
    <Header style={{ textAlign: 'center' }}>
      <Title type="success">React send grid forms</Title>
    </Header>

    <Layout>
      <Sider width={250} style={{ paddingLeft: '10px' }}>
        <Nav />
      </Sider>
      <Content>
        <Row justify="center">
          <Col>{children}</Col>
        </Row>
      </Content>
    </Layout>

    {/* <Footer /> */}
  </Layout>
);

export default PageLayout;
