'use strict';

var React = require('react');
var SvgIcon = require('../../svg-icon');

var NavigationExpandMore = React.createClass({
  displayName: 'NavigationExpandMore',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" })
    );
  }

});

module.exports = NavigationExpandMore;