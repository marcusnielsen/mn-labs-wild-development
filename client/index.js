import React from 'react';
import socketMessage$ from './socket';
import theme from './theme';
import Login from './components/login';

const themeLink = document.querySelector('[data-theme]');

theme.themeHref$.subscribe((themeHref) => {
  themeLink.href = themeHref;
});

function render(messages) {
  React.render(
      (<div>
          <h3>React Entry</h3>
          <div className="row">
            <div className="col-md-6">
              <Login names={theme.themeNames}/>
            </div>

            <div className="col-md-6">{
              messages.map((message, idx) => {
                return (
                  <div key={idx} className="row">
                  <span className="text-success col-lg-6">{message.value}</span>
                  <span className="visible-lg col-lg-6 text-default">{message.interval}</span>
                  </div>);
              })
            }</div>
          </div>
      </div>),
      document.querySelector('[data-app]'));
}

socketMessage$.subscribe((messages) => {
  render(messages);
});
