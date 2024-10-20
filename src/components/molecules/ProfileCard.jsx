import { Component } from 'react';
import PropTypes from 'prop-types';
import Text from '../atoms/Text';

class ProfileCard extends Component {
  render() {
    const { name, phone, email, description } = this.props;
    return (
      <div className="text-center p-3">
        <h2>{name}</h2>
        <Text>{phone} - {email}</Text>
        <Text>{description}</Text>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ProfileCard;
