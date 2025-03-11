# Attribute

An attribute is a certain implementation of an Attribute in combination with a [Dictionary Label](./thesaurus). These attributes are applied to [_Entity Types_](./entity-type.md) to create Spacialists [_Data Model_](./data-model.md).

## Dependencies


_Attribute Dependencies_ are a feature to conditionally hide attributes. 
When adding an attribute to an [_Entity Type_](./entity-type.md) you can specify a variety of conditions on when those attributes should be shown. 

| Condition     | Effect                                                                           | Symbol  | Technical    |
| ---           | ---                                                                              | ---     |---           |
| set           | The attribute does contain a value, therefore is **not** empty                   | ?       | x != null    |
| unset         | The attribute does **not** contain a value, therefore is empty                   | ?!      | x == null    |
| equal         | The attribute equals the selected value _y_                                      | =       | x == y       |
| not equal     | The attribute is **not** equal the selected value _y_                            | !=      | x != y       |
| less          | The attribute is less than the selected value _y_                                | <       | x < y        |
| less equal    | The attribute is less or equal the selected value _y_                            | <=      | x <= y       |
| greater       | The attribute is greater than the selected value _y_                             | >       | x > y        |
| greater equal | The attribute is greater or equal the selected value _y_                         | >=      | x >= y       |

Furthermore, you can define multiple _Dependency Groups[1]_, to cover more complex cases.
Inside the group you have one operand and over the other groups you have it's counterpart (e.g. in the groups _AND_ and inbetween groups _OR_).

| Attribute Type        | Supporter Rules                                                         |
| ---                   | ---                                                                     |
| boolean               | =, !=                                                                   |
| date                  | =, !=, **?, !?,** <, <=, >, >=                                          |
| daterange             | -                                                                       |
| dimension             | -                                                                       |
| double                | =, !=, <, <=, >, >=                                                     |
| entity                | =, !=                                                                   |
| entity-mc             | =, !=                                                                   |
| geography             | -                                                                       |
| iconclass             | =, !=, ?, !?                                                            |
| integer               | =, !=, <, <=, >, >=                                                     |
| list                  | =, !=, ?, !?                                                            |
| percentage            | =, !=, <, <=, >, >=                                                     |
| richtext              | ?, !?                                                                   |
| rism                  | =, !=, ?, !?                                                            |
| serial                | -                                                                       |
| si-unit               | =, !=, <, <=, >, >=                                                     |
| sql                   | -                                                                       |
| string-sc             | =, !=, ?, !?                                                            |
| string-mc             | =, !=, ?, !?                                                            |
| table                 | -                                                                       |
| textbox               | =, !=, ?, !?                                                            |
| textfield             | =, !=, ?, !?                                                            |
| timeperiod            | -                                                                       |
| timeperiod and epoch  | -                                                                       |
| url                   | =, !=, ?, !?                                                            |
| userlist              | -                                                                       |

[1] **First Released in 0.11**