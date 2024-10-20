import { Component } from "react";
import PropTypes from 'prop-types';
import ProfileCard from "../components/molecules/ProfileCard";

class About extends Component {
    render() {
        const { about } = this.props;
        return (
            <div className="d-flex align-items-center justify-content-center flex-wrap p-4">
                <ProfileCard
                    name={about.name}
                    phone={about.phone}
                    email={about.email}
                    description={about.description}
                />
            </div>
        );
    }
}

About.propTypes = {
    about: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
};

export default About 