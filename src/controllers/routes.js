import LayoutComponent from '../components/layout';
import IndexComponent from '../components/index';
import AboutComponent from '../components/about';

const routes = {
    path: '',
    component: LayoutComponent,
    childRoutes: [
        {
            path: '/',
            component: IndexComponent
        },
        {
            path: '/about',
            component: AboutComponent
        }
    ]
};

export {
    routes
}
