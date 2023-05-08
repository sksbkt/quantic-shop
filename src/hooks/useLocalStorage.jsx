import { useEffect, useState } from "react";

export function getLocalValue(key, initValue) {
    //? SSR Next.js
    if (typeof window === 'undefined') return initValue;

    //? if local value is stored
    const localValue = JSON.parse(localStorage.getItem(key));
    if (localValue) return localValue;

    //? return result of function || abstraction 
    if (initValue instanceof Function) return initValue();

    return initValue;
}


function useLocalStorage(key, initValue) {
    const [value, setValue] = useState(
        () => getLocalValue(key, initValue)
    );


    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
        return () => { };
    }, [key, value]);

    return [value, setValue]
}

export default useLocalStorage;