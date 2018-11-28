export default [
    {
        getComponent: () => import('./Dashboard/DashboardPage'),
        exact: true,
        path: '/'
    }
];