import path from 'path'

const alias = {
  '@': path.resolve(__dirname, 'src'),
  '@views': path.resolve(__dirname, '../src/views'),
  '@router': path.resolve(__dirname, '../src/router'),
  '@layouts': path.resolve(__dirname, '../src/layouts')
}

export default alias
