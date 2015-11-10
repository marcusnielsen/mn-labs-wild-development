import React from 'react';
import socketMessage$ from './socket';

function render(values) {
  React.render(
      (<div>
          <h3>React Entry</h3>
          <div>{
            values.map((value, idx) => {
              return (<div key={idx}>{value}</div>);
            })
          }</div>
      </div>),
      document.querySelector('[data-app]'));
}

socketMessage$.subscribe(
  (values) => {
    render(values);
  });
