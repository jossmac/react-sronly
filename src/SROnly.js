var React = require('react');

var style = {
  border: 0,
  clip: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
};

var SROnly = React.createClass({
	propTypes: {
		component: React.PropTypes.string,
	},
  getDefaultProps: function() {
    return {
      component: 'span'
    };
  },
	render: function () {
    var Tag = this.props.component;
		return <Tag style={style}>{this.props.children}</Tag>;
	}
});

module.exports = SROnly;
