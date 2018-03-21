### puncation-name2symbol

**Transforms this:**

`hello comma world exclamation point it's a beautiful day period how are you question mark`

**Into this:**

`Hello, world! It's a beautiful day. How are you?`


This is useful when dealing with speech-to-text software.

#### Usage:

`npm install --save punctuation-name2symbol`

In your project:

`const punctuate = require("punctuation-name2symbol")`

`punctuate("hello comma world exclamation point") // --> "Hello, world!"`



#### Supported punctation:

`period`


`comma`

`question mark`

`exclamation mark|point`

`hyphen|dash`

`colon`

`semi-colon`



