# Authentication

Spacialist and Thesaurex use the regular Laravel authentication in combination with 
the [Laravel Sanctum](https://laravel.com/docs/sanctum). Sanctum adds a CSRF-Token and with
it the protection from XSS attacks. Furthermore it has the potential to access the 
api from Spacialist from any other application, by generating an access token with it's own 
priverleges, which may be interesting for future developments.

## Cookies

This setup leaves the application with three cookies that are managed by Laravel:

1. REMEMBER The remember_web token keeps the user logged in, the token is managed in the database and updated on any request, if the request contains an invalid token, the user is logged out immediately.
2. XSRF-TOKEN: A token used in the _Laravel Sanctum_ system to prevent XSS attacks
3. SESSION: A session cookie from the _Laravel Sanctum_ system

To prevent a collision of the different cookies on the same domain, Spacialist takes some measures to separate them:

## Unique Named Cookies

The XSRF-TOKEN and SESSION token get unique names depending on environment the environment.
Those names try to conform the existing naming convention of those cookies:

| Type      | Default Name      | Unique Name in Spacialist or Thesaurex    |
| ---       | ---               | ---                                       |
| XSRF      | XSRF-TOKEN        | XSRF-TOKEN-APP-NAME-SPACIALIST            |
| SESSION   | app\_name\_session  | app\_name\_spacialist\_session               |

## Cookie Path

An alternative to the unique name is to restrict the cookies to a specific path. 
However, as the current dual nature of those cookies, we need to deal with the REMEMBER token.
This is a token that is managed inside the user table for every user and requires to be 
present at every request. That leaves us with the situation, that when multiple apps - Spacialist and ThesauRex to be specific -
must share this cookie to not get logged out when an outdated cookie is sent.
So if there are multiple projects running on the same domain, the path variable _APP\_PATH_ must be set to the root of both application.

