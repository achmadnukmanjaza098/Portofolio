import { Component } from 'react';
import PropTypes from 'prop-types';

class Avatar extends Component {
  render() {
    const { src } = this.props;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={src}
          alt="Avatar"
          style={{
            borderRadius: '50%',
            width: '100px',
            height: '100px',
            border: '6px solid #0056b3',
            boxShadow: '0 4px 8px #00000033',
          }}
        />
      </div>
    )
  }
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Avatar;
