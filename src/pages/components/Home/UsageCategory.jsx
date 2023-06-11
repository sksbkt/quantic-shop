import React from "react";
import Style from './HomeCmp.module.scss';

function UsageCategory() {
    return <React.Fragment>
        <div className={Style.usageCateGeoryMainContainer}>
            <div className={Style.UsageCategorySections}></div>
            <div className={Style.UsageCategorySections}></div>
            <div className={Style.UsageCategorySections}></div>
        </div>
    </React.Fragment>;
}

export default UsageCategory;
