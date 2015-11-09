'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _socketIo = require('socket.io');

var _socketIo2 = _interopRequireDefault(_socketIo);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _rx = require('rx');

var _rx2 = _interopRequireDefault(_rx);

var app = (0, _express2['default'])();
var server = _http2['default'].createServer(app);
var io = (0, _socketIo2['default'])(server);

app.use((0, _morgan2['default'])('dev'));

// if(config.liveReload) {
app.use(require('connect-livereload')({
  port: 35729
}));
// }
app.use('/client', _express2['default']['static'](__dirname + '/../../client'));

var event$ = _rx2['default'].Observable.interval(1000).timeInterval().map(function (value) {
  return JSON.stringify(value);
});

io.on('connection', function (socket) {
  console.info('a user connected: ' + socket);

  event$.subscribe(function (val) {
    socket.emit('message', val);
  });
});

function init(done) {
  server.listen(process.env.PORT, function onListen() {
    console.log('Server listening on port: ' + process.env.PORT + '\n');

    if (done) {
      done(server);
    }
  });
}

exports['default'] = {
  init: init
};
module.exports = exports['default'];
//# sourceMappingURL=index.js.map