import React, { useEffect, useRef, useState } from "react";

export function useDynamicSvgImport(iconName) {
    // const importedIconRef = useRef < React.FC < React.SVGProps < SVGAElement >>> (null);
    const importedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();


    useEffect(() => {
        setLoading(true);
        const importSvgIcon = async () => {
            try {
                importedIconRef.current =
                    (await import(`/public/${iconName}.svg`))
                        .ReactComponent;
            } catch (e) { }
        }

        return () => {
            second;
        };
    }, [third]);

}

