const request = require('request');
let authorization;
function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
    }
}

module.exports.authorization = (token) => {
    authorization = token;
}

module.exports.get = req('GET');
module.exports.put = req('PUT');
module.exports.post = req('POST');

function req(method) {
    return (url, options, params) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authorization}`
        };
        for (header in options.headers) {
            headers[header] = options.headers[header]
        }
        const requestOptions = {
            method: method,
            url: url,
            headers: headers,
            body: JSON.stringify(params)
        };
        return new Promise((resolve, reject) => {
            request(requestOptions, (error, response, body) => {
                if (error) {
                    return console.error('error:', error);
                    reject(error);
                }
                // console.log('Server responded with:', body);
                resolve(body);
            });
        });
    }
}