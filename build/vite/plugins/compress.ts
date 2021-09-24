/**
 * 生产环境打包压缩 gzip 或 brotli
 * https://github.com/anncwb/vite-plugin-compression
 */
import { COMPRESS_DELETE_ORIGIN_FILE, COMPRESS_OPTION } from '/$/constant'
import compressPlugin from 'vite-plugin-compression'
import { PluginType } from '.'

export function configCompressPlugin(): PluginType {
  const plugins: PluginType = []

  // gzip 压缩
  if (COMPRESS_OPTION.includes('gzip')) {
    plugins.push(
      compressPlugin({
        deleteOriginFile: COMPRESS_DELETE_ORIGIN_FILE,
      })
    )
  }

  // brotli 压缩
  if (COMPRESS_OPTION.includes('brotli')) {
    plugins.push(
      compressPlugin({
        ext: '.br',
        algorithm: 'brotliCompress',
        deleteOriginFile: COMPRESS_DELETE_ORIGIN_FILE,
      })
    )
  }

  return plugins
}
