import { Component } from "react";
import PropTypes from 'prop-types';
import ProfileCard from "../components/molecules/ProfileCard";

class Education extends Component {
    render() {
        const { education } = this.props;
        return (
            <div className="d-flex align-items-center justify-content-center flex-wrap p-4">
                <ProfileCard
                    name={education.name}
                    phone={education.phone}
                    email={education.email}
                    description={education.description}
                />
            </div>
        );
    }
}

Education.propTypes = {
    education: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
};

export default Education 