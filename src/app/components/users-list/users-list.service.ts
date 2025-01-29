import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDto } from 'user-management-types';
import { AngularApiService } from '../../services/angular-api/angular-api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersListService {
  private usersSubject = new BehaviorSubject<UserDto[] | null>(null);
  public users$ = this.usersSubject.asObservable();

  constructor(private api: AngularApiService) {
    this.api.provider$.subscribe(async provider => {
      if (provider) {
        try {
          const getUsersResponseDto = await provider.users.getUsers();
          this.usersSubject.next(
            getUsersResponseDto.users
          );
        } catch (error) {
          console.error('Failed to load users:', error);
        }
      }
    })
  }
}
