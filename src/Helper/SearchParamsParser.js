//? we are validating searchTags
function validateTagValue(tag, value) {
    const tagValidValues = {
        order: ['asc', 'desc'],
        sort: ['name', 'rating', 'price']
    }
    switch (tag) {
        case '_limit':
        case '_start':
            if (isNaN(value))
                return false;
            break;
        case '_order':
            if (!tagValidValues.order.includes(value))
                return false;
            break;
        case '_order':
            if (!tagValidValues.sort.includes(value))
                return false;
            break;
        default:
            return true;
            break;
    }
}
export function userSearchParamsParser(filter) {
    let search = '';

    if (filter.sortBy) search += `_sort=` + filter.sortBy + '&'
    if (filter.availability) search += 'availability=true' + '&'
    if (filter.ascending) {
        search += '_order=asc' + '&'
    }
    else {
        search += '_order=desc' + '&'
    }

    return search;
}
export function isValidSearchParam(searchParams) {
    if (searchParams.size > 0) {

        [...searchParams.entries()].map(
            entry => {
                console.log('SP', entry);
                const searchTags = ['_limit', '_start', '_order', 'availability'];
                if (!searchTags.includes(entry[0])) {
                    return false;
                }
                if (!validateTagValue(entry[0], entry[1]))
                    return false;
                // params[entry[0]] = entry[1];
                // paramsKeys.push(entry[0]);
                // paramsValues.push(entry[1]);
            }
        );
        console.log('all tags has been validated');
        return true;
    }
    return false;
}
export function validateSearchParams(searchParams) {
    if (searchParams == undefined || searchParams == '')
        return false;

    //* FOR TESTING
    // [...searchParams.entries()].reduce((acc, [key, val]) => {
    //     console.log(key);
    // });
    // const paramsKeys = [];
    // const paramsValues = [];
    let params = {};
    [...searchParams.entries()].map(
        entry => {
            params[entry[0]] = entry[1];
            // paramsKeys.push(entry[0]);
            // paramsValues.push(entry[1]);
        }
    );
    console.log(params);
    return {
        sortBy: params['_sort'] ?? 'name',
        ascending: (params['_order'] === 'asc') ?? true,
        availability: (params['availability'] === 'true') ?? false
    };

}