const telnyx = require('./index.js');
telnyx.setToken('FcEMCiRQgMiq3APPAVxE4cwA');
// telnyx.sendSms('+17274590222', '+13213614850', 'Hello world', 'pItuL4JLXrUiuoxeiPLEKigS').then(response => {
//     console.log(response)
// });

// telnyx.lookup('3213614850').then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log(error);
// });

telnyx.listCdrRequests().then(response => {
    console.log(response);
}).catch(error => {
    console.log(error);
});