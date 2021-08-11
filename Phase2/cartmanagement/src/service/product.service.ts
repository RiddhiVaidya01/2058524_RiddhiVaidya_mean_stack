import {Product} from '../model/product';

export class ProductService {

    getProducts(): Promise<Product[]> {
        return fetch('https://run.mocky.io/v3/32fdcdc2-d1cf-49a3-bb7e-71254e215310')
            .then(response => response.json());
    }
}
