---

---
# Entity Type

_Entity Types_ are the _Blueprints_ of created Entities. 
They are a set of _Attributes_ in a specific order. 

## Frontend Access

_Entity Types_ can be created or modified inside the _Data Model Editor_. 

## Relation

_Entity Type_ Relations describe how entities can be structured inside 
the entity tree. An _Entity_ of type **A** can only be a subentity of _Entity_ of type **B** if there is an _Entity Type Relation_ 
that defines the _Entity Type Relation_ as `[parent: B, child: A]`.