import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/pdfmake/build/pdfmake.js',
    output: {
      file: './pdfmake.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];