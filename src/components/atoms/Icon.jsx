import { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class Icon extends Component {
  render() {
    const { name } = this.props;
    const icon = name === 'linkedin' ? faLinkedin : faGithub;
    return <FontAwesomeIcon icon={icon} size="2x" />;
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf(['linkedin', 'github']).isRequired,
};

export default Icon;
