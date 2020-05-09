import KabumConfig from "./models/kabum-config";

const KabumDefaultConfig: KabumConfig = {
    getProductEndpoint: "https://b2lq2jmc06.execute-api.us-east-1.amazonaws.com/PROD/ofertas",
    getProductParams: "app=1&limite=2000000&pagina=1",
    getDiscountEndpoint: "https://www.kabum.com.br/ofertas_home.json",
    productLinkEndpoint: "https://www.kabum.com.br/cgi-local/site/produtos/descricao_ofertas.cgi?codigo"
};

export default KabumDefaultConfig;
