import { Router } from 'react-routing';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';

const router = new Router(

    on => {
    on('*', async (state, next) => {
        const component = await next();
        return <Layout>{component}</Layout>;
    });

    on('/', () => <HomePage />);
    on('/about', () => <AboutPage />);

});

export default router;