
import { Layout, Typography, Menu, Col, Row } from 'antd';
import Nav from './Nav';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

const PageLayout = ({children}) => {
  return (
    <Layout style={{height: "100vh"}}>
        <Header>
            <Title type="success">React send grid form</Title>
        </Header>
        
        <Layout>
            <Sider width={250}>
                <Nav />
            </Sider>
            <Content>
                <Row justify="center">
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Content>
        </Layout>

      {/* <Footer /> */}
    </Layout>
    );
}

export default PageLayout;
