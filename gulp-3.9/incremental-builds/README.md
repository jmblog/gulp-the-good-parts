# Incremental builds

## gulp-changed

### Default

```bash
$ gulp clean
$ echo 'aaa' > src/aaa.txt
$ echo 'bbb' > src/bbb.txt
$ gulp changedDefault # Check all text files are passed
$ gulp changedDefault # Check NO text files are passed
$ touch src/aaa.txt
$ gulp changedDefault # Check only aaa.txt is passed
```

### `extension` option

```bash
$ gulp clean
$ echo 'h1 aaa' > src/aaa.jade
$ echo 'h1 bbb' > src/bbb.jade
$ gulp changedExtension # Check all jade files are passed
$ gulp changedExtension # Check No jade files are passed
$ touch src/aaa.jade
$ gulp changedExtension # Check only aaa.jade is passed
```

### `hasChanged` option

```bash
$ gulp clean
$ echo '.aaa { font-size: 1rem; }' > src/aaa.css
$ echo '.bbb { font-size: 1rem; }' > src/bbb.css
$ gulp changedSha1 # Check all css files are passed
$ gulp changedSha1 # Check No css files are passed
$ touch src/aaa.css
$ gulp changedSha1 # Check No css files are passed
$ echo '.aaa { font-size: 2rem; }' > src/aaa.css
$ gulp changedSha1 # Check only aaa.css is passed
```

## gulp-newer

### Default

```bash
$ gulp clean
$ echo 'aaa' > src/aaa.txt
$ echo 'bbb' > src/bbb.txt
$ gulp newerDefault # Check all text files are passed
$ gulp newerDefault # Check NO text files are passed
$ touch src/aaa.txt
$ gulp newerDefault # Check only aaa.txt is passed
```

### with many:1 source:dest mappings

```bash
$ gulp clean
$ echo 'aaa' > src/aaa.txt
$ echo 'bbb' > src/bbb.txt
$ gulp newerConcat # Check all text files are passed
$ gulp newerConcat # Check NO text files are passed
$ touch src/aaa.txt
$ gulp newerConcat # Check only aaa.txt is passed
```
