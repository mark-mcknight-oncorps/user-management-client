import { BaseApiService } from '../base.api.service';
import { CreateOrUpdateRoleRequestDto, GetRolePermissionsResponseDto, GetRolesResponseDto, GetRoleUsersResponseDto, RoleDto, UpdatePermissionsRequestDto } from 'user-management-types';

export class RoleApiService {
  constructor(private api: BaseApiService) { }

  /**
   * Retrieves all roles from the system
   * @returns Promise containing the response with all roles
   */
  async getRoles(): Promise<GetRolesResponseDto> {
    return this.api.get<GetRolesResponseDto>(`/roles`);
  }

  /**
   * Creates a new role in the system
   * @param body - The role creation request data
   * @returns Promise containing the created role
   */
  async createRole(body: CreateOrUpdateRoleRequestDto): Promise<RoleDto> {
    return this.api.post<RoleDto>(`/roles`, body);
  }

  /**
   * Retrieves a specific role by its ID
   * @param roleId - The unique identifier of the role
   * @returns Promise containing the role data
   */
  async getRole(roleId: string): Promise<RoleDto> {
    return this.api.get<RoleDto>(`/roles/${roleId}`);
  }

  /**
   * Retrieves a role by its name
   * @param roleName - The name of the role to retrieve
   * @returns Promise containing the role data
   */
  async getRoleByName(roleName: string): Promise<RoleDto> {
    const urlRoleName = encodeURIComponent(roleName);
    return this.api.get<RoleDto>(`/roles/by-name/${urlRoleName}`);
  }

  /**
   * Updates an existing role
   * @param roleId - The unique identifier of the role to update
   * @param body - The role update request data
   * @returns Promise containing the updated role
   */
  async updateRole(roleId: string, body: CreateOrUpdateRoleRequestDto): Promise<RoleDto> {
    return this.api.patch<RoleDto>(`/roles/${roleId}`, body);
  }

  /**
   * Deletes a role from the system
   * @param roleId - The unique identifier of the role to delete
   * @returns Promise that resolves when the role is deleted
   */
  async deleteRole(roleId: string): Promise<void> {
    this.api.delete(`/roles/${roleId}`);
  }

  /**
   * Retrieves all users associated with a specific role
   * @param roleId - The unique identifier of the role
   * @returns Promise containing the response with role users
   */
  async getRoleUsers(roleId: string): Promise<GetRoleUsersResponseDto> {
    return this.api.get<GetRoleUsersResponseDto>(`/roles/${roleId}/users`);
  }

  /**
   * Retrieves all permissions associated with a specific role
   * @param roleId - The unique identifier of the role
   * @returns Promise containing the response with role permissions
   */
  async getRolePermissions(roleId: string): Promise<GetRolePermissionsResponseDto> {
    return this.api.get<GetRolePermissionsResponseDto>(`/roles/${roleId}/permissions`);
  }

  /**
   * Adds permissions to an existing role
   * @param roleId - The unique identifier of the role
   * @param permissions - The permissions to add to the role
   * @returns Promise that resolves when the permissions are added
   */
  async addPermissionsToRole(roleId: string, permissions: UpdatePermissionsRequestDto): Promise<void> {
    return this.api.post(`/roles/${roleId}/permissions`, { permissions });
  }

  /**
   * Removes permissions from an existing role
   * @param roleId - The unique identifier of the role
   * @param permissions - The permissions to remove from the role
   * @returns Promise that resolves when the permissions are removed
   */
  async removePermissionsFromRole(roleId: string, permissions: UpdatePermissionsRequestDto): Promise<void> {
    return this.api.delete(`/roles/${roleId}/permissions`, { permissions });
  }
}
