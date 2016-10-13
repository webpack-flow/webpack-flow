const flow = require('../flow')

/**
 * Env helper
 * @return {function} A function which returns relevant flows speficied by env
 */
module.exports = (...flows) => {
  return env => {
    return process.env.NODE_ENV === env ? flow(...flows) : null
  }
}
