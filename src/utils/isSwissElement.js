export default (testObj) => typeof testObj === 'function' && typeof testObj._getStyleHandler === 'function';