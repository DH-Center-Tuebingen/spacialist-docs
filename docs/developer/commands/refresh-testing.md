---
introduced_at: 0.10.2
---
# Refresh Testing

Refreshes the database and optionally runs all tests.

## Example

```
php artisan app:test
```

## Requirements

The application must have a `.env.testing` file setup. 

## Parameters

`-r, --refresh` Must be set to run a migration and the DemoSeeder on the database. (Does a config:clear to prevent running the migration on the main db).

`-s, --skip`    Skips the testing process.
