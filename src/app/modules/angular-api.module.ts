import { NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

@NgModule({
  providers: [
    {
      provide: 'oncorps.angular.user-management.service',
      useValue: environment.userManagementServiceEndpoint
    }
  ]
})
export class AngularApiModule { }