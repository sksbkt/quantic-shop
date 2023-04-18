import { Outlet, useNavigate } from "react-router-dom";
import Header from "./../Header";
import Footer from "./../Footer";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ErrorFallback from "./../ErrorFallBack";

import Style from './Layout.module.scss'
import BreadCrumbs from "../components/BreadCrumbs";

function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate("/", { replace: true })}>
                <Suspense>
                    <div className={Style.layOut}>
                        <Header />
                        <Outlet className={Style.outlet} />
                        <Footer />
                        <div className={Style.background}></div>
                    </div>
                </Suspense>
            </ErrorBoundary>
        </>
    );
}

export default Layout;
