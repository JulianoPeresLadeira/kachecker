import { Product } from '../core/models/product';
import { Checker } from '../core/abstract-checker';
import { sellers } from './sellers';
import { Config } from '../core/models/configs';

export default class Kachecker {

    private checkers: Array<Checker<Config>> = [];

    register(seller: string, configs?: any) {
        const sellerInfo = sellers[seller];

        if (!sellerInfo) {
            throw new Error(`Seller ${seller} not found.`);
        }

        const checker = new sellerInfo["checker"](configs ? configs : sellerInfo.defaultConfig);
        this.checkers.push(checker);
    }

    registerAll() {
        Object.keys(sellers).forEach(seller => this.register(seller));
    }

    async fetchProducts(): Promise<Array<Product>> {
        const products = await Promise.all(this.checkers.map(checker => {
            try {
                console.log(checker)
                return checker.fetchProducts().catch(
                    error => {
                        console.log(`${checker.constructor.name} => ${error}`);
                        return [];
                    }
                );
            } catch (e) {
                // TODO: log somewhere lol
                return [];
            }
        }));
        return products.reduce((acc, curr) => acc.concat(curr), []);
    }

    getVersion() {
        return require('../../package.json').version;
    }
}
