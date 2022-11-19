**Under development - please check again later**

# Getting started

## 1. Import the module into your `app.module.ts`

```
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCorrelationIdModule
  ],
```

*Tip: `NgxCorrelationIdModule` provide some customization to the underlying https://www.npmjs.com/package/simple-correlation-id package. See release note sections below for details*

## 2. Make a http request

```
http.get('https://echook.azurewebsites.net/echo').subscribe();
```

## 3. Check the request header. There should be a `x-correlation-id` present

*The https://echook.azurewebsites.net/echo API will echo back all HTTP headers sent to it. The response looks like below (notice the presence of `x-correlation-id` header)*

```
{
  "method": "GET",
  "path": "/echo",
  "protocol": "HTTP/1.1",
  "headers": {
    "accept": "application/json, text/plain, */*",
    "host": "echook.azurewebsites.net",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9,vi;q=0.8",
    "cache-control": "no-cache",
    "max-forwards": "10",
    "origin": "http://localhost:4200",
    "pragma": "no-cache",
    "referer": "http://localhost:4200/",
    "sec-ch-ua": "\"Google Chrome\";v=\"107\", \"Chromium\";v=\"107\", \"Not=A?Brand\";v=\"24\"",
    "x-correlation-id": "ui-1668851520625",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-site": "cross-site",
    "sec-fetch-mode": "cors",
    "sec-fetch-dest": "empty",
    "x-arr-log-id": "c44cef71-afe9-417f-b019-a1239d992165",
    "client-ip": "220.255.68.222:60496",
    "x-client-ip": "220.255.68.222",
    "disguised-host": "echook.azurewebsites.net",
    "x-site-deployment-id": "echook",
    "was-default-hostname": "echook.azurewebsites.net",
    "x-forwarded-proto": "https",
    "x-appservice-proto": "https",
    "x-arr-ssl": "2048|256|CN=Microsoft Azure TLS Issuing CA 01, O=Microsoft Corporation, C=US|CN=*.azurewebsites.net, O=Microsoft Corporation, L=Redmond, S=WA, C=US",
    "x-forwarded-tlsversion": "1.2",
    "x-original-url": "/echo",
    "x-waws-unencoded-url": "/echo",
    "x-client-port": "60496"
  }
}
```

# Release Notes

## Version 0.3.0

### Support a system parameter - see https://www.npmjs.com/package/simple-correlation-id for more details

```
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxCorrelationIdModule.withConfig('ui')
  ],

```


## Version 0.2.0
- CorrelationId comprise of only timestamp
- Http request header `x-correlation-id` is used to carry the correlation id

## TODO
- Allow customizing header name
- Add Test

