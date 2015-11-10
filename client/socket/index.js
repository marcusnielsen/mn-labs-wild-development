import Rx from 'rx';
import immutable from 'immutable';
import ioInit from 'socket.io-client';
const socket = ioInit();

const socketMessage$ = Rx.Observable.fromEvent(socket, 'message')
  .scan((values, value) => {
    return values.push(JSON.parse(value));
  }, immutable.List());

export default socketMessage$;
