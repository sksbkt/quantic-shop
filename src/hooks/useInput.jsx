import useLocalStorage from "./useLocalStorage";

function useInput(key, initValue) {
    const [value, setValue] = useLocalStorage(key, initValue);
    function reset() {
        setValue(initValue);
    }
    const attrObj = {
        value,
        onchange: (e) => setValue(e.target.value)
    }
    return [value, setValue, reset, attrObj];
}

export default useInput;