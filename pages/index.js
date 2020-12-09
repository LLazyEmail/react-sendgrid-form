import { Layout, Typography } from 'antd';
import SendForm from '../components/SendForm';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

const Home = () => {
  return (
    <>
        <Layout>
            <Header>
                <Title type="secondary">React send grid form</Title>
            </Header>
            <Content>
                <SendForm  />
            </Content>
            <Footer />
        </Layout>
    </>
  );
}

export default Home;