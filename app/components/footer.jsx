import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className="page-footer">
        <section className="tag-list">
          <span>Some footer content</span>
        </section>
      </footer>
    );
  }
}
