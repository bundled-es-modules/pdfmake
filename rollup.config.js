import commonjs from 'rollup-plugin-commonjs';

export default [
  {
    input: './node_modules/pdfmake/build/vfs_fonts.js',
    output: {
      file: './vfs_fonts.js',
      format: 'es',
    },
    plugins: [
      commonjs(),
    ],
  },
];