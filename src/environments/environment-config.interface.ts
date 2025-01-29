interface Auth0Config {
    responseType: string;
    clientID: string;
    domain: string;
    audience: string;
    scope: string;
    redirectUri: string;
    appUri: string;
    namespace?: string;
}

export interface EnvironmentConfig {
    userManagementServiceEndpoint: string;
    loginRedirectUrl: string;
    production: boolean;
    environment: string;
    AUTH0: Auth0Config;
}