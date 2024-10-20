import { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../atoms/Avatar';
import MenuItem from '../molecules/MenuItem';
import Text from '../atoms/Text';

class Sidebar extends Component {
  render() {
    const { menuItems, profile, onMenuClick } = this.props;
    return (
      <div className="p-2">
        <Avatar src={profile?.avatarSrc} />
        <h5 className={'text-center text-white'}>{profile?.name}</h5>
        <Text className={'text-center text-white fs-6'}>{profile?.title}</Text>
        <hr className="text-white" />
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            link={item?.link}
            label={item?.name}
            active={item?.active}
            onClick={() => onMenuClick(index)}
          />
        ))}
      </div>
    );
  }
}

Sidebar.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    }).isRequired
  ).isRequired,
  profile: PropTypes.shape({
    name: PropTypes.string,
    title: PropTypes.string,
    avatarSrc: PropTypes.string,
  }).isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default Sidebar;
