# gulp: The Good Parts

## Getting Started

### 1. Install gulp-cli globally

If you have previously installed a version of gulp globally, please remove it first and install `gulp-cli`.

```bash
$ npm uninstall -g gulp  # Uninstall the previously installed gulp
$ npm install -g gulp-cli
```

### 2. Setup

```bash
$ git clone git@github.com:jmblog/gulp-the-good-parts.git
$ cd gulp-the-good-parts

# Install packages for gulp 3.9
$ cd gulp-3.9
$ npm install

# Install packages for gulp 4.0
$ cd gulp-4.0
$ npm install
```

### 3. Choose a recipe and run gulp

```bash
$ cd gulp-4.0/watch-files
$ gulp
```

or

```bash
$ gulp --cwd gulp-4.0/watch-files
```
