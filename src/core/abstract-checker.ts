import { Product } from "./models/product";
import { Config } from "./models/configs";

export abstract class Checker<T extends Config> {

    protected config: T;

    constructor(config: T) {
        this.config = config;
    }

    protected abstract convert(sourceProduct): Product;
    async abstract fetchProducts(): Promise<Array<Product>>;
}
