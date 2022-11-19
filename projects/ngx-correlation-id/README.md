**Under development - please check again later**

# Getting started

Import the module into your `app.module.ts`

```
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCorrelationIdModule
  ],

```

Make a http request

```
http.get('https://www.google.com').subscribe();
```

Check the request header. There should be a `x-correlation-id` present 

# Release Notes

## Version 0.2.0

- CorrelationId comprise of only timestamp
- Http request header `x-correlation-id` is used to carry the correlation id

## TODO
- Support a system parameter - see https://www.npmjs.com/package/simple-correlation-id for more details
- Allow customizing header name
- Add Test

