# Frontend Capabilities

A lot of functionalities are already available when only 
working with the frontend. There are some functions that need [Initial Registration](#initial-registration)
on startup in your script.js. Additionally the core exposes an SpPS ()



## Initial Registration

Specific functionality may be registered to the frontend by calling register functions
on startup. Those functons are:

| Function                                     | Description |
| ---                                          | --- |
|[register](#register)__*__                        | Required to register the frontend capabilities of the plugin, but can additonally be used to register various other features.  |
|[registerComponent](#register-components)     | Registers a component to be used as an attribute or to be consumed by another plugin.
|[registerI18N](#register-i18n)                | Register additional i18n translations for the plugin. |
|[registerRoutes](#register-routes)            | Register additional vue routes used by the plugin.    |
|[registerPreference](#register-preferences)   | Register additional preferences                       |
|[intoSlot](#into-slot)                        | Register a component into a plugin slot (e.g. Maps-Plugin registered into the 'Tab' slot to show the map)  |

__* is required to be called by the plugin (unless it only uses PHP)__

### Universal Register

You need to register a plugin with the register function to make the core application
aware of the plugin script.

```javascript
register({id*, i18n, routes, store})
```

+ **Id** _string_ - is required and must be unique for your plugin. 
+ **i18n** [_i18nObject_](#i18n-object) - automatically calls the [_registerI18N\(i18n\)_](#register-i18n) method
+ **routes** - [_routesArray_](#routes-array) automatically calls the [_registerRoutes\(routes\)_](#register-routes) method
+ **store** store of the plugin to register


### Register Components

You can register components either to use them as [Attribute](/spacialist-docs/user/attribute) or simply
register a component for other plugins to utilize. Internally used components don't need to be registered to the core they will just be compiled by the bundler into the `script.js`

```javascript
registerComponent({
    of*,
    key*,
    type*,
    datatype**,
    component*,
})
```

+ **of** _string_ - unique id string of the plugin.
+ **key** _string_ - unique key string of the preference.
+ **type** _['attribute' | 'component'] - if the component is used as attribute.
+ **datatype** _string_ - name of the datatype (** required if type is attribute).
+ **component** _component_ - component to mount

### Register I18N
The i18n method is used to register the i18n files of the plugin. 

```javascript
registerI18N(id*, i18n*)
```

+ **Id** _string_ - unique id string of the plugin. 
+ **i18n** [_i18nObject_](#i18n-object) - the i18n object of the plugin.

#### I18N Object

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

### Register Routes
The routes method is used to register the routes of the plugin. 

```javascript
registerRoutes(id*, routes*)
```
+ **Id** _string_ - unique id string of the plugin.
+ **routes** [_routesArray_](#routes-array) - the routes object of the plugin.

#### Routes Array

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

### Register Preferences

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

### Into Slot

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