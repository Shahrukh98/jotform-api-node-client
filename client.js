class Client {
  constructor(apiKey) {
    this.key = apiKey;
    this.basePath = 'https://api.jotform.com/user/'
    console.log('object is created with key = ' + apiKey)
  }
}

module.exports = Client