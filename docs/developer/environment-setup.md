# Environment

Spacialist is highly customizable and being built on top of Laravel, a lot of adjustments can be made using the `.env` file 
this document should be a resource on what variables are available or also required, for the software to work properly. Most of this can also be found in the `install.md` file.

```bash
APP_NAME=<string*>
# Specifies the app name to distinguish between differnt instances.

APP_ENV=<string=production>
# Used to define the app environment. Available variables are: local, production and testing
   
APP_KEY=<base64:32bit-key> 
# Used by Laravel's encrypter service. Can be generated with 'php artisan key:generate`


APP_URL=<string=http://localhost> #set this to your proxy url if needed and enable it by setting APP_FORCE_URL to true

APP_FORCE_URL=<boolean=false>
# Can be set to enforce the app URL using your proxy url.
# Generally the same as APP_URL.


APP_DEBUG=<boolean=false>
# Can be used to get additional debug logs. 

APP_AVATAR_STORAGE_LOCATION=../spacialist/storage/app/private/avatars
# [THESAUREX ONLY]
# Defines the directory system path to the spacialist avatars.
# Can be an absolute or a relative path.

ASSET_URL=<string=/> 
# A Laravel variable responsible for setting Vite's base url: 
# The laravel server serves all files at localhost:8000, however vite is running on another host
# when not set properly, you may get errors like, e.g. 'CORS error cannot access script 'localhost:3000/
# assets/js/script.js' from 'mydomain.com/assets/js/script.js'.


# Laravel's database connection
# See Laravel docs for more information
DB_CONNECTION=
DB_HOST=
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

# Additional Laravel driver
# See Laravel docs for more information
CACHE_DRIVER=memcached
# !!! IMPORTANT: memcached is not working on Windows, use 'array' instead!

SESSION_DRIVER=file
QUEUE_DRIVER=sync

# REAL-TIME COMMUNICATION
BROADCAST_DRIVER=reverb
BROADCAST_CONNECTION=reverb
# Set's the mode for the realtime communication
# BROADCAST_CONNECTION will replace BROADCAST_DRIVER in the future, so we
# just define both here.
#
# !!! IMPORTANT: Spacialist is setup to use reverb, other drivers are not tested.

# Reverb (real-time) configuration
REVERB_APP_ID=<string*>
REVERB_APP_KEY=<string*>
REVERB_APP_SECRET=<string*>

REVERB_HOST=<string>
# Domain of the Reverb Server (without protocol and port)

REVERB_PORT=<int=443>
REVERB_SCHEME=<string=https>
# Reverb can use 'http' or 'https' scheme

# Vite (frontend) variables
VITE_APP_PATH=<string>
# Base path to the build directory (generally the same as APP_URL)

VITE_APP_NAME=spacialist-demo_alkha
# App name of the spacialist app. (Seems to have no effect in the application).

VITE_REVERB_DRIVER="${BROADCAST_CONNECTION}"
VITE_REVERB_APP_KEY="${REVERB_APP_KEY}"
# The app key is sent by the client for authentification

VITE_REVERB_HOST=<string*>
# Publically accessible domain of the reverb server. The websocket endpoint is
# hosted at ${VITE_REVERB_HOST}/app

VITE_REVERB_PORT=<int=443/80>
VITE_REVERB_SCHEME=<string=https>
# Can be either https or not.

VITE_REVERB_AUTH_ENDPOINT=<string=/broadcasting/auth>
# When you use the 'reverb_server' setup, your apps may sit behind a reverse proxy
# at a subpath. Specify this to call the correct auth endpoint for the application, 
# e.g. "/path/to/app/broadcasting/auth"
```
