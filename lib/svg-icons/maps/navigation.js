'use strict';

var React = require('react');
var SvgIcon = require('../../svg-icon');

var MapsNavigation = React.createClass({
  displayName: 'MapsNavigation',

  render: function render() {
    return React.createElement(
      SvgIcon,
      this.props,
      React.createElement('path', { d: "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" })
    );
  }

});

module.exports = MapsNavigation;