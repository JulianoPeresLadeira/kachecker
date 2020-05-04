import KabumDefaultConfig from "../sellers/KaBuM/kabum-default-configs";
import { KabumChecker } from "../sellers/KaBuM/kabum-checker";
import { TerabyteshopChecker } from "../sellers/Terabyteshop/terabyteshop-checker";
import TerabyteshopDefaultConfig from "../sellers/Terabyteshop/terabyteshop-default-configs";

export const sellers = {
    "kabum": {
        "checker": KabumChecker,
        "defaultConfig": KabumDefaultConfig
    },
    "terabyteshop": {
        "checker": TerabyteshopChecker,
        "defaultConfig": TerabyteshopDefaultConfig
    }
}
