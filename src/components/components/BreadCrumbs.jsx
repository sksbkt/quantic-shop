import { Link, useLocation } from "react-router-dom";
import Style from './BreadCrumbs.module.scss'
function BreadCrumbs() {
    const location = useLocation();

    let currentLink = '';
    let content = '';
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map((crumb, i, array) => {
            currentLink += `/${crumb}`
            return (<div key={crumb}>
                {
                    i + 1 != array.length ?
                        <Link className={Style.crumbs} to={currentLink}>
                            {crumb}
                        </Link>
                        :
                        <p className={Style.crumbs}>
                            {crumb}
                        </p>
                }
                <p>/</p>
            </div >);
        });
    if (crumbs.length > 0) {
        content = (<div className={Style.breadCrumbContainer}>{crumbs}</div>)
    }

    return content;
}

export default BreadCrumbs;
