import type { ApiResponse } from '../../types/api';
import { type JwtPayload } from 'jsonwebtoken';

export class HttpError extends Error {
  constructor(
    statusCode: number,
    code: string,
    message: string,
    details?: Record<string, unknown>
  ) {
    super(message);
    this.name = 'HttpError';
    Object.assign(this, { statusCode, code, details });
  }
}

export function createApiResponse<T>(
  success: boolean,
  data: T | null,
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  } | null = null
): ApiResponse<T> {
  return {
    success,
    data,
    error,
    timestamp: new Date().toISOString(),
  };
}

export function getAuthHeader(token: string): { Authorization: string } {
  return {
    Authorization: `Bearer ${token}`,
  };
}

export function parseJWT<T extends JwtPayload>(token: string): T {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = globalThis.atob(base64);
    return JSON.parse(jsonPayload) as T;
  } catch {
    throw new HttpError(401, 'INVALID_TOKEN', 'Invalid JWT token');
  }
}
