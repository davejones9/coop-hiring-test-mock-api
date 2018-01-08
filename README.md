# Co-op hiring test mock API
A mock API returning a simple JSON object. This will be used to provide API-like data to a test for hiring front-end developers.

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

Always equal to `'OK'`.

### `target`

An random integer between 5000 and 10000, rounded to 500.

### `raised`

A random float less than or equal to the `target` and rounded to 2 decimal places.
