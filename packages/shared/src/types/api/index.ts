// API types will be exported here

// Generic API response types

export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  error: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  } | null;
  timestamp: string;
  path?: string;
  version?: string;
}

export interface RequestHeaders {
  Authorization: string;
  [key: string]: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export type UserRole = 'student' | 'employer' | 'admin';
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

// JWT related types that services need for verification
export interface JWTPayload {
  sub: string;
  role: UserRole;
  exp: number;
  iat: number;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}

export interface ApiMetadata {
  timestamp: string;
  path: string;
  version: string;
}
