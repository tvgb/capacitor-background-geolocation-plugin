import { WebPlugin } from '@capacitor/core';
import { BackgroundGeolocationPlugin } from './definitions';

export class BackgroundGeolocationWeb extends WebPlugin implements BackgroundGeolocationPlugin {
  constructor() {
    super({
      name: 'BackgroundGeolocation',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const BackgroundGeolocation = new BackgroundGeolocationWeb();

export { BackgroundGeolocation };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(BackgroundGeolocation);
