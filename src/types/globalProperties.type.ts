type THashMapValue =
  | string
  | number
  | number[]
  | ((id: string | number) => string);

type THashMap = Record<string, THashMapValue>;

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $APP: THashMap;
    $PATH: THashMap;
    $COLOR: THashMap;
    $M: THashMap;
  }
}

export {}; // Important! See note.
