// Common type utilities that can be used across all services

export type Nullable<T> = T | null;

export type Optional<T> = T | undefined;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ID = string;

// Timestamp fields
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Timestamp {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

export interface Status {
  isActive: boolean;
  isArchived: boolean;
  isDeleted: boolean;
}

// Common status types
export type CommonStatus = 'active' | 'inactive' | 'pending' | 'archived';
