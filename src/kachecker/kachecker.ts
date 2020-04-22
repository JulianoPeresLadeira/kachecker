import axios from 'axios';
import Product from "../models/product";
import KacheckerConfig from './kachecker-config';

export default class Kachecker {

    private config: KacheckerConfig;

    constructor(config: KacheckerConfig) {
        this.config = config;
    }

    private buildEndpoint(promotion: string): string {
        return `${this.config.getProductEndpoint}?campanha=${promotion}&${this.config.getProductParams}`;
    }

    private async fetchPromotion(): Promise<string> {
        const offerResponse = await axios.get(this.config.getDiscountEndpoint);
        const campanha = offerResponse && offerResponse.data && offerResponse.data.oferta && offerResponse.data.oferta.path_json;
        return campanha;
    }

    async fetchProducts(): Promise<Array<Product>> {
        const promotion = await this.fetchPromotion();
        const endpoint = this.buildEndpoint(promotion);
        return (await axios.get(endpoint)).data.produtos;
    }
}
