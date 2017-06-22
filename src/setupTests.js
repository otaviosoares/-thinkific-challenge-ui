require('jest-enzyme');

window.localStorage = window.sessionStorage = {
  getItem: function (key) {
    return this[key];
  },
  setItem: function (key, value) {
    this[key] = value;
  },
  removeItem: function (key, value) {
    this[key] = null;
  }
};