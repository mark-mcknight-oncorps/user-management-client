export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';

    // Ensures proper prototype chain for instanceof checks
    Object.setPrototypeOf(this, AuthError.prototype);
  }
}
