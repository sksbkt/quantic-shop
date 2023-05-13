export default function userSearchParamsParser(filter) {
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