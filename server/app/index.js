import express from 'express';
import http from 'http';
import ioInit from 'socket.io';
import morgan from 'morgan';
import Rx from 'rx';

const app = express();
const server = http.createServer(app);
const io = ioInit(server);

app.use(morgan('dev'));

// if(config.liveReload) {
app.use(require('connect-livereload')({
  port: 35729,
}));
// }
app.use('/client', express.static(__dirname + '/../../client'));

const event$ = Rx.Observable.interval(1000)
  .timeInterval()
  .map((value) => {
    return JSON.stringify(value);
  });

io.on('connection', (socket) => {
  console.info('a user connected: ' + socket);

  event$.subscribe((val) => {
    socket.emit('message', val);
  });
});

function init(done) {
  server.listen(process.env.PORT, function onListen() {
    console.log('Server listening on port: ' + process.env.PORT + '\n');
    done(server);
  });
}

export default {
  init: init,
};
