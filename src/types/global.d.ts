declare global {
  declare type TUndefinable<T> = T | undefined;
  declare type TNullable<T> = T | null;
  declare type TNullableUndefinable<T> = T | null | undefined;
  declare type TObj<K extends keyof any = string, T = any> = Record<K, T>;
  declare type TNumberOrString = number | string;
  declare type TAllType<
    T = string | number | boolean | object | null | undefined,
  > = T | T[];
}

export {};
