import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  plugins: [
    sass()
  ],
  globalStyle: 'src/global/app.css'
};
