type THashMap  = Record<string, unknown>

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $APP: THashMap;
    $PATH: THashMap;
    $COLOR: THashMap;
    $M: THashMap;
  }
}

export {}  // Important! See note.
