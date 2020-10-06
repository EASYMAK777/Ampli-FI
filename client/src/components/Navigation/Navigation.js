import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import AuthDropdown from '../../components/AuthDropdown/AuthDropdown';

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    collapsed: true
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { user } = this.context;
    const { collapsed } = this.state;
    const targetclassName = `collapse navbar-collapse ${!collapsed && 'show'}`;
    const togglerclassName = `navbar-toggler ${collapsed && 'collapsed'}`;

    return (
      <div classNameName='Navigation'>
      
      <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" to="#">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <Link className="navbar-item" to='/' onClick={this.toggleCollapse}>
        Home
      </Link>
      <a className="navbar-item">
        Documentation
      </a>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            {user
            ? <AuthDropdown onClick={this.toggleCollapse} />
           : <Link to='/login' onClick={this.toggleCollapse}><strong>Sign up/Login</strong></Link>}
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default Navigation;

  // <nav classNameName='navbar navbar-brand'>
  //         <Link classNameName='navbar-brand' to='#'>Project 3</Link>
  //         <button classNameName={togglerclassName} onClick={this.toggleCollapse} data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
  //           <span classNameName='navbar-toggler-icon'></span>
  //         </button>

  //         <div classNameName={targetclassName} id='navbarSupportedContent'>
  //           <ul classNameName='navbar-nav mr-auto'>
  //             <li classNameName='nav-item'>
  //               <Link classNameName='nav-link' to='/' onClick={this.toggleCollapse}>Home</Link>
  //             </li>
  //             {user &&
  //               <li classNameName='nav-item'>
  //                 <Link classNameName='nav-link' to='/secret' onClick={this.toggleCollapse}>Secret</Link>
  //               </li>}
  //           </ul>
  //           <ul classNameName='navbar-nav'>
  //             {user
  //               ? <AuthDropdown onClick={this.toggleCollapse} />
  //               : <li classNameName='nav-item'><Link classNameName='nav-link' to='/login' onClick={this.toggleCollapse}>Login/Register</Link></li>}
  //           </ul>
  //         </div>
  //       </nav>