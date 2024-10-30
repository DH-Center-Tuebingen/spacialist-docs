---
introduced_at: 0.10.2
---
# Export Entity Types (Data Model)

Copies all entity types and their related data from the regular database (`DEFAULT_DB`) to a different database (`TRANSFER_DB`) based on a single entity of the `DEFAULT_DB` that needs to be specified using the `--entity` parameter.

The program will collect all data and requires a user confirmation before changing any data inside the transfer database. The data can be evaluated in the `transfer.log` that is located at `storage/logs/transfer.log`.

This will transfer 

+ Entity Types
+ Entity Type Relations 
+ Attributes
+ Entity Attribute Relations
+ Thesaurus Concepts
+ Thesaurus Concept Relations (broader/narrower)
+ Thesaurus Labels (of the languages 'en' and 'de')


## Example

```
php artisan app:export-types --entity=31
```

## Requirements

The `TRANSFER_DB` need to be defined inside the .env file:

```
DB_TRANSFER_CONNECTION=pgsql
DB_TRANSFER_HOST=localhost
DB_TRANSFER_PORT=5432
DB_TRANSFER_DATABASE=transfer-db
DB_TRANSFER_USERNAME=spacialist_user
DB_TRANSFER_PASSWORD=spacialist_user
``` 

## Parameters

`-e, --entity` Define the entity that should be the basis for the data model export. That entity and all it's child entities will be scanned to collect all related information that will be transfered to the `TRANSFER_DB`.

