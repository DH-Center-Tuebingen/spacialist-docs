# Bibliography

Spacialist provides basic utilities for managing literature inside the application. Allowing scientists
to have a more meaningful discussion about their datapoints. This data is managed using _BibTex_, which is 
the most common standard for reference management.

## Workflow

Users can use their preferred literature management software when collecting the data and then import 
those items into Spacialist using the _BibTex_ export of said software.

## Available Fields

Spacialist supports the standard fields of _BibTex_ as defined in it's [Standard](https://ftp.gwdg.de/pub/ctan/biblio/bibtex/base/btxdoc.pdf) (3.Entries, p.8f).

Additionally we support the following fields:

-  **doi** Digital Object Identifier - Unique id for references.
- **issb** Unique identifier for books. [available for: @book and @inbook]
- **issn** Unique identifier for papers or journals. [available for: @article]

## Best Practice

For best results, use DOIs for importing into preferred literature management software. This ensures that all **required fields** (see Standard) are filled. Export _BibTex_ with **Unicode (UTF-8)** encoding for maximum compatibility.
