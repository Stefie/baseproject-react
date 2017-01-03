import 'aframe';
import 'aframe-text-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

require('./../assets/styles/components/_aframeDemo.styl');

class VRScene extends React.Component {
	render() {
		return (
			<Scene embedded>
				<Entity text={{text: 'AFRAME-READY'}} position="-2.7 1 -3" material="color: #678782;" />
				<a-sky color="#f0f0f0"></a-sky>
			</Scene>
		);
	}
}
ReactDOM.render(<VRScene/>, document.getElementById('aframe-demo'));
