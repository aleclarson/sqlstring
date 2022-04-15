# @alloc/sqlstring

The `sqlstring@2.3.3` package with:

- TypeScript typings
- new `toJSON` option

&nbsp;

## The `toJSON` option

Pass `{ toJSON: true }` to any of the following methods…

- `escape`
- `format`
- `objectAsValues`
- `arrayToList`

…and any objects with a `toJSON` method will be coerced to a JSON string with it.

```js
import { format } from "@alloc/sqlstring";

const arr = [1, 2];
arr.toJSON = () => arr;

// toJSON=false
let sql = format("?", [arr]);
assert.equal(sql, `1, 2`);

// toJSON=true
sql = format("?", [arr]);
assert.equal(sql, `'[1,2]'`);
```
