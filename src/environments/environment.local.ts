import { EnvironmentConfig } from "./environment-config.interface";

export const environment: EnvironmentConfig = {
    production: false,
    environment: 'DEV',
    loginRedirectUrl: '/users',
    userManagementServiceEndpoint: 'http://localhost:3000',
    AUTH0: {
        responseType: 'token id_token',
        clientID: 'GZRiUQCdNLaoDHIE2w4bgoSsCCr3vLOu',
        domain: 'pimco-beta.us.auth0.com',
        audience: 'https://pimco-beta.us.auth0.com/api/v2/',
        scope: 'openid',
        redirectUri: 'http://localhost:4200',
        appUri: `http://localhost:4200/login`
    },
};
