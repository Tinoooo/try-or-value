# try-or-value
A simple utility function for inline try-catch-statements.

## API
`tryOrValue(fn, fallbackValueOrFunction)`

## usage
```javascript
const myObject = tryOrValue(() => JSON.parse(buggyJSONString), {});
//or
const myObject2 = tryOrValue(() => JSON.parse(buggyJSONString), () => 3);
```
