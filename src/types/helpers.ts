// Exports:
// Type helper to ensure all keys from a record are present in an array
export type EnsureAllKeys<T extends Record<string, any>, U extends ReadonlyArray<keyof T>> = 
  { [K in keyof T]: K extends U[number] ? true : false }[keyof T] extends true ? U : never
