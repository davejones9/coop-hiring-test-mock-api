# Co-op hiring test mock API
A mock API returning a simple JSON object. The API can be accessed at <https://coop-mock-test-api.herokuapp.com>. _(Note: this runs on a free Heroku dyno, and may therefore require a little bit of time to start up when first queried)._

## Response

The response is a singular JSON object representing the target and amount raised for a fictional charitable cause.

Example response:
```json
{
  "status": "OK",
  "target": 7500,
  "raised": 6807.02
}
```

The following properties are returned:

### `status`

Always equal to `"OK"`.

### `target`

An random integer between 5000 and 10000, rounded to 500.

### `raised`

A random float less than or equal to the `target` and rounded to 2 decimal places.
