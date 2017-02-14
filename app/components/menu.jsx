import React from 'react';
import ReactDOM from 'react-dom';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const menuItems = ['Some', 'Menu', 'Items'];
    return (
      <nav className="page-nav">
        <ul>
          {menuItems.map( (menuItem, index) => <li key={index}>{menuItem}</li>)}
        </ul>
      </nav>
    );
  }
}
