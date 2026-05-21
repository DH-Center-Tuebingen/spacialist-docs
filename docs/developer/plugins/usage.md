# Create A Plugin

Plugins are very powerful small programs that allow for the extension of the core spacialist functionality.
Historically, quite common components were extracted to plugins to keep the Spacialist core slim and clean,
those were the File and the Map plugins.

When you have additional funcitonality for your project in mind, the plugin system should normally be powerful 
enough to make this a reality. If you require additional features for your plugin, feel free to contact us. 
We are open for extending the plugin functionality with useful features.


:::danger
But be aware! With great power comes great responsibility! Spacialist plugins are very powerful and allow
direct access to the data without additional safeguards, so it is upon the _plugin developer_ to ensure, that
users rights are still accounted for inside the plugin. The the plugin resprects the data integretiy.
_Maintainers_ should therefore strictly restrict the right to upload and install plugins.
:::

## Using The Template

For creating a plugin you may start by creating a project based on the plugin template from our GitHub:

[https://github.com/DH-Center-Tuebingen/spacialist_plugin_template](https://github.com/DH-Center-Tuebingen/spacialist_plugin_template)

With this project you start with a running plugin environment and can directly start to adjust the plugin. 
Also a handful of functionalities are already showcased in this example. However, you need to cleanup the
unnecessary parts yourself to keep a clean plugin structure.

## Starting From Scratch

A plugin in Spacialist is quite simple, you just need to have a root directory with wht plugin name, a 'plugin.xml' at the root (the [manifest](./manifest.md) file) and a script at 'js/script.js'. Then your plugin is already ready to be executed within Spacialist.

