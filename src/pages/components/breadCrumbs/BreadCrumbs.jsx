import { Link, useLocation } from "react-router-dom";
import Style from './BreadCrumbs.module.scss'
function BreadCrumbs({ prod }) {
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
                        // <Link className={Style.crumbs} to={currentLink} key={crumb + i}>
                        //     {crumb}
                        // </Link>
                        <a className={Style.crumbs} href={currentLink} key={crumb}>
                            {crumb}
                        </a>
                        :
                        <p className={Style.crumbs}>
                            {crumb}
                        </p>
                }
                <p>/</p>
                {i + 1 == array.length && prod ?
                    (<p className={Style.crumbs}>
                        {prod.productName}
                    </p>)
                    : ''}
            </div >);
        });
    if (crumbs.length > 0) {
        content = (<div className={Style.breadCrumbContainer}>
            {crumbs}

        </div>)
    }

    return content;
}

export default BreadCrumbs;
