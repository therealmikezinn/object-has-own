const hasOwn = {}.hasOwnProperty;

const objectHasOwn = (obj, prop) => hasOwn.call(obj, prop);

module.exports = objectHasOwn;