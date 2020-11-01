import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'bi.konstrictor.school_mgmt',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig
