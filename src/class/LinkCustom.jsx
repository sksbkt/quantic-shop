import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

class LinkCustom extends React.Component {

    render() {
        const location = this.props.location;
        const to = this.props.to;
        console.log(location, to);
        return (
            location.indexOf(to) >= 0 ?
                <p>
                    {this.props.children}
                </p>
                : <a href={this.props.to}                >
                    {this.props.children}
                </a>
        );
    }
}
LinkCustom.propTypes = { ssss: PropTypes.string };
export default LinkCustom;





