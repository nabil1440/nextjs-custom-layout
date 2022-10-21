import '../styles/globals.css';
import Layout from '../components/layouts/Layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout;

  if (getLayout) {
    return <>{getLayout(<Component {...pageProps} />)}</>;
  } else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
