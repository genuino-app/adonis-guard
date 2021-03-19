'use strict'

/**
 * adonis-guard
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 */

const { AuthorizationException } = require('../Exceptions')

class Can {
  async handle ({ auth, guard }, next, [method, ...argument, params]) {
    console.log(params)
    if (!guard.can(auth.user).pass(method).for(argument, params)) {
      throw AuthorizationException.invoke('Unauthorized', 401, 'E_UNAUTHORIZED')
    }

    await next()
  }
}

module.exports = Can
