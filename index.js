const _ = module.exports = require('./flow')

_.flow = require('./flow')
_.entry = require('./flows/entry')
_.output = require('./flows/output')
_.extensions = require('./flows/extensions')
_.babel = require('./flows/babel')
_.env = require('./flows/env')
_.compress = require('./flows/compress')
