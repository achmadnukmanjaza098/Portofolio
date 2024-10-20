import { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/css/MenuItem.css';

class MenuItem extends Component {
  render() {
    const { link, label, active, onClick } = this.props;
    return (
      <div 
        className={`menu-item ${active ? 'active' : ''}`} 
        onClick={onClick}
        style={{ cursor: 'pointer', textAlign: 'center' }}
      >
        <Link to={link} className={`menu-link ${active ? 'active-link' : ''}`}>
          {label}
        </Link>
      </div>
    );
  }
}

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

MenuItem.defaultProps = {
  active: false,
};

export default MenuItem;
