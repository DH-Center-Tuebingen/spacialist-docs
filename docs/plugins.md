# Plugin

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