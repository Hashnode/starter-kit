export type Nullish = undefined | null;
/**
 * Make some properties of T required.
 */
export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: NonNullable<T[P]> };

export * from './Post';
export * from './User';
export * from './Publication';
export * from './Series';
export * from './Page';
export * from './Badge';
export * from './extras';
export * from './Response';
