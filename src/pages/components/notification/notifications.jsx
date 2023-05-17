import React from "react";
import PropTypes from "prop-types";
import Style from './notifications.module.scss';
function Notifications(props) {
    return <div className={Style.notificationContainer}>
        <p>{props.Number}</p>
    </div>;
}

Notifications.propTypes = {
    Number: PropTypes.number,
};

export default Notifications;
