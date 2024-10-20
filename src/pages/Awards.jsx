import { Component } from "react";
import PropTypes from 'prop-types';
import ProfileCard from "../components/molecules/ProfileCard";

class Awards extends Component {
    render() {
        const { awards } = this.props;
        return (
            <div className="d-flex align-items-center justify-content-center flex-wrap p-4">
                <ProfileCard
                    name={awards.name}
                    phone={awards.phone}
                    email={awards.email}
                    description={awards.description}
                />
            </div>
        );
    }
}

Awards.propTypes = {
    awards: PropTypes.shape({
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        description: PropTypes.string
    }).isRequired,
};

export default Awards 