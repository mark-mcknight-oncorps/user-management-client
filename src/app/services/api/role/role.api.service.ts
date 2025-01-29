import { BaseApiService } from '../base.api.service';
import { GetRolesResponseDto } from 'user-management-types';

export class RoleApiService {
  constructor(private api: BaseApiService) { }
  async getRoles(): Promise<GetRolesResponseDto> {
    return this.api.get<GetRolesResponseDto>(`/roles`);
  }
}
