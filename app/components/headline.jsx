import React from 'react';
import ReactDOM from 'react-dom';

class Headline extends React.Component {
	render() {
		return(<h1>Headline Component</h1>);
	}
}
ReactDOM.render(<Headline/>, document.getElementById('headline'));
