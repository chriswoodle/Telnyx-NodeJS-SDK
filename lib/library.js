const requret = require('request');

const rest = require('./rest');

module.exports.setToken = (token) => {
    rest.authorization(token);
}
module.exports.sendSms = (to, from, body, profileSecret) => {
    return rest.post('https://sms.telnyx.com/messages',
        {
            headers: {
                'x-profile-secret': profileSecret
            }
        },
        {
            to: to,
            from: from,
            body: body
        });
}

module.exports.lookup = (number) => {
    return rest.get(`https://switchdata.telnyx.com/v1/Lookup/${number}`, {});
}

module.exports.callerId = (number) => {
    return rest.get(`https://data.telnyx.com/cnam/v1/caller-information/${number}`, {});
}

module.exports.createCdrRequest = () => {
    return rest.post('https://api.telnyx.com/reporting/cdr_requests',
        {},
        {});
}

module.exports.listCdrRequests = () => {
    return rest.get(`https://api.telnyx.com/reporting/cdr_requests`, {});

}