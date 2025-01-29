import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RoleDto } from 'user-management-types';
import { AngularApiService } from '../../services/angular-api/angular-api.service';

@Injectable({
  providedIn: 'root'
})
export class RolesListService {
  private rolesSubject = new BehaviorSubject<RoleDto[] | null>(null);
  public roles$ = this.rolesSubject.asObservable();

  constructor(private api: AngularApiService) {
    this.api.provider$.subscribe(async provider => {
      if (provider) {
        try {
          const getRolesResponseDto = await provider.roles.getRoles();
          this.rolesSubject.next(
            getRolesResponseDto.roles
          );
        } catch (error) {
          console.error('Failed to load roles:', error);
        }
      }
    })
  }
}
