# Attribute Types

The Spacialist provides a big variety of different attribute types that can be used inside your [Data Model](/user/data-model).
Named versions of those *Attribute Types* are used to populate the [Entity Types](./entity-type).

In the next section we'll introduce all available attribute types, what they are used for and how the import data has to be formatted.


## Boolean

Used for single checkbox to represent the binary values `true`and `false`.

### Import Format

When importing only truthy values will be considered. When cells are empty those are considered as `false`.

The values that are considered true are:

- `x`
- `t` or `true`
- `w` or `wahr` 
- [numeric values](https://www.php.net/manual/de/function.is-numeric.php) > 0

### Date

Represents a single date attribute, that is rendered with a default calender input field in the application.

## Import Format

It only accepts dates in the format `YYYY-MM-DD`: e.g. `2024-10-30`


