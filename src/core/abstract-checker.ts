import { Product } from "./models/product";

export abstract class Checker {
    protected abstract convert(sourceProduct): Product;
    async abstract fetchProducts(): Promise<Array<Product>>;
}
