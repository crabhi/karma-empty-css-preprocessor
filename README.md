# karma-empty-css-preprocessor

> Preprocessor to compile whatever file to empty .css

This plugin may be useful if in your unit tests you aren't interested in the css,
but the requireJS will refuse to work if it can't find the files.

It is faster to create empty files than to run the usual machinery of SASS or LESS.

## Installation

The easiest way is to keep `karma-empty-css-preprocessor` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~0.10",
    "karma-empty-css-preprocessor": "~0.1"
  }
}
```

You can simple do it by:
```bash
npm install karma-empty-css-preprocessor --save-dev
```

