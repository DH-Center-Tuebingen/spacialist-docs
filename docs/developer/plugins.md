# Plugin

::: danger
The Plugin system is currently under revision and is most likely to change significantly in release 0.12
:::

Plugins provide users and developers the ability to have a modular system of extending the functionality of the spacialist software without the need of having all functionality in one gigantic application. 


## Plugin Flow

Upload > Install > Activate >< Deactivate < Uninstall < Remove

## Plugin Structure

- 📂 .vscode
- 📂 App*
    - Main.php*
- 📂 build
- 📂 Migration    
- 📂 routes
- 📂 storage
- 📂 src
    - 📂 components
    - App.vue
    - main.js
- manifest.xml*
- package.json*
- index.html*
- README.md*
- CHANGELOG.md*
- vite.config.js*

\* required





## Plugin Permissions

Plugins can be hooked to a variety of locations of the Spacialist. 

### Backend

+ Migrations
+ Routes
+ Models
+ Storage


### Frontend

+ as Links
    + SettingsDropdown 
+ as Components
    + DetailsTab
+ as Views
    + Routes
    
### Operations

Currently available options are:

+ [register*](#register)
+ [registerI18N](#register-i18n)
+ [registerRoutes](#register-routes)
+ [registerPreference](#register-preferences)
+ [intoSlot](#into-slot)

* is required to be called by the plugin (unless it only uses PHP)

#### Register

You need to register a plugin with the register function:

```javascript
register({id*, i18n, routes, store})
```

+ **Id** _string_ - is required and must be unique for your plugin. 
+ **i18n** [_i18nObject_](#i18n-object) - automatically calls the [_registerI18N\(i18n\)_](#register-i18n) method
+ **routes** - [_routesArray_](#routes-array) automatically calls the [_registerRoutes\(routes\)_](#register-routes) method
+ **store** store of the plugin to register

#### Register I18N
The i18n method is used to register the i18n files of the plugin. 

```javascript
registerI18N(id*, i18n*)
```

+ **Id** _string_ - unique id string of the plugin. 
+ **i18n** [_i18nObject_](#i18n-object) - the i18n object of the plugin.

##### I18N Object

The i18n object is a JSON object with the following structure:

```json
{
    "en": {
        "message": "This is a message in english."
        ...
    },
    "de": {
        "message": "Dies ist eine Nachricht auf deutsch."
        ...
    }
}
```

#### Register Routes
The routes method is used to register the routes of the plugin. 

```javascript
registerRoutes(id*, routes*)
```
+ **Id** _string_ - unique id string of the plugin.
+ **routes** [_routesArray_](#routes-array) - the routes object of the plugin.

##### Routes Array

Array that contains [vue-router routes](https://router.vuejs.org/api/interfaces/RouteRecordNormalized.html). For example:

```json
...
[
    {
        "path": "/plugin",
        "name": "plugin",
        "component": MyPluginComponent,
        "meta": {
            "title": "Plugin"
        }
    },
    ...
]
```	

#### Register Preferences

The preferences method is used to register the preferences of the plugin. 
```javascript
registerRoutes({
    of*, 
    key*, 
    label*, 
    category*, 
    subcatogery*, 
    custom_subcategory, 
    custom_label,
    component, 
    componentTag, 
    data, 
    default_value
})
```

+ **of** _string_ - unique id string of the plugin.
+ **key** _string_ - unique key string of the preference.
+ **label** _string_ - label of the preference.
+ **category** [_"system"_,_"user"_] - category of the preference ().
+ **subcategory** _string_ - subcategory of the preference.
+ **custom_subcategory** _string_ - custom subcategory of the preference.
+ **custom_label** _string_ - custom label of the preference. **Must be set if custom_subcategory is set.**
+ **component** _string_ - component of the preference.
+ **componentTag** _string_ - tag of the component.

#### Into Slot

The intoSlot method is used to register the plugin into a slot. E.g. the 'Tab' view of the details page. 

```javascript
intoSlot({
    of*,
    slot*,
    component,
    componentTag,
    key,
    icon,
    label,
    href
})
```

+ **of** _string_ - unique id string of the plugin.
+ **slot** _["tab","tools","settings"]_ - unique slot string of the plugin.
+ **key** _string_ - unique key string of the slot. 
+ **icon** _string_ - icon of the slot.
+ **label** _string_ - label of the slot.
+ **href** _string_ - _Unknown at the moment_.
+ **component** _string_ - component of the slot. Requires componentTag to be set.
+ **componentTag** _string_ - tag of the component, **defaults to key**.