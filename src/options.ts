import merge from 'deepmerge'
import { ModuleThis } from '@nuxt/types/config/module'

export interface Options {
  path?: string
}

export const defaults = {
  path: '/admin'
}

export default function initOptions(this: ModuleThis, moduleOptions?: Options): Required<Options>  {
  return merge.all([defaults, this.options.cms || {}, moduleOptions || {}]) as Required<Options>
}