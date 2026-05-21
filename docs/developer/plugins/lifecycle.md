# Lifecycle

The `PluginManager` is reponsible for the Plugin lifecycle and it will call the lifecycle function on all the services that are registered in the PluginManager's constructor. Those are the important moments when your 
plugin can react on a change within the application state.

## Lifecycle Events

The `PluginManager` manages the events: 
1) install
2) update
3) uninstall
4) remove

For each of these events, there are additionally `onBefore` and `onAfter`events (e.g. `onBeforeInstall`).

The `onBefore` happens just before all regular `on` events are executed. The `onAfter`happens after 
all additional changes (e.g. saving of the plugin) were executed. You'll only need those in 
rare cases. 

The `PluginManager` automatically rebuilds the entire ServiceCache, when a plugin was installed,
uninstalled or updated. It is not rebuild on remove, as remove can only be triggered when the 
plugin is uninstalled, and when it's uninstalled it's cache is already irelevant for the application.

So you don't need to cache the services manually inside the Service itself. The caching happens after the
`on` and before the `onAfter` events are executed. So if you need to cache your data after an `onAfter` call, you need to do it manually.

All lifecycle functions are called with two parameters `onLifecycleEvent(Plugin $plugin, PluginManifest $manifest)`.
The manifest could be deduced from the `$plugin` but as it is commonly used, it creates less overhead passing it directly.

### Install

When a plugin is discovered, it'll be listed in the database, but it's `installed_at` timestamp will be `null`.
When installed the plugin's migrations will be run, it's script and css files will be published and it will be marked as installed, by setting the `installed_at` value. Installed plugins cannot be removed.

### Update

When you get a new version of a plugin, you can upload it, that will result in an automatical update of the
existing plugin (an update is an upload of a plugin with the exact same name and a higher version number).
You cannot update a plugin with a lower version number. This will result in an error.

On update all migrations that were not run yet, will be run again.


### Uninstall

When a plugin is uninstalled the data will not be deleted, the database stays quite the same, but existing
functionality will not be available anymore, e.g. when a plugin registered an attribute and you uninstall the
plugin, said attribute will be rendered as a default textbox, but all associated data remains in the database.
Scripts and CSS files will be unpublished and it's PHP functionalities will be unregistered.

When installing it again, all those function should work again without any loss of data.

### Remove

Removing a plugin does result in data loss! The migrations of the plugin will be rolled back, meaning e.g. the
created table columns will be deleted. And the entire plugin directory will be removed from the system. Before
you remove a plugin, you should be certain of what you are doing.

 