import axios from 'axios'
const productsApi = axios.create({ baseURL: 'http://localhost:3500' });

export let productsEndpoint = '/products';

async function delay() {
    return new Promise(res => setTimeout(() => res(), 800));
}

export function paginate(start, end) {
    productsEndpoint = '/products' + `?_start=${start}&_end=${end}`;
}
export async function getProducts() {
    await delay();
    const response = await productsApi.get(productsEndpoint);
    return response.data;
}