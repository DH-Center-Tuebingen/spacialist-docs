# The Manifest File (plugin.xml)

The `plugin.xml` is the registration card of the plugin.
With it you get a quick overview, what the plugin is doing.
It's location is directly inside the root directory with the name 'plugin.xml'.
For compability reasons, it can be located at `App/info.xml` but this location is 
deprecated and should be avoided, as it will be removed in a future release.
(Using this will print a warning to the [plugin.log](#plugin-log))

The plugin xml is composed of a set of required fields and additionally 
capabilities can be added as needed.

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<plugin>
    <name>ExamplePlugin</name>
    <description>The example plugin should be just added as a showcase.</description>
    <version>1.0.0</version>
    <licence>mit</licence>
    <authors>
        <author>Erin Example</author>
        <author>Max Muster</author>
    </authors>
    ...
</plugin>

```

## Required Fields

### Name

Name of the plugin in pascal case (e.g. ExamplePlugin).

This **must** be the name as the containing directory. When the plugin is packaged 
inside a ZIP directory the root directory **must** have that folder as single root. If put manually inside
the plugin directory the folder name **must** match the plugin name.

### Description

Description of the plugin.

This will show up on the plugin overview page to give the user a short description of
what the plugin is meant for.

### Licence

Licence under which the plugin is published.

Provide the license your plugin is developed with, that user's are aware of their
rights when using or modifying the plugin.

### Authors

A list of authors that were involved in developing the plugin. 

All authors can be added inside the `<authors>` tag within a separate `<author>` tag.
Those 

## Capabilities

To get a overview of all available capabilities, please visit the [Feature Section](./plugin-features).



