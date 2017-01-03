import React from 'react';
import ReactDOM from 'react-dom';

require('./../assets/styles/components/_pageNav.styl');

class Menu extends React.Component {
	render() {
		const menuItems = ['Some', 'Menu', 'Items'];
		return (
			<ul>
				{menuItems.map( (menuItem, index) => <li key={index}>{menuItem}</li>)}
			</ul>
		);
	}
}
ReactDOM.render(<Menu/>, document.getElementById('menu'));
