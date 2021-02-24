declare module '@capacitor/core' {
  interface PluginRegistry {
    BackgroundGeolocation: BackgroundGeolocationPlugin;
  }
}

export interface BackgroundGeolocationPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
