// declare module 'redux-api-status';

declare module 'redux-api-status' {
  export function beginType(type: string): string;
  export function successType(type: string): string;
  export function failureType(type: string): string;
}
