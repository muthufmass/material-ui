'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react/addons');
var StylePropable = require('./mixins/style-propable');
var Transitions = require('./styles/transitions');

var SvgIcon = React.createClass({
  displayName: 'SvgIcon',

  mixins: [StylePropable],

  contextTypes: {
    muiTheme: React.PropTypes.object
  },

  propTypes: {
    color: React.PropTypes.string,
    hoverColor: React.PropTypes.string,
    onMouseLeave: React.PropTypes.func,
    onMouseEnter: React.PropTypes.func,
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    viewBox: React.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      hovered: false
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      viewBox: '0 0 24 24'
    };
  },

  render: function render() {
    var _props = this.props;
    var color = _props.color;
    var hoverColor = _props.hoverColor;
    var viewBox = _props.viewBox;
    var style = _props.style;
    var height = _props.height;
    var width = _props.width;

    var other = _objectWithoutProperties(_props, ['color', 'hoverColor', 'viewBox', 'style', 'height', 'width']);

    var offColor = color ? color : style && style.fill ? style.fill : this.context.muiTheme.palette.textColor;
    var onColor = hoverColor ? hoverColor : offColor;

    var mergedStyles = this.mergeAndPrefix({
      display: 'inline-block',
      height: height ? height : 24,
      width: width ? width : 24,
      userSelect: 'none',
      transition: Transitions.easeOut()
    }, style, {
      // Make sure our fill color overrides fill provided in props.style
      fill: this.state.hovered ? onColor : offColor
    });

    return React.createElement(
      'svg',
      _extends({}, other, {
        onMouseLeave: this._handleMouseLeave,
        onMouseEnter: this._handleMouseEnter,
        style: mergedStyles,
        viewBox: viewBox }),
      this.props.children
    );
  },

  _handleMouseLeave: function _handleMouseLeave(e) {
    this.setState({ hovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(e);
    }
  },

  _handleMouseEnter: function _handleMouseEnter(e) {
    this.setState({ hovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(e);
    }
  }
});

module.exports = SvgIcon;