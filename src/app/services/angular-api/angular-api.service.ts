import { Inject, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ApiProvider } from '../api/api.provider';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AngularApiService {
  private providerSubject = new BehaviorSubject<ApiProvider | undefined>(undefined);
  public provider$ = this.providerSubject.asObservable();
  constructor(
    private authService: AuthService,
    @Inject('oncorps.angular.user-management.service') private serviceEndpoint: string,
  ) {
    this.authService.idTokenClaims$.pipe(
      map(
        claims => claims ?
          new ApiProvider(
            this.serviceEndpoint,
            claims.__raw
          ) : undefined
      )
    ).subscribe(provider => {
      this.providerSubject.next(provider);
    });
  }
}
