import React from 'react';
import ReactDOM from 'react-dom';
import HeaderCollapsable from './HeaderCollapsable';
import Content from './Content';

class MyCollapsable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: props.opened,
      shouldrender: true
    };
    this.onCollapse = this.onCollapse.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.el = null;
  }

  onCollapse() {
    this.setState({
      opened: !this.state.opened
    });
  }

  onRemove() {
    if (window.confirm('Sure you want remove: ' + this.props.title)) {
      this.setState({
        shouldrender: false
      });
    }
  }

  render() {
    const panelColor = this.props.color
      ? 'panel-' + this.props.color
      : 'panel-default';
    return (
      this.state.shouldrender && (
        <div className={'panel ' + panelColor}>
          <HeaderCollapsable
            title={this.props.title}
            onCollapse={this.onCollapse}
            onRemove={this.onRemove}
          />
          <Content {...this.props} show={this.state.opened} />
        </div>
      )
    );
  }
}

export default MyCollapsable;
