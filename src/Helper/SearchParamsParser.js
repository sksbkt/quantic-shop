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
    return {
        sortBy: params['_sort'] ?? 'name',
        ascending: (params['_order'] === 'asc') ?? true,
        availability: (params['availability'] === 'true') ?? false
    };

}