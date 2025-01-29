import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: 'oncorps.angular.user-management.service',
      useValue: environment.userManagementServiceEndpoint,
    },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAuth0({
      domain: environment.AUTH0.domain,
      clientId: environment.AUTH0.clientID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
  ]
};
