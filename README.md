## punctuation-name2symbol

**Transform this:**

`hello comma world exclamation point it's a beautiful day period what's new question mark`

**Into this:**

`Hello, world! It's a beautiful day. What's new?`


This is useful when dealing with speech-to-text software.

#### Usage:

`$ npm install --save punctuation-name2symbol`

In your project:

```javascript
const punctuate = require("punctuation-name2symbol");

punctuate("hello comma world exclamation point what's new question mark");
// Hello, world! What's new?
```

You can also pass in an object if you want to disable auto-capitalization:

```javascript
punctuate({
  text: "hello world period what's new question mark",
  capitalize: false
});
// hello world. what's new?
```

Escaping punctuation mark names is also possible:

```javascript
punctuate("what is your favorite time \\period question mark");
// What is your favorite time period?
```


#### Supported punctuation:

`period`

`comma`

`question mark`

`exclamation mark|point` (or just `exclamation`)

`hyphen|dash`

`colon`

`semi-colon`
