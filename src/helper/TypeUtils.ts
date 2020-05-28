// https://github.com/Microsoft/TypeScript/issues/25760#issuecomment-405931434
export type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;