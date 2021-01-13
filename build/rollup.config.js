const path = require('path');
const { babel } = require('@rollup/plugin-babel');
const less = require('rollup-plugin-less');
const eslint = require('rollup-plugin-eslint');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const replace = require('@rollup/plugin-replace');

const resolveFile = function (filePath) {
  return path.join(__dirname, '..', filePath)
}

const babelOptions = {
  "presets": [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  exclude: 'node_modules/**',
}

const plugins = [
  nodeResolve(),
  less(),
  commonjs(),
  babel(babelOptions),
  replace({ // 将某些变量或字符串转化为固定值
    exclude: 'node_modules/**',
    ENV: JSON.stringify(process.env.NODE_ENV)
  })
]

const inputFile = resolveFile('src/index.js');

module.exports = [
  {
    input: inputFile,
    output: {
      file: resolveFile('dist/index.js'),
      format: 'umd',
      name: 'Demo'
    },
    plugins
  },
  {
    input: inputFile,
    output: {
      file: resolveFile('lib/index.js'),
      format: 'cjs',
    },
    plugins
  },
  {
    input: inputFile,
    output: {
      file: resolveFile('es/index.js'),
      format: 'esm',
    },
    plugins
  }
]