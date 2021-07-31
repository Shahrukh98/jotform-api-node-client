/* eslint-disable require-jsdoc, no-unused-vars, max-len*/

const fetch = require('node-fetch');
const querystring = require('qs');

class RequestHandler {
  constructor(client, method, path, options) {
    this.basePath = 'https://api.jotform.com/';
    this.key = client.key;
    this.method = method;
    this.path = path;
    this.options = options;
  }
  make() {
    const url = `${this.basePath}${this.path}?apiKey=${this.key}`;
    const data = (this.options === undefined) ? null : querystring.stringify(this.options);
    console.log(data);

    return fetch(url, {
      method: this.method,
      headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: data,
    });
  }
}

module.exports = RequestHandler;

// fetch("https://api.jotform.com/user/forms?apikey=13721ff14436d11b3165c206ce55d1d9", {
//   "headers": {
//     "accept": "application/json, text/javascript, */*; q=0.01",
//     "accept-language": "en-US,en;q=0.9",
//     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "x-requested-with": "XMLHttpRequest",
//     "cookie": "g_state={\"i_p\":1625923835999,\"i_l\":2}; userReferer=https%3A%2F%2Fwww.jotform.com%2Ftr%2Fmyaccount%2Fprofile; theme=tile-black; guest=guest_fa838de2873ce2fe; jtuc=justaplant%3A7d176e3d6ba8787086ebdd42d247dbe5; jcmc=justaplant%3A7d176e3d6ba8787086ebdd42d247dbe5; jcm=justaplant%3Acc6cadc4931b2c8766a398f4134f9286; jotApi=justaplant%3A7d176e3d6ba8787086ebdd42d247dbe5; JOTFORM_SESSION=7dc5d5vtru5is275ca599i9cu2; limitWarning=left_alt; language=en-US"
//   },
//   "referrer": "https://api.jotform.com/docs/",
//   "referrerPolicy": "strict-origin-when-cross-origin",
//   "body": "questions%5B1%5D%5Btype%5D=control_head&questions%5B1%5D%5Btext%5D=merhaba&questions%5B1%5D%5Border%5D=1&questions%5B1%5D%5Bname%5D=header&properties%5Btitle%5D=deneme",
//            questions%5B0%5D%5Btype%5D=control_head&questions%5B0%5D%5Btext%5D=merhaba&questions%5B0%5D%5Border%5D=1&questions%5B0%5D%5Bname%5D=header&properties%5B0%5D%5Btitle%5D=imtrying
//            questions%5B0%5D%5Btype%5D=&questions%5B0%5D%5Btext%5D=&questions%5B0%5D%5Border%5D=1&questions%5B0%5D%5Bname%5D=&questions%5B1%5D%5Btype%5D=control_head&questions%5B1%5D%5Btext%5D=merhaba&questions%5B1%5D%5Border%5D=1&questions%5B1%5D%5Bname%5D=header&properties%5Btitle%5D=ithinkimok
//   "method": "POST",
//   "mode": "cors"
// });