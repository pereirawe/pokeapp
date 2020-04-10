import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Users from './containers/UsersContainers'

function getUser(intId = 0){
  var user = []
  user.name = "William Enrique"
  user.surname = "Pereira Carrasquero"
  user.age = 32
  user.country = "Venezuela"
  user.childs = [ 'William', 'Jared', 'Jacob']
  return user;
}

function renderUser(){
  var user = getUser();
  var renderUser = (
    <div className="User">
      <h2>
        {user.name} {user.surname}
      </h2>
      <small>From {user.country}</small>
      <p>I'm {user.age} years old.</p>
      <ul>
        {
          user.childs.map((child , i) => {
            return(
              <li key={i}>
                {child}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
  return renderUser;
}

function App() {
  var user = renderUser();
  var app = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {user}
      </header>
      <section className="components">
        <Users />
      </section>
    </div>
  )
  return app;
}

export default App;