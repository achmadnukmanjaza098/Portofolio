import { Component } from "react";
import PropTypes from 'prop-types';
import ProfileCard from "../components/molecules/ProfileCard";

class Experience extends Component {
    render() {
        const { experience } = this.props;
        return (
            <div className="d-flex align-items-center justify-content-center flex-wrap p-4">
                <ProfileCard
                    name={experience.name}
                    phone={experience.phone}
                    email={experience.email}
                    description={experience.description}
                />
            </div>
        );
    }
}

Experience.propTypes = {
    experience: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
};

export default Experience 