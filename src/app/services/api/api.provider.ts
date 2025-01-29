import { UserApiService } from './user/user.api.service';
import { RoleApiService } from './role/role.api.service';
import { BaseApiService } from './base.api.service';

export class ApiProvider {
  private userApi: UserApiService;
  private roleApi: RoleApiService;

  constructor(baseUrl: string, userAccessToken: string) {
    const baseService = new BaseApiService(baseUrl, userAccessToken);
    this.userApi = new UserApiService(baseService);
    this.roleApi = new RoleApiService(baseService);
  }

  get users() {
    return this.userApi;
  }

  get roles() {
    return this.roleApi;
  }
}