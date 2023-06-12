import axios from 'axios'
// const productsApi = axios.create({ baseURL: 'http://localhost:3500' });
const productsApi = axios.create({ baseURL: 'https://kindly-fir-poison.glitch.me' });

export let productsEndpoint = '/products';



async function delay() {
    return new Promise(res => setTimeout(() => res(), 800));
}


export async function getProducts(filter) {
    await delay();
    const response = await productsApi.get(productsEndpoint + `?${filter[1]}`
    );
    return response;
}

export async function getSingleProduct(id) {
    await delay();
    const response = await productsApi.get(productsEndpoint + `?shoe_id=${id[1]}`
    );
    return response;
}
