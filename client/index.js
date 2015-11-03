import React from 'react';
import Rx from 'rx';
import immutable from 'immutable';

function render(values) {
  React.render(
      (<div>
          <h3>React Entry 2</h3>
          <div>{
            values.map((value, idx) => {
              return (<div key={idx}>{value}</div>);
            })
          }</div>
      </div>),
      document.querySelector('[data-app]'));
}

import ioInit from 'socket.io-client';
const socket = ioInit();

const socketConnect$ = Rx.Observable.fromEvent(socket, 'connect')
  .map(() => {
    return 'Connected.';
  });

const socketMessage$ = Rx.Observable.fromEvent(socket, 'message');

const socket$ = socketConnect$
  .flatMap(() => {
    return socketMessage$;
  })
  .scan((values, value) => {
    return values.push(value);
  }, immutable.List());

socket$.subscribe(
  (values) => {
    render(values);
  });
