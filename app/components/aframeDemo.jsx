import 'aframe';
import {Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

export default class VRScene extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="aframe-section">
        <Scene embedded>
          <Entity text="value:A-Frame ready; color: #678782; align: center;  width: 20;" position="0 1.5 -3">
            <a-animation attribute="rotation"
              dur="10000"
              fill="forwards"
              to="-360 0 0"
              repeat="indefinite"></a-animation>
          </Entity>
          <Entity light={{type: 'spot', color: '#ffffff'}}/>
          <a-sky color="#f0f0f0"></a-sky>
        </Scene>
    </section>
    );
  }
}
