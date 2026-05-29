# Plugin Log

Relevant plugin events should be logged into the dedicated plugin log file at `storage/logs/plugin.log`. Use the `App/Support/Log/PluginLog.php` class for convenient plugin logging.

```php
if(fails) {
    PluginLog::for($plugin)->error("Failed to execute this operation.");
}