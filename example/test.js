const telnyx = require('../index.js');
telnyx.setToken('myAPIToken');
telnyx.sendSms('+11231231234', '+10120120123', 'Hello world', 'profileSecret').then(response => {
    console.log(response)
});

telnyx.lookup('0123456789').then(response => {
    console.log(response)
});