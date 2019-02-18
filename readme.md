
# pdfmake

This is a mirror of [pdfmake](https://www.npmjs.com/package/pdfmake), bundled and exposed as ES module.

## Install

```
npm install @bundled-es-modules/pdfmake
bower install bundled-es-modules/pdfmake
```

## Use

```html
<script type="module">
  import pdfMake from 'pdfmake/pdfmake';
  import { vfs } from 'pdfmake/vfs_fonts';
  
  pdfMake.vfs = vfs;
</script>
```

Make sure you added `@bundled-es-modules` scope to the path if used via npm.
