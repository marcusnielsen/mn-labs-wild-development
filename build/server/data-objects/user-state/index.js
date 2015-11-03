"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = userStateFactory;

function userStateFactory() {
  return {
    prerequisites: {
      github: false,
      heroku: false,
      node: false
    },
    labs: {
      projectSetup: false,
      staticServer: false,
      clientSetup: false,
      reactComponent: false,
      reactRouter: false,
      restApi: false,
      webSockets: false,
      jwt: false
    }
  };
}

module.exports = exports["default"];
//# sourceMappingURL=index.js.map