import React from 'react';

function getClassNames(selectedName, name) {
  return name.startsWith(selectedName) ? 'text-success' : '';
}


function handleChange(event) {
  this.props.names.indexOf(event.target.value);
  this.setState({
    selectedName: event.target.value,
  });
}

function getInitialState() {
  return {
    selectedName: 'darkly',
  };
}

function render() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
        </div>

        <button type="submit" className="btn btn-default disabled" disabled>Submit</button>
      </form>

      <div>
        {
          this.props.names.map((name) => {
            return (
              <h3 className={getClassNames(this.state.selectedName, name)}>{name}</h3>
            );
          })
        }
      </div>
    </div>
  );
}

const Login = React.createClass({
  getInitialState: getInitialState,
  handleChange: handleChange,
  render: render,
});

export default Login;
