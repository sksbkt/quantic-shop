import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

class LinkCustom extends React.Component {

    render() {
        const location = this.props.location;
        const to = this.props.to;
        return (

            location.indexOf(to) >= 0 ?
                location == to ?
                    <p>
                        {this.props.children}
                    </p>
                    : <Link
                        to={this.props.to}
                    >
                        {this.props.children}
                    </Link>
                : <a
                    href={this.props.to}
                >
                    {this.props.children}
                </a>
        );
    }
}
LinkCustom.propTypes = {
    to: PropTypes.string,
    location: PropTypes.string,
};
export default LinkCustom;






