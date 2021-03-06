'use strict';

var React = require('react');
var SvgIcon = require('../../svg-icon');

var HardwareKeyboardArrowUp = React.createClass({
  displayName: 'HardwareKeyboardArrowUp',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" })
    );
  }

});

module.exports = HardwareKeyboardArrowUp;