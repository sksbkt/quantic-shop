import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import ErrorFallback from "./ErrorFallBack";

function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate("/", { replace: true })}>
                <Suspense>
                    <Header />
                    <Outlet />
                    <Footer />
                </Suspense>
            </ErrorBoundary>
        </>
    );
}

export default Layout;
