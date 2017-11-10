/*
 * @Author: NiBo
 * @Date: 2017-03-10 11:21:53
 * @Last Modified by: NiBo
 * @Last Modified time: 2017-03-14 17:48:37
 */

function KError(message, statusCode) {
  this.name = 'KError';
  this.message = message || 'Unknown Error';
  this.status = statusCode;
  this.stack = (new Error()).stack;
}
KError.prototype = Object.create(Error.prototype);
KError.prototype.constructor = KError;

module.exports = KError;
