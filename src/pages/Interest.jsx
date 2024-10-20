import { Component } from "react";
import PropTypes from 'prop-types';
import ProfileCard from "../components/molecules/ProfileCard";

class Interest extends Component {
    render() {
        const { interest } = this.props;
        return (
            <div className="d-flex align-items-center justify-content-center flex-wrap p-4">
                <ProfileCard
                    name={interest.name}
                    phone={interest.phone}
                    email={interest.email}
                    description={interest.description}
                />
            </div>
        );
    }
}

Interest.propTypes = {
    interest: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
};

export default Interest 