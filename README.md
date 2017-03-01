# babel-plugin-transform-react-jsx-component-data-ids

Based on https://github.com/adrianton3/babel-plugin-transform-react-jsx-location

Adds a `data-component-id` attribute to JSX tags containing either the component name (optionally concating `data-guide-role` property).
Skips HTML tags, unless `data-guide-role` property is specified.

## Installation

```bash
npm install babel-plugin-transform-react-jsx-component-data-ids
```

## Usage

### Via `.babelrc` (Recommended)

```js
// without options
{
  "plugins": ["transform-react-jsx-component-data-ids"]
}

// with options
{
  "plugins": [
  	["transform-react-jsx-component-data-ids", { 
  	    "filename": "compact",
  	    "attributeName": "source"
    }]
  ]
}
```

### Via CLI

```sh
babel --plugins transform-react-jsx-component-data-ids script.js
```

### Via Node API

```js
require('babel').transform('code', {
	plugins: ['transform-react-jsx-component-data-ids']
})
```
