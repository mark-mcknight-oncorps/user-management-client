import { GetUsersResponseDto } from 'user-management-types';
import { BaseApiService } from '../base.api.service';

export class UserApiService {
  constructor(private api: BaseApiService) { }
  async getUsers(): Promise<GetUsersResponseDto> {
    return this.api.get<GetUsersResponseDto>(`/users`);
  }
}