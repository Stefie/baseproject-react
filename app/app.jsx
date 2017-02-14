import React from 'react';
import ReactDOM from 'react-dom';
import 'aframe';
import {Scene, Entity} from 'aframe-react';

import Menu from './components/menu.jsx';
import AframeDemo from './components/aframeDemo.jsx';
import Content from './components/content.jsx';
import Footer from './components/footer.jsx';


const CSS = require('./assets/styles/style.styl');

class Baseproject extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  render () {
    return (
      <div className="page-wrapper">
        <div className="content-wrapper">
          <Menu />
          <Content />
          <AframeDemo />
        </div>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Baseproject />, document.querySelector('#root'));
