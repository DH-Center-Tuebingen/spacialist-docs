# Testing Data

This should provide a quick and easy overview of the testing data to more easily formulate test cases. 
Listed are always the names of the items with their corresponding id in paranthesis.
Be aware that this data may change in the future and may be outdated in the documentation. 
Check the links to quickly go to the master Database Seeders.


## Users

Users are defined in the [Admin User Seeder](https://github.com/DH-Center-Tuebingen/Spacialist/blob/master/database/seeders/AdminUserSeeder.php) and the [Demo User Seeder](https://github.com/DH-Center-Tuebingen/Spacialist/blob/master/database/seeders/DemoUserSeeder.php).

| id        | name          | nickname       | email                | password      | roles          |
| ---       | ---           | ---            |---                   | ---           | ---            |
| 1         | Admin         | admin          | admin@localhost      | admin         | administrator  |
| 2         | John Doe      | johndoe        | john.doe             | password      | admin. & guest |
| 3         | Gary Guest    | garyguest      | gary.guest@mail.com  | password_gary | guest          | 
     
## Entities

Entities as defined inside [EntitiesTableSeeder](https://github.com/DH-Center-Tuebingen/Spacialist/blob/master/database/seeders/EntitiesTableSeeder.php)

| id        | name          | type                  | parent entity 
| ---       | ---           | ---                   | ---
| 1         | Site A        | Site (3)              |  
| 2         | Befund 1      | Feature (4)           | Site A (1)
| 3         | Inv. 1234     | Ceramic (5)           | Befund 1 (2)
| 4         | Inv. 124      | Ceramic (5)           | Befund 1 (2)
| 5         | Inv. 31       | Stone (6)             | Befund 1 (2)
| 6         | Aufschluss    | _Lagerstaette_ (7)    | 
| 7         | Site B        | Site (3)              | Aufschluss (7)
| 8         | Fund 12       | Ceramic (5)           | Aufschluss (7)


## Entity Types

Entity types as defined inside [EntityTypesTableSeeder.php](https://github.com/DH-Center-Tuebingen/Spacialist/blob/master/database/seeders/EntityTypesTableSeeder.php) and their according relations, that are defined inside [EntityTypeRelationsTableSeeder.php](https://github.com/DH-Center-Tuebingen/Spacialist/blob/master/database/seeders/EntityTypeRelationsTableSeeder.php).

| id        | name          | allowed children      | can be top entity | allowed parents           |
| ---       | ---           | ---                   | ---               | ---                       |
| 3         | Site          | 3, 4, 5, 6, 7         | x                 | 5                         |
| 4         | Feature       | -                     |                   | 3, 5, 6, 7                |
| 5         | Ceramic       | 3, 4, 5, 6, 7         |                   | 3, 6, 7                   |
| 6         | Stone         | 4, 5, 6, 7            |                   | 3, 5, 7                   |
| 7         | _Lagerstaette_| 4, 5, 6, 7            | x                 | 3, 5, 6, 7                |

## Entities by Type

Entities as defined inside [EntitiesTableSeeder](https://github.com/DH-Center-Tuebingen/Spacialist/blob/master/database/seeders/EntitiesTableSeeder.php) and their respective [EntityTypes](https://github.com/DH-Center-Tuebingen/Spacialist/blob/master/database/seeders/EntityTypesTableSeeder.php).

| Site          | Feature       | Ceramic       | Stone         | _Lagerstaette_        |
|   ---         |  ---          |   ---         |   ---         |   ---                 |
| Site A (1)    | Befund 1 (2)  | Inv. 1234 (3) | Inv. 31 (5)   | Aufschluss (6)        |
| Site B (7)    |               | Inv 124 (4)   |               |                       |