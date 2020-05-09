import { Checker } from "../../core/abstract-checker";
import { Product } from "../../core/models/product";
import KabumProduct from "./models/kabum-product";
import KabumConfig from "./models/kabum-config";
import axios from 'axios';

export class KabumChecker extends Checker<KabumConfig> {

    constructor(config: KabumConfig) {
        super(config);
    }

    private buildEndpoint(promotion: string): string {
        return `${this.config.getProductEndpoint}?campanha=${promotion}&${this.config.getProductParams}`;
    }

    private async fetchPromotion(): Promise<string> {
        const offerResponse = await axios.get(this.config.getDiscountEndpoint);
        const campanha = offerResponse && offerResponse.data && offerResponse.data.oferta && offerResponse.data.oferta.path_json;
        return campanha;
    }

    protected convert(sourceProduct: KabumProduct): Product {
        return <Product>{
            seller: 'kabum',
            name: sourceProduct.produto,
            storeLink: `${this.config.productLinkEndpoint}=${sourceProduct.codigo}`,
            originalPrice: Number(sourceProduct.vlr_normal),
            discountedPrice: sourceProduct.vlr_oferta,
            discount: sourceProduct.desconto,
            imageUrl: sourceProduct.imagem
        };
    }
    async fetchProducts(): Promise<Array<Product>> {
        const promotion = await this.fetchPromotion();
        const endpoint = this.buildEndpoint(promotion);
        return (await axios.get(endpoint)).data.produtos?.map(this.convert.bind(this));
    }

}
