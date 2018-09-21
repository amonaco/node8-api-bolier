const sample = require(config.root + '/app/controllers/')

module.exports = (app) => {
  app.get('/', sample.index)
}

