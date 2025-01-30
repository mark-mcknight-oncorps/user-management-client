import { CreateUserRequestDto, GetUserPermissionsResponseDto, GetUserRolesResponseDto, GetUsersResponseDto, UpdatePermissionsRequestDto, UpdateUserRequestDto, UpdateUserRolesRequestDto, UserDto } from 'user-management-types';
import { BaseApiService } from '../base.api.service';

export class UserApiService {
  constructor(private api: BaseApiService) { }

  /**
   * Retrieves all users from the system
   * @returns Promise containing the response with all users
   */
  async getUsers(): Promise<GetUsersResponseDto> {
    return this.api.get<GetUsersResponseDto>(`/users`);
  }

  /**
   * Creates a new user in the system
   * @param body - The user creation request data
   * @returns Promise containing the created user
   */
  async createUser(body: CreateUserRequestDto): Promise<UserDto> {
    return this.api.post<UserDto>(`/users`, body);
  }

  /**
   * Updates an existing user's information
   * @param userId - The unique identifier of the user to update
   * @param body - The user update request data
   * @returns Promise containing the updated user
   */
  async updateUser(userId: string, body: UpdateUserRequestDto): Promise<UserDto> {
    const urlUserId = encodeURIComponent(userId);
    return this.api.patch<UserDto>(`/users/${urlUserId}`, body);
  }

  /**
   * Retrieves a user by their email address
   * @param email - The email address of the user to retrieve
   * @returns Promise containing the user data
   */
  async getUserByEmail(email: string): Promise<UserDto> {
    const urlEmail = encodeURIComponent(email);
    return this.api.get<UserDto>(`/users/by-email?email=${urlEmail}`);
  }

  /**
   * Retrieves a user by their ID
   * @param userId - The unique identifier of the user
   * @returns Promise containing the user data
   */
  async getUser(userId: string): Promise<UserDto> {
    const urlUserId = encodeURIComponent(userId);
    return this.api.get<UserDto>(`/users/${urlUserId}`);
  }

  /**
   * Deletes a user from the system
   * @param userId - The unique identifier of the user to delete
   * @returns Promise that resolves when the user is deleted
   */
  async deleteUser(userId: string): Promise<void> {
    const urlUserId = encodeURIComponent(userId);
    await this.api.delete(`/users/${urlUserId}`);
  }

  /**
   * Adds roles to a user
   * @param userId - The unique identifier of the user
   * @param body - The roles to add to the user
   * @returns Promise that resolves when the roles are added
   */
  async addUserRoles(userId: string, body: UpdateUserRolesRequestDto): Promise<void> {
    const urlUserId = encodeURIComponent(userId);
    await this.api.post(`/users/${urlUserId}/roles`, body);
  }

  /**
   * Retrieves all roles associated with a user
   * @param userId - The unique identifier of the user
   * @returns Promise containing the user's roles
   */
  async getUserRoles(userId: string): Promise<GetUserRolesResponseDto> {
    const urlUserId = encodeURIComponent(userId);
    return this.api.get<GetUserRolesResponseDto>(`/users/${urlUserId}/roles`);
  }

  /**
   * Retrieves all permissions associated with a user
   * @param userId - The unique identifier of the user
   * @returns Promise containing the user's permissions
   */
  async getUserPermissions(userId: string): Promise<GetUserPermissionsResponseDto> {
    const urlUserId = encodeURIComponent(userId);
    return this.api.get<GetUserPermissionsResponseDto>(`/users/${urlUserId}/permissions`);
  }

  /**
   * Removes permissions from a user
   * @param userId - The unique identifier of the user
   * @param body - The permissions to remove from the user
   * @returns Promise that resolves when the permissions are removed
   */
  async deleteUserPermissions(userId: string, body: UpdatePermissionsRequestDto): Promise<void> {
    const urlUserId = encodeURIComponent(userId);
    await this.api.delete(`/users/${urlUserId}/permissions`, body);
  }

  /**
   * Adds permissions to a user
   * @param userId - The unique identifier of the user
   * @param body - The permissions to add to the user
   * @returns Promise that resolves when the permissions are added
   */
  async addUserPermissions(userId: string, body: UpdatePermissionsRequestDto): Promise<void> {
    const urlUserId = encodeURIComponent(userId);
    await this.api.post(`/users/${urlUserId}/permissions`, body);
  }

  /**
   * Removes roles from a user
   * @param userId - The unique identifier of the user
   * @param body - The roles to remove from the user
   * @returns Promise that resolves when the roles are removed
   */
  async deleteUserRole(userId: string, body: UpdateUserRolesRequestDto): Promise<void> {
    const urlUserId = encodeURIComponent(userId);
    await this.api.delete(`/users/${urlUserId}/roles`, body);
  }
}