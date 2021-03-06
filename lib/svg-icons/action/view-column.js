'use strict';

var React = require('react');
var SvgIcon = require('../../svg-icon');

var ActionViewColumn = React.createClass({
  displayName: 'ActionViewColumn',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: "M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z" })
    );
  }

});

module.exports = ActionViewColumn;