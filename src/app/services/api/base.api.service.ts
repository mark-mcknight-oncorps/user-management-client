import { ApiError } from './errors/api.error';
import { AuthError } from './errors/auth.error';

export class BaseApiService {
  constructor(
    protected baseUrl: string,
    protected userAccessToken: string,
  ) { }

  /**
   * Makes an HTTP request to the API, called by get, post, patch, and delete methods.
   * @template T The expected response data type
   * @param path - The path after the base API endpoint path with starting slash (e.g. `/users/${userId}/roles`)
   * @param options - Fetch request options
   * @returns Promise resolving to the response data of type T
   * @throws {AuthError} When the bearer token is undefined
   * @throws {ApiError} When the API response status is not 2xx
   *   - status: HTTP status code
   *   - statusText: HTTP status message
   *   - data: Response body from the API if available
   *   - url: The API endpoint path that was called
   */
  private async request<T>(path: string, options: RequestInit = {}): Promise<T> {
    if (this.userAccessToken === undefined) {
      throw new AuthError('User authentication required.');
    }
    const response = await fetch(`${this.baseUrl}${path}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.userAccessToken,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new ApiError({
        status: response.status,
        statusText: response.statusText,
        data: errorData,
        url: path
      });
    }

    return response.json();
  }

  public async get<T>(path: string, options: RequestInit = {}): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: 'GET',
    });
  }

  public async post<T>(path: string, body: unknown, options: RequestInit = {}): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  public async patch<T>(path: string, body: unknown, options: RequestInit = {}): Promise<T> {
    return this.request<T>(path, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(body),
    });
  }

  public async delete<T>(path: string, body: unknown = undefined, options: RequestInit = {}): Promise<T> {
    const requestOptions = {
      ...options,
      method: 'DELETE',
    };
    if (body !== undefined) {
      requestOptions.body = JSON.stringify(body);
    }
    return this.request<T>(path, requestOptions);
  }
}