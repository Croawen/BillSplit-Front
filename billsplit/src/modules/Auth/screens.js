export default [
    {
        getComponent: () => import('./Login/LoginPage'),
        exact: true,
        path: '/'
    },
    {
        getComponent: () => import('./Register/RegisterPage'),
        exact: true,
        path: '/register'
    },
    {
        getComponent: () => import('./PasswordReset/PasswordResetPage'),
        exact: true,
        path: '/reset-password'
    },
    {
        getComponent: () => import('./NewPassword/NewPasswordPage'),
        exact: true,
        path: '/new-password'
    },
];