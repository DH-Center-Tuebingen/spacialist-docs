# Plugin Features

All plugin features are registered as services inside the PluginManager's constructor.
If you find a feature that is not yet documented, feel free to edit this page or send us
a message to add it to the documentation.

## AccessPoints

Plugins can define additional access points. For a detailed description what access points are for refer to [User and Role Management](/spacialist-docs/user/user-and-role-management).

```xml
<accesspoints>
     <accesspoint path="/path_to_access_point" id="ExamplePluginId" label="path.to.accesspoint.label" />
     ...
</accesspoints>
```

- `path` unique path that is added to the Spacialist instance's root path under which this access point can be accessed.
- `id` unique identifier for this access point across all plugins.
- `label` label that is used to display the access point in the Spacialist UI. This is a path to a label in the plugin's i18n files using dot notation


## Attribute

Adds the capability for plugins to register custom attributes which extend the `AttributeBase` class.

These components have to be registered via the [frontend capabilities](./frontend-capabilities.md#register-components)
separately to have an effect. The backend attribute is required to correctly interpret
the received attribute data.

```xml
<attributes>
    <attribute src="/Path/To/Attribute/Class" />
</attributes>
```

+ `src` relative path to the Attribute file within the plugin directory


## Css

The CssService allows to add css files into your plugin. 
Those will be (similar to the [ScriptService](#script)) published 
and loaded into the app.blade.php file

```xml
    <css>
        <file src="css/file_a.css" />
        <file src="css/file_b.css" />
        ...
    </css>
```
+ `src` relative path to the css file within the plugin directory

## Dependency

Adds additional dependencies to the plugin. E.g. when a plugin is dependent
on the file plugin, it should add a dependency for that plugin.

If the dependency is not met, the installation of the plugin will fail.
Currently the depenedencies only take plugins into account.

```xml
<dependencies>
     <File />
     <Map />
     ...
</dependencies>
```

The tag name specifies the plugin name (it must match the PascalCase plugin name)

## Hook

Service that manages plugin hooks. Hooks are a way for plugins to inject functionality 
into existing routes or other parts of the application without modifying core code.

A order can be specified that forces the execution of hooks a specific position compared
to other hooks. Hooks with a higher value will be executed later than hooks with a lower value. 
So that later modifications will overwrite previous ones. The default order value is 0 and by default they are executed in the order 
of their creation.

```xml
<Hooks>
    <Hook on="Route/Path/To/Hook" src="Class@method" order="1"/>
    ...
</Hooks>
```

* `on` the api function the hook should be executed on
* `src` function to run when the hook is executed in the format of `ClassName@methodName` the function will receive a `$request` and `$response` object, which can be used to alter the processed data.
* `order` [OPTIONAL=0] - Can be used to execute it before or after certain hooks. 

## Migration

Plugins can define Migrations by declaring their directory inside their manifest file.
All migrations from all files are loaded and executed in the order of their creation as defined
by their file name, which must follow the Laravel migration file naming convention (e.g. "2024_01_01_000000_create_users_table.php").

:::warning
The 'MyPlugin/Migration' directory is by default evaluated for migration files. This will be removed in a future version.
:::

```xml
    <migrations path="Migration" />
``` 

+ `path` specifies the path to the migration directory if it's needed. We see no benefit from multiple migration locations, therefore only a single directory can be set.

## Permission

Service for managing user permissions.
Permissions are defined inside the "App/permissions.json" in the plugin directory.
The permissions.json file should have the following structure:

```json
{
  "permission_group_1": [
    {
      "name": "permission_name",
      "display_name": "Permission Display Name",
      "description": "Description of the permission"
    },
    ...
  ],
  "permission_group_2": [
    ...
  ]
}
```

## Role Preset

Service for managing role presets.

Role presets are additions to existing role presets. When a new role is generated
using an existing preset, the plugin functionality will be automatically be takein into account.
This will not effect roles that were created using a preset in the past. 

:::warning
If no routes are defined, the deprecated route `role-presets.json` will be checked. This will be removed in a future version.
:::


```xml
   <role-presets>
       <file src="/Path/To/presets.json" />
   </role-presets>
```


## Route


:::warning
When no route is specified in the manifest, the deprecated routes at 'routes/api.php' will be evaluated,
this will be removed in a future version.
:::

 ```xml
 <routes src="/lib/App/routes.php" middleware="api" />
 ```
 
 + `src` relative path to the route file
 + `middleware` [OPTIONAL="api"] Can optionally specify a different middleware for the api. Most of the time, this can be obmitted!

## Script

Every Plugin requires to provide a .js file at 'js/script.js' his file will be copied to the /storage/app/private/plugins'
directory and is loaded by default by the application.

## Scopes

Allows to add [global scopes](https://laravel.com/docs/13.x/eloquent#global-scopes) to the laravel application.

:::danger
Models in the backend require to implement the `HasPluginScopes` trait to be able to accept scopes. 
Currently this is only active on the Entity model.
:::

 ```xml
 <scopes>
     <scope src="App\Plugins\ExamplePlugin\Scopes\ExampleScope" on="App\Entity" />
     <scope src="App\Plugins\ExamplePlugin\Scopes\AnotherScope" on="App\Entity" />
 </scopes>
 ```

## Plugin Discovery

Discovers plugins inside the plugin directory, which did not follow the usual lifecycle (being uploaded by a user), e.g. where manually put in the plugin directory (e.g. cloned from github).