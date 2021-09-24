/**
 * 生产环境压缩图片大小
 * https://github.com/anncwb/vite-plugin-imagemin
 */

import { PluginType } from '.'
import imageminPlugin from 'vite-plugin-imagemin'

export function configImageMinPlugin(): PluginType {
  const plugin: PluginType = imageminPlugin({
    gifsicle: {
      optimizationLevel: 3,
      interlaced: false,
    },
    optipng: {
      optimizationLevel: 7,
    },
    mozjpeg: {
      quality: 8,
    },
    pngquant: {
      quality: [0.8, 0.9],
      speed: 4,
    },
    svgo: {
      plugins: [
        {
          removeViewBox: false,
        },
        {
          removeEmptyAttrs: false,
        },
      ],
    },
  })
  return plugin
}
