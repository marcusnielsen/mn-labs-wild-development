'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _tape = require('tape');

var _tape2 = _interopRequireDefault(_tape);

var _socketIoClient = require('socket.io-client');

var _socketIoClient2 = _interopRequireDefault(_socketIoClient);

var _app = require('../app');

var _app2 = _interopRequireDefault(_app);

require('../config');

var websocketUrl = 'http://localhost:' + process.env.PORT;

(0, _tape2['default'])('Init app', function onTest(test) {
  _app2['default'].init(function onInit() {
    test.end();
  });
});

// TODO: Verify if options are needed. -MANI
var websocketOptions = {
  transports: ['websocket'],
  'force new connection': true
};

(0, _tape2['default'])('Socket.IO', function onTest(test) {
  test.plan(1);

  var socket = (0, _socketIoClient2['default'])(websocketUrl, websocketOptions);

  socket.on('connect', function onConnect() {});

  socket.on('message', function onMessage(message) {
    socket.disconnect();
    test.equals(!!message, true);
  });
});

(0, _tape2['default'])('Close app', function onTest(test) {
  _app2['default'].close();
  test.end();
});
//# sourceMappingURL=index.test.js.map