require('../config');
import tape from 'tape';
import ioInit from 'socket.io-client';
import app from '../app';

const websocketUrl = 'http://localhost:' + process.env.PORT;

tape('Init app', function onTest(test) {
  app.init(function onInit() {
    test.end();
  });
});

// TODO: Verify if options are needed. -MANI
// Websocket as transport might be good to have
// as default test behavior.

const websocketOptions = {
  // transports: ['websocket'],
  // 'force new connection': true,
};

tape('Socket.IO', function onTest(test) {
  test.plan(1);

  const socket = ioInit(websocketUrl, websocketOptions);

  // TODO: Add OK assertion when connection is done. -MANI
  // socket.on('connect', function onConnect() {
  //
  // });

  socket.on('message', function onMessage(message) {
    socket.disconnect();
    test.equals(!!message, true);
  });
});

tape('Close app', function onTest(test) {
  app.close();
  test.end();
});
