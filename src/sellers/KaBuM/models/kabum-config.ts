import { Config } from "../../../core/models/configs";

export default interface KabumConfig extends Config {
    getProductEndpoint: string;
    getProductParams: string;
    getDiscountEndpoint: string;
    productLinkEndpoint: string;
}
