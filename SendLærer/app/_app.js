import 'globals.css';
import Navigation from '@/components/Navigation';

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Navigation />
            <Component {... pageProps} />
        </Layout>
        )
}

export default MyApp;