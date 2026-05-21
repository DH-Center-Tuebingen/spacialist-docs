# Development

There are some quality of life tips, that can be used when developing a plugin.

## Playground Development (Frontend Development)

When developing your frontend, it is tedious, to always wait for spacialist to reload the application, therefore you should use an offline _playground_ that mocks application data and you can develop the frontend application with vite's hot reloading.

A playground environment is already included in the plugin template repository and should be made available as separate package in the future.

## Symlinking Script Files

When testing directly in your Spacialist development environment and make changes to your script files,
the application would require to re-publish the script everytime it is built, which can be done by reinstalling the plugin. If your plugin is stored at it's correct location inside spacialist (`App/Plugins/PluginName`) then you can symlink the script file directly to the script directory (`storage/app/private/plugins/pluginname_uuid.js`). So the compiled script will be loaded on reload. Reinstalling the plugin will respect the symlink and won't overwrite it with a static file.