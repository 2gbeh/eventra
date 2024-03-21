type THashMap  = Record<string, string | number | number[]>

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $APP: THashMap;
    $PATH: THashMap;
    $COLOR: THashMap;
    $M: THashMap;
  }
}

export {}  // Important! See note.
