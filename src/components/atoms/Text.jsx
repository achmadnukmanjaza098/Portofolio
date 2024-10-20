import { Component } from 'react';
import PropTypes from 'prop-types';

class Text extends Component {
  render() {
    const { children, className } = this.props;
    return <p className={className}>{children}</p>;
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Text.defaultProps = {
  className: '',
};

export default Text;
