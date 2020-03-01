import { Module } from '@nuxt/types'
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { registerMiddleware as registerLocalFs } from '../node_modules/netlify-cms-proxy-server/src/middlewares/localFs';
import initOptions, { Options } from './options'


const cmsModule: Module<Options> = function (moduleOptions) {
  const options = initOptions.call(this, moduleOptions);

  const cms = express();
  cms.use(morgan('combined'));
  cms.use(cors());
  cms.use(express.json({ limit: '50mb' }));
  registerLocalFs(cms);

  this.addServerMiddleware({
    path: options.path,
    handler: cms
  })

}

export const meta = require('../../package.json');
export default cmsModule;