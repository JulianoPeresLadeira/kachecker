import { Checker as AbstractChecker } from "../../core/abstract-checker";
import { TerabyteshopProduct } from "./models/terabyteshop-product";
import { Product } from "../../core/models/product";
import TerabyteshopConfig from "./models/terabyteshop-config";
import axios from "axios";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export class TerabyteshopChecker extends AbstractChecker {

    private config: TerabyteshopConfig;

    constructor(config: TerabyteshopConfig) {
        super();
        this.config = config;
    }

    protected convert(sourceProduct: TerabyteshopProduct): Product {
        return <Product>sourceProduct;
    }

    public extractProducts(responseSample: string): Array<TerabyteshopProduct> {
        const transformProduct = (sourceProduct) => {

            const transformNumber = (textNumber: string) => {
                return Number(
                    textNumber
                        .replace(/[a-zA-Z]/g, '')
                        .replace(/\$/, '')
                        .replace(',', '.')
                );
            }

            const getImageUrl = () => sourceProduct.getElementsByTagName("img")[0].getAttribute("src");
            const getName = () => sourceProduct.getElementsByClassName("prod-name")[0].getAttribute("title");
            const getStoreLink = () => `https://www.terabyteshop.com.br${sourceProduct.getElementsByClassName("prod-name")[0].getAttribute("href")}`;
            const getOriginalPrice = () => {
                const oldValueNumber = sourceProduct
                    .getElementsByClassName("prod-old-price")[0]
                    ?.getElementsByTagName("span")[0]
                    ?.innerHTML;

                return oldValueNumber ? transformNumber(oldValueNumber) : NaN;
            }
            const getDiscountedPrice = () => {
                const oldValueNumber = sourceProduct
                    .getElementsByClassName("prod-new-price")[0]
                    ?.getElementsByTagName("span")[0]
                    ?.innerHTML;

                return oldValueNumber ? transformNumber(oldValueNumber) : NaN;
            }

            let product = {
                seller: 'terabyteshop',
                imageUrl: getImageUrl(),
                name: getName(),
                storeLink: getStoreLink(),
                originalPrice: getOriginalPrice(),
                discountedPrice: getDiscountedPrice(),
                discount: NaN
            };

            product.discount = (100 - (100 * product.discountedPrice / product.originalPrice));
            return product;
        }

        let html = new JSDOM(responseSample);
        let products = html.window.document.getElementsByClassName("commerce_columns_item_inner");

        let transformedProducts = [];

        let errCount = 0;
        for (let i = 0; i < products.length; i++) {
            try {
                transformedProducts.push(transformProduct(products[i]));
            } catch (e) {
                errCount++;
            }
        }

        transformedProducts = transformedProducts.filter(a => !isNaN(a.discount));

        return transformedProducts;
    }

    async fetchProducts(): Promise<Array<Product>> {
        const response = await axios.get(this.config.getDiscountedProductsEndpoint);
        return this.extractProducts(response.data).map(this.convert);
    }
}
