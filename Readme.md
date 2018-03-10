# Telnyx NodeJS SDK

Access Telnyx API's from NodeJs

```
const telnyx = require('telnyx-sdk');
telnyx.setToken('myAPIToken');
telnyx.sendSms('+11231231234', '+11231231234', 'Hello World!', 'myProfileSecret').then(response => {
    console.log(response)
});
```