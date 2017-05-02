# Snarky

[![Build Status](https://travis-ci.org/yatharthk/snarky.svg?branch=master)](https://travis-ci.org/yatharthk/snarky) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> Extends `snarkdown` and exposes a Promise API

> NOTE: Plugin support in upcoming release :tada:

## Install

```
npm install --save snarky
```

or if you're using **yarn**,

```
yarn add snarky
```

## Usage

```javascript
const snarky = require('snarky');

snarky(`**bold text**`).then(html => {
  console.log(html);
  // <strong>bold text</strong>
})
```

## API

### snarky(markdown)

Returns a Promise for HTML from parsed markdown

### snarky.sync(markdown)

Returns HTML from parsed markdown

## License

MIT © Yatharth Khatri
