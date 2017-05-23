// Rollup plugins.
import babel from 'rollup-plugin-babel';
import cjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';

export default {
  dest: 'build/app.js',
  entry: './index.js',
  format: 'iife',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'es2015', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/**',
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**'
      ],
      namedExports: {
        'node_modules/ui-router-core/lib/vanilla.js': [
          'hashLocationPlugin',
          'pushStateLocationPlugin',
          'memoryLocationPlugin',
          'servicesPlugin'
        ],
        'react': [
          'Component',
          'PropTypes',
          'Children',
          'createElement',
          'cloneElement',
          'isValidElement'
        ]
      }
    }),
    globals(),
    resolve({
      jsnext: true,
      main: true
    }),
    serve({
      contentBase: 'build',
      historyApiFallback: true,
      host: 'localhost',
      port: 8080
    })
  ],
  sourceMap: true
}