import 'aframe';
import 'aframe-bmfont-text-component';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

require('./../assets/styles/components/_aframeDemo.styl');

class VRScene extends React.Component {
	render() {
		return (
			<Scene embedded>
				<Entity bmfont-text={{text: 'AFRAME-READY'}} position="-2.2 1.3 -3" scale="4 4 4" material="color: #678782;">
					<a-animation attribute="rotation"
						dur="10000"
						fill="forwards"
						to="-360 0 0"
						repeat="indefinite"></a-animation>
				</Entity>
				<Entity light={{type: 'spot', color: '#ffffff'}}/>
				<a-sky color="#f0f0f0"></a-sky>
			</Scene>
		);
	}
}
ReactDOM.render(<VRScene/>, document.getElementById('aframe-demo'));
