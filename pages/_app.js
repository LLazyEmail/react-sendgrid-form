import 'antd/dist/antd.css';
import '../styles/vars.css';
import '../styles/global.css';
import PageLayout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <PageLayout>
    <Component {...pageProps} />
  </PageLayout>
);

export default MyApp;
