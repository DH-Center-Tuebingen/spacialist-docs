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
