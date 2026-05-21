# Internal Structure

In v12 the internal structure of plugins was fundamentally reworked. 



## Plugin Manager

The `PluginManager.php` controls all plugins and invokes the lifecycle operations.
All [additional services](#available-services) that have effect on the plugin lifecycle are injected
into the manager. 

## Plugin Manifest

The `PluginManifest.php` is responsible of parsing and accessing the manifest file.
With the `getTagNodes(string $xpath)` is the easiest way to retrive manifest values.

When a Service is dependent on manifest entries, it should implement the 
`ManifestContent` interface.

```php
    function getManifestValue(Plugin $plugin){
        $manifest = PluginManifest::fromPlugin($plugin);
        $authors = $manifest->getTagNodes('author/authors');
        dd($authors);
        
        $looksLike = [
            [
               "tag" => "author",
                "text" => "Erin Example",
                "attributes" => []
            ],            [
               "tag" => "author",
                "text" => "Erin Example",
                "attributes" => []
            ]
       ]
    }
``` 

## Plugin Directory

The `PluginDirectory.php` is responsible for all file operations that are performed on plugins.
It manages the plugin's directory, retrieving files and their contents.

## Plugin Log

For a cleaner event log for the plugins, a new Log channel 'plugin' was introduced in the `config/logging.php` logging into the `storage/logs/plugin.log` file. This logger received a new utility class `PluginLog` to log all
relevant events in the Plgin Lifecycle to that file. It supports all of laravels [log levels](https://laravel.com/docs/13.x/logging#writing-log-messages) which is based on the [RFC 5424](https://datatracker.ietf.org/doc/html/rfc5424).

```php
$plugin;
$pluginName = $plugin->name;

// Get logger directly by name:
new PluginLog($pluginName);
PluginLog::forName($pluginName);

// Get logger with plugin:
PluginLog::for($plugin);

// Messages can be chained directly:
PluginLog::for($plugin)->warning("This is a warning marked by the plugin name!")

//  Available Log Levels (* recommended)
//  emergency
//  alert
//  critical
//  error *
//  warning *
//  notice 
//  info *
//  debug
```

## Caching

To improve performance and reduce database queries, the Services use a simple caching system,
which is also used by Laravel (but unfortunately no utility class is exposed for that). The `BootstrapCache`
writes a simple php file into `bootstrap/cache/plugin/cache-name{-testing}`. 

Services may implement the `BootstrapCache` trait and define their own cache store. Those stores are 
appended by the `-testing` postfix, if they were created while testing to avoid invalid data.
The PluginManager does rebuild all the caches at certain points in the plugin lifecycle.

This should improve the performance noticably, e.g. the `PluginRoutes` is checked on every request and with the 
Cache it just loads the php file (or reads it from memory) instead of creating a new connection to the database.

## Available Services

For an overview of all available Services please visit the [Feature Section](./plugin-features).
