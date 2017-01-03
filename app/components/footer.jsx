import React from 'react';
import ReactDOM from 'react-dom';

require('./../assets/styles/components/_footer.styl');

class Footer extends React.Component {
	render() {
		return (
			<section className="tag-list">
				<span>Some footer content</span>
			</section>
		);
	}
}
ReactDOM.render(<Footer/>, document.getElementById('footer'));
