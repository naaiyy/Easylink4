import { z } from 'zod';

// Common validation schemas
export const emailSchema = z
  .string()
  .email()
  .transform((email: string) => email.toLowerCase().trim());

export const passwordSchema = z
  .string()
  .min(8)
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );

export const phoneSchema = z
  .string()
  .regex(/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/);

// Common validation functions
/**
 * Validates if a string is a valid URL
 */
export function isValidUrl(str: string): boolean {
  try {
    // Using URL constructor which is available in both Node.js and browser
    return Boolean(new globalThis.URL(str));
  } catch {
    return false;
  }
}

/**
 * Validates if a file size is within the specified limit in MB
 */
export function isValidFileSize(size: number, maxSizeMB: number): boolean {
  return size <= maxSizeMB * 1024 * 1024;
}

/**
 * Validates if a file type is in the allowed types list
 */
export function isValidFileType(
  filename: string,
  allowedTypes: string[]
): boolean {
  const ext = filename.split('.').pop()?.toLowerCase();
  return ext ? allowedTypes.includes(ext) : false;
}
