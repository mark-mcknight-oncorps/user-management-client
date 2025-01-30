interface ApiErrorParams {
  status: number;
  statusText: string;
  data: unknown;
  url: string;
}

export class ApiError extends Error {
  public readonly status: number;
  public readonly statusText: string;
  public readonly data: unknown;
  public readonly url: string;

  constructor(params: ApiErrorParams) {
    super(`API Error: ${params.status} ${params.statusText}`);
    this.name = 'ApiError';
    this.status = params.status;
    this.statusText = params.statusText;
    this.data = params.data;
    this.url = params.url;

    // Ensures proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}
