import { Component } from "react";
import PropTypes from 'prop-types';
import ProfileCard from "../components/molecules/ProfileCard";

class Skills extends Component {
    render() {
        const { skills } = this.props;
        return (
            <div className="d-flex align-items-center justify-content-center flex-wrap p-4">
                <ProfileCard
                    name={skills.name}
                    phone={skills.phone}
                    email={skills.email}
                    description={skills.description}
                />
            </div>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
};

export default Skills 