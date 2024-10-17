# Bibliography

Spacialist provides basic utilities for managing literature inside the application. Allowing scientists
to have a more meaningful discussion about their datapoints. This data is managed using _BibTex_, which is 
the most common standard for reference management.

## Workflow

Users can use their prefered literature management software when collecting the data and then import 
those items into Spacialist using the BibTex export of said software.

## Available Fields

Spacialist supports the standard fields of BibTex as defined in it's [Standard](https://ftp.gwdg.de/pub/ctan/biblio/bibtex/base/btxdoc.pdf).

Additionally we support the following fields:

-  **doi** Digital Object Identifier - Unique id for references.
- **issb** Unique identifier for books. [available for: @book and @inbook]
- **issn** Unique identifier for papers or journals. [available for: @article]