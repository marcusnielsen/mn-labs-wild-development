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
const websocketOptions = {
  transports: ['websocket'],
  'force new connection': true,
};

tape('Socket.IO', function onTest(test) {
  test.plan(1);

  const socket = ioInit(websocketUrl, websocketOptions);

  socket.on('connect', function onConnect() {

  });

  socket.on('message', function onMessage(message) {
    socket.disconnect();
    test.equals(!!message, true);
  });
});

tape('Close app', function onTest(test) {
  app.close();
  test.end();
});
