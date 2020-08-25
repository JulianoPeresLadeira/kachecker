import { KabumChecker } from "../sellers/KaBuM/kabum-checker";
import KabumDefaultConfig from "../sellers/KaBuM/kabum-default-configs";
import { TerabyteshopChecker } from "../sellers/Terabyteshop/terabyteshop-checker";
import TerabyteshopDefaultConfig from "../sellers/Terabyteshop/terabyteshop-default-configs";
import { PichauChecker } from "../sellers/pichau/pichau-checker";
import PichauDefaultConfig from "../sellers/pichau/pichau-default-configs";

export const sellers = {
    /*"terabyteshop": {
        "checker": TerabyteshopChecker,
        "defaultConfig": TerabyteshopDefaultConfig
    },*/
    "kabum": {
        "checker": KabumChecker,
        "defaultConfig": KabumDefaultConfig
    },
    "pichau": {
        "checker": PichauChecker,
        "defaultConfig": PichauDefaultConfig
    }
}
