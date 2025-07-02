export interface CustomError extends Error {
  statusCode?: number;
}

export function isCustomError(error: unknown): error is CustomError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as { message: unknown }).message === 'string'
  );
}

export function createError(message: string, statusCode?: number): CustomError {
  const error = new Error(message) as CustomError;
  if (statusCode) error.statusCode = statusCode;
  return error;
}
