import Kachecker from './kachecker/kachecker'

export { default as KabumConfig } from './sellers/KaBuM/models/kabum-config';
export { default as TerabyteshopConfig } from './sellers/Terabyteshop/models/terabyteshop-config'
export { default as PichauConfig } from './sellers/pichau/models/pichau-config';

export { Product } from './core/models/product'

let kachecker = new Kachecker();
kachecker.registerAll();

kachecker.fetchProducts().then(prds => {
    console.log(prds);
})

export default Kachecker;
