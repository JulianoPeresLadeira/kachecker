import { Checker } from "../../core/abstract-checker";
import { Product } from "../../core/models/product";
import PichauConfig from "./models/pichau-config";
import axios from "axios";
import { PichauProduct } from "./models/pichau-product";

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

export class PichauChecker extends Checker<PichauConfig> {

    constructor(config: PichauConfig) {
        super(config);
    }

    protected convert(sourceProduct: PichauProduct): Product {
        return <Product>sourceProduct;
    }

    async fetchPromotionEndpoint(): Promise<string> {
        const response = await axios.get(this.config.homepageEndpoint);
        const homepage = new JSDOM(response.data);
        return homepage.window.document
            .getElementsByClassName("banner_home_menu_bottom")[0]
            .getElementsByTagName("a")[0]
            .getAttribute("href");
    }

    extractProducts(sourceHtml: string): Array<PichauProduct> {
        const extractProduct = (productInformation, pricingInformation) => {
            const transformNumber = (textNumber: string) => {
                return Number(
                    textNumber
                        .replace(/[a-zA-Z]/g, '')
                        .replace(/\$/, '')
                        .replace(',', '.')
                );
            }

            const getImageUrl = () => productInformation.getElementsByTagName("img")[0].getAttribute("src");
            const getName = () => productInformation.getElementsByClassName("product-name")[0].getElementsByTagName("a")[0].innerHTML;
            const getStoreLink = () => productInformation.getElementsByClassName("product-name")[0].getElementsByTagName("a")[0].getAttribute("href");
            const getOriginalPrice = () => NaN
            const getDiscountedPrice = () => transformNumber(pricingInformation.getElementsByClassName("boleto")[0].getElementsByClassName("valor")[0].innerHTML)
            const getDiscount = () => Number(productInformation.getElementsByClassName("save-price")[0].getElementsByClassName("price")[0].innerHTML.split('%').join(''));

            let product = {
                seller: 'pichau',
                imageUrl: getImageUrl(),
                name: getName(),
                storeLink: getStoreLink(),
                originalPrice: getOriginalPrice(),
                discountedPrice: getDiscountedPrice(),
                discount: getDiscount()
            };

            product.originalPrice = (100 * product.discountedPrice / (100 - product.discount));

            return product;
        }

        const promotionPageHtml = new JSDOM(sourceHtml);
        const products = promotionPageHtml.window.document.getElementsByClassName("deal-grid")[0].children[0].children;

        let extractedProducts = [];

        for (let i = 0; i < products.length; i += 2) {
            extractedProducts.push(extractProduct(products[i], products[i + 1]));
        }
        return extractedProducts;
    }

    async fetchProducts(): Promise<Array<Product>> {
        const endpoint = await this.fetchPromotionEndpoint();
        const response = await axios.get(endpoint);
        return this.extractProducts(response.data).filter(prd => prd.discount > 0).map(this.convert);
    }
}
