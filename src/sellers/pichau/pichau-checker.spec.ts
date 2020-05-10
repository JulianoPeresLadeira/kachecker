import { homepage, promotionPage } from "./pichau-checker.mock";

import { PichauChecker } from "./pichau-checker";
import PichauDefaultConfigs from "./pichau-default-configs";
import axios from "axios";

jest.mock("axios");

let checker: PichauChecker;

describe('pichau tests',
    () => {

        beforeEach(() => checker = new PichauChecker(PichauDefaultConfigs))

        it('should return the correct promotion endpoint',
            async () => {

                //@ts-ignore
                axios.get.mockImplementation(async () => ({ data: homepage }));
                const promotion = await checker.fetchPromotionEndpoint();

                expect(promotion).toEqual("https://www.pichau.com.br/maes");
            }
        )

        it('should return a list of products',
            async () => {
                const products = checker.extractProducts(promotionPage);
                // console.log(products.map(prd => JSON.stringify(prd)));
                expect(products.every(prd => prd.originalPrice != null && prd.discountedPrice != null && prd.discount != null)).toBeTruthy();
            }
        )
    }
)
