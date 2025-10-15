# Common Issues

## Login fails with correct credentials 401: {"message":"Unauthenticated."}

Most likely you didnt set the _SANCTUM_STATEFUL_DOMAINS_ in the env file, it's incorrect or the current domain is missing.
If you run Spacialist on _localhost:8000_ and ThesauRex on _localhost:8001_ and your .env file has:

```bash
SANCTUM_STATEFUL_DOMAINS=localhost:8000
```
You must add Thesaurex to that config, also make sure that you set the _SESSION_DOMAIN_ correctly:

```bash
SANCTUM_STATEFUL_DOMAINS=localhost:8000,localhost:8001
SESSION_DOMAIN=localhost # You can only define one domain here.
```

::: danger
When you have SESSION_DOMAIN set to _localhost_ and you access site using `127.0.0.1:8001` you may get the error, 
as this domain is not supported, only _localhost_ is.
:::

## cURL error 56: Recv failure: Connection was reset by peer

Spacialist and Thesaurex (v.0.11+) use Laravel Reverb for realtime updates, which this requires a reverb server running to process those websocket requests. However, both programs should work normally if the server is unavailable. But this error may occur on your setup when the reverb server is not running. 

The most probable solution is that the requested port/location (e.g "localhost:9000") does listen for requests and denies the connection for the client resulting in this error. Easiest solution is to change the requested port to a unused port number.

## Cookies - User getting logged out in different application on same domain

The cookie based authentification requires you to have the _APP\_PATH_ set to the root shared of all project applications (e.g. Spacialist and ThesauRex). Otherwise the remember cookie will not match the last value and log out the current user. Please check the [Authentification](./framework/auth.md) section for more details.