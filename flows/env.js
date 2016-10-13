const flow = require('../flow')

/**
 * Env helper
 * @return {function} A function which returns relevant flows speficied by env
 */
module.exports = (...flows) => {
  return env => {
    const condition = env[0] === '!' ?
      process.env.NODE_ENV !== env.substr(1) :
      process.env.NODE_ENV === env
    return condition ? flow(...flows) : null
  }
}
