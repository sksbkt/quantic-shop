import { useSearchParams } from "react-router-dom";

export function searchParams(searchParamsStringArray) {

    switch (searchParamsStringArray) {
        case '_sort':
            return { '_sort': 'productName' }
        case '_order':
            return { '_order': 'asc' }
        default:
            break;
    }
    return params;
}