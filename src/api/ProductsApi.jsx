import axios from 'axios'
const productsApi = axios.create({ baseURL: 'http://localhost:3500' });

export let productsEndpoint = '/products';



async function delay() {
    return new Promise(res => setTimeout(() => res(), 800));
}


export async function getProducts(filter) {
    await delay();
    console.log(filter);
    const response = await productsApi.get(productsEndpoint + `?${filter[1]}`,
        // { signal: fetchController.signal }
    );
    return response.data;
}