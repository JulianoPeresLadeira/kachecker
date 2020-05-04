import { TerabyteshopChecker } from "./terabyteshop-checker";
import TerabyteshopDefaultConfig from "./terabyteshop-default-configs";
import axios from "axios";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const responseSample: string = `<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade Terabyteshop</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta name="title" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade Terabyteshop" />
    <meta name="keywords" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade, Peças de Informática em Oferta" />
    <meta name="description" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade, Peças de Informática em Oferta com Preços Arrasadores na Terabyteshop " />
    <meta name="author" content="t-commerce.com.br" />
    <meta name="copyright" content="(c)2020 TERABYTESHOP RJ COMERCIO DE PRODUTOS DE INFORMATICA LTDA" />
    <meta name="resource-type" content="" />
    <meta name="distribution" content="Global" />
    <meta name="doc-class" content="Completed" />
    <meta name="revisit-after" content="1 Day" />
    <meta name="robots" content="index,follow" />
    <meta name="classification" content="" />
    <meta name="audience" content="all" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:description" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade, Peças de Informática em Oferta com Preços Arrasadores na Terabyteshop " />
    <meta name="twitter:title" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade Terabyteshop" />
    <meta name="twitter:site" content="TeraByteShop" />
    <meta name="twitter:domain" content="Terabyte E-Shop" />
    <meta name="twitter:image:src" content="https://www.terabyteshop.com.br/img/og_tb.png" />
    <meta name="twitter:creator" content="TeraByteShop" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade Terabyteshop" />
    <meta property="og:description" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade, Peças de Informática em Oferta com Preços Arrasadores na Terabyteshop " />
    <meta property="og:url" content="https://www.terabyteshop.com.br/promocoes" />
    <meta property="og:site_name" content="Terabyte E-Shop" />
    <meta property="og:image" content="https://www.terabyteshop.com.br/img/og_tb.png" />
    <meta property="article:publisher" content="http://www.facebook.com/Terabyteshop" />
    <meta property="article:tag" content="Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade, Peças de Informática em Oferta" />
    <meta property="article:section" content="Produtos" />
    <meta property="article:published_time" content="28/04/2020" />
    <meta name="theme-color" content="#ff5800">
    <meta name="msapplication-navbutton-color" content="#ff5800">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <script src="/cdn-cgi/apps/head/NbmPH4rIns6bHQk8Md92lzTw_z0.js"></script>
    <link rel="canonical" href="https://www.terabyteshop.com.br/promocoes" />
    <link rel="shortcut icon" href="https://www.terabyteshop.com.br/img/favicon.png" type="image/x-icon">
    <link rel="stylesheet" href="https://www.terabyteshop.com.br/css/reset.min.css" />
    <link rel="stylesheet" href="https://www.terabyteshop.com.br/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://www.terabyteshop.com.br/css/style.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://www.terabyteshop.com.br/css/fonts.min.css" />
    <link rel="stylesheet" href="https://www.terabyteshop.com.br/css/libs.min.css" />
    <link rel="stylesheet" href="https://www.terabyteshop.com.br/css/produto.min.css" />
    <style>
        body {
            background: #fdfdfd;
        }
    </style>
    <script type="application/ld+json">
        { "@context": "http://schema.org", "@type": "Product", "name": "Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade Terabyteshop", "description": "Promoções de Pc Gamer, Placa de Vídeo, Kit Upgrade, Peças de Informática em Oferta com Preços Arrasadores na Terabyteshop ", "image": "https://img.terabyteshop.com.br/produto/p/teclado-mecanico-gamer-riotoro-prism-cherry-rgb-switch-brown-kr700-xpbn_87594.png", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "571", "bestRating": "5", "worstRating": "1" }, "offers": { "@type": "AggregateOffer", "priceCurrency": "BRL", "lowprice": "69.90", "highPrice": "4549.00", "offerCount": "70", "availability": "http://schema.org/InStock" } }
    </script>
    <script type="application/ld+json">
        { "@context":"http://schema.org", "@type":"Organization", "address": { "@type": "PostalAddress", "streetAddress": "Av. João Gualberto, 1740", "addressLocality": "Curitiba", "addressRegion": "PR", "postalCode": "80030-001", "addressCountry": "BR" }, "url":"https://www.terabyteshop.com.br/", "name": "Terabyteshop", "legalName" : "Terabyteshop RJ Comércio de Produtos de Informática LTDA.", "logo": "https://www.terabyteshop.com.br/img/header-logo.png", "telephone": "+55 41 30862957 e 41 32095797", "email": "suporte@terabyteshop.com.br", "sameAs":[[ "https://pt-br.facebook.com/Terabyteshop", "https://twitter.com/terabyteshop", "https://plus.google.com/+terabyteshop/", "https://www.youtube.com/user/Terabyteshop" ]] }
    </script>
    <script type="application/ld+json">
        { "@context" : "http://schema.org", "@type" : "WebSite", "name" : "TeraByteShop - Loja de Informática para Gamers e Entusiastas", "alternateName":"TerabyteShop", "url": "https://www.terabyteshop.com.br/", "potentialAction" : { "@type" : "SearchAction", "target" : "https://www.terabyteshop.com.br/busca?str={search_term}", "query-input" : "required name=search_term" } }
    </script>

    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-51700491-1" type="09757efb8e7186b3feb56986-text/javascript"></script>
    <script type="09757efb8e7186b3feb56986-text/javascript">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-51700491-1', {
            'optimize_id': 'GTM-N5DRBN9'
        });
    </script>

    <script type="09757efb8e7186b3feb56986-text/javascript">
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-PWJ7GD');
    </script>

    <script type="09757efb8e7186b3feb56986-text/javascript">
        var APP_ID = "wp30eycr";
        (function() {
            var w = window;
            var ic = w.Intercom;
            if (typeof ic === "function") {
                ic('reattach_activator');
                ic('update', w.intercomSettings);
            } else {
                var d = document;
                var i = function() {
                    i.c(arguments);
                };
                i.q = [];
                i.c = function(args) {
                    i.q.push(args);
                };
                w.Intercom = i;
                var l = function() {
                    var s = d.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = 'https://widget.intercom.io/widget/' + APP_ID;
                    var x = d.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                };
                if (document.readyState === 'complete') {
                    l();
                } else if (w.attachEvent) {
                    w.attachEvent('onload', l);
                } else {
                    w.addEventListener('load', l, false);
                }
            }
        })();
    </script>
</head>

<body>
    <script type="09757efb8e7186b3feb56986-text/javascript">
        var dataLayer = dataLayer || [];
        dataLayer.push({
            'PageType': 'ListingPage',
            'email': '',
            'ProductIDList': ['12949', '12582', '12490', '9779', '9111', '6701', '6708', '13243', '13126', '13077', '13063', '12928', '12479', '12462', '12442', '12222', '12175', '12121', '12090', '11793', '11697', '11698', '11637', '11638', '10315', '9959', '9803', '9744', '9465', '9110', '8698', '8567', '8560', '12156', '13183', '13033', '13034', '13040', '12944', '12896', '12881', '12882', '12768', '12652', '12653', '12567', '12457', '12396', '12120', '12089', '12091', '11934', '11736', '11737', '11746', '11748', '11641', '11216', '10417', '10311', '10154', '9838', '9813', '9819', '9777', '9190', '9163', '8233', '7611', '6703', '12014', '13177', '13125', '12877', '12886', '12337', '12339', '11677', '10044', '9122', '13055', '13041', '12516', '12523', '12525', '12482', '12455', '12336', '12309', '11985', '10573', '10479', '10276', '10278', '10043', '9818', '9743', '9571']
        });
    </script>

    <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PWJ7GD" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>

    <div id="header">
        <div class="headtoppart clearfix hidden-xs hidden-sm">
            <div class="container-fluid no-padding">
                <div class="headertopleft">
                    <div class="address clearfix">
                        <a href="https://www.terabyteshop.com.br/Central.obj"><i class="fa fa-user"></i> Minha Conta </a>
                        <a href="https://www.terabyteshop.com.br/FaleConosco.obj"><i class="fa fa-comment"></i>Central de Atendimento</a>
                    </div>
                </div>
                <div class="headertopright">
                    <a class="facebookicon" title="Facebook" aria-label="facebook" href="https://pt-br.facebook.com/Terabyteshop" target="_blank" rel="noopener">
                        <i aria-hidden="true" class="fa fa-facebook"></i>
                    </a>
                    <a class="twittericon" title="Twitter" aria-label="twitter" href="https://twitter.com/terabyteshop" target="_blank" rel="noopener">
                        <i aria-hidden="true" class="fa fa-twitter"></i>
                    </a>
                    <a class="instaicon" title="Instagram" aria-label="instagram" href="https://www.instagram.com/terabyteshop/" target="_blank" rel="noopener">
                        <i aria-hidden="true" class="fa fa-instagram"></i>
                    </a>
                    <a class="ytbicon" title="YouTube" aria-label="youtube" href="https://www.youtube.com/user/Terabyteshop" target="_blank" rel="noopener">
                        <i aria-hidden="true" class="fa fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
        <header>
            <div class="headerfull clearfix">
                <div class="topo_container_fluid">
                    <div class="smllogo">
                        <a href="https://www.terabyteshop.com.br/"><img class="logo img-responsive" src="https://www.terabyteshop.com.br/img/header-logo.png" alt="TeraByteShop" /></a>
                    </div>
                    <nav class="wsmenu clearfix">
                        <ul class="mobile-sub wsmenu-list">
                            <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                                <section class="menu-principal" tabindex="0" aria-label="menu departamento">
                                    <article class="icon-hamburguer">
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </article>
                                    <p class="icones down-icon"><span>Compre por</span> DEPARTAMENTO</p>
                                    <article class="menu-pop">
                                        <ul class="menu-categorias">
                                            <article class="menu-box">
                                                <p>Login</p>
                                                <p class="pMbox"><a href="/Central.obj" class="nopadding"><i class="fa fa-user"></i></a></p>
                                                <p class="pMbox"><a href="/FaleConosco.obj" class="nopadding"><i class="fa fa-comment"></i></a></p>
                                                <form id="msearch">
                                                    <input id="inpsearch" class="form-control" type="text" placeholder="Pesquise aqui...">
                                                </form>
                                            </article>
                                            <li class="categoria"><a class="mclk" href="https://www.terabyteshop.com.br/promocoes"><strong>Promoções</strong></a></li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/pc-gamer" title="PC Gamer" target="_self"><strong>PC Gamer</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/pc-gamer/t-home" title="T-HOME" target="_self"><strong>T-HOME</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/pc-gamer/t-moba" title="T-MOBA" target="_self"><strong>T-MOBA</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/pc-gamer/t-gamer" title="T-GAMER" target="_self"><strong>T-GAMER</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/pc-gamer/t-power" title="T-POWER" target="_self"><strong>T-POWER</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/pc-gamer/full-custom" title="Monte seu PC" target="_self"><strong>Monte seu PC</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/pc-gamer/pc-gamer-em-oferta" title="PC Gamer em Oferta" target="_self"><strong>PC Gamer em Oferta</strong></a>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/pc-gamer" title="PC Gamer" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/hardware" title="Hardware" target="_self"><strong>Hardware</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/placas-de-video" title="Placa de Vídeo" target="_self"><strong>Placa de Vídeo</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/placas-de-video/nvidia-geforce" title="NVIDIA GeForce" target="_self"><strong>NVIDIA GeForce</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/placas-de-video/amd-radeon" title="AMD Radeon" target="_self"><strong>AMD Radeon</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/placas-de-video/" title="Placa de Vídeo" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/placa-de-captura-tv" title="Placa de Captura" target="_self"><strong>Placa de Captura</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/kit-upgrade" title="Kit Upgrade" target="_self"><strong>Kit Upgrade</strong></a>
                                                    </li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/fontes" title="Fontes" target="_self"><strong>Fontes</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/corsair" title="Fonte Corsair" target="_self"><strong>Fonte Corsair</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/thermaltake-1" title="Fonte Thermaltake" target="_self"><strong>Fonte Thermaltake</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-cooler-master" title="Fonte Cooler Master" target="_self"><strong>Fonte Cooler Master</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-evga" title="Fonte EVGA" target="_self"><strong>Fonte EVGA</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-pcyes" title="Fonte PCYES" target="_self"><strong>Fonte PCYES</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-gamemax" title="Fonte Gamemax" target="_self"><strong>Fonte Gamemax</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-gigabyte" title="Fonte Gigabyte" target="_self"><strong>Fonte Gigabyte</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-aerocool" title="Fonte Aerocool" target="_self"><strong>Fonte Aerocool</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-gamdias" title="Fonte Gamdias" target="_self"><strong>Fonte Gamdias</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/fonte-riotoro" title="Fonte Riotoro" target="_self"><strong>Fonte Riotoro</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/fontes/" title="Fontes" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/processadores" title="Processadores" target="_self"><strong>Processadores</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/processadores/intel" title="INTEL" target="_self"><strong>INTEL</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/processadores/amd-ryzen" title="AMD Ryzen" target="_self"><strong>AMD Ryzen</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/processadores/" title="Processadores" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/placas-mae" title="Placas Mãe" target="_self"><strong>Placas Mãe</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/placas-mae/1151-intel--core-i5-i7" title="LGA 1151 - INTEL" target="_self"><strong>LGA 1151 - INTEL</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/placas-mae/am4-amd-ryzen" title="AM4 - AMD Ryzen " target="_self"><strong>AM4 - AMD Ryzen </strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/placas-mae/" title="Placas Mãe" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/memorias" title="Memórias" target="_self"><strong>Memórias</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/memorias/ddr3" title="DDR3" target="_self"><strong>DDR3</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/memorias/ddr4" title="DDR4" target="_self"><strong>DDR4</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/memorias/memoria-p-notebook" title="Memória Notebook" target="_self"><strong>Memória Notebook</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/memorias/" title="Memórias" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/hard-disk" title="Hard Disk (HD)/SSD" target="_self"><strong>Hard Disk (HD)/SSD</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/hard-disk/hd-externo" title="HD Externo" target="_self"><strong>HD Externo</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/hard-disk/ssd" title="SSD" target="_self"><strong>SSD</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/hard-disk/hd-sata-iii" title="HD SATA III" target="_self"><strong>HD SATA III</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/hard-disk/" title="Hard Disk (HD)/SSD" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/hardware/drives-opticos" title="Drive Dvd/Blu-ray" target="_self"><strong>Drive Dvd/Blu-ray</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/drives-opticos/gravador-dvd-lg" title="Dvd/Blu-ray LG" target="_self"><strong>Dvd/Blu-ray LG</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/drives-opticos/dvd-blu-ray-asus" title="Dvd/Blu-ray Asus" target="_self"><strong>Dvd/Blu-ray Asus</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware/drives-opticos/" title="Drive Dvd/Blu-ray" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/hardware" title="Hardware" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/gabinetes" title="Gabinetes" target="_self"><strong>Gabinetes</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/lian-li" title="Lian Li" target="_self"><strong>Lian Li</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/cooler-master-1" title="Gabinete Cooler Master" target="_self"><strong>Gabinete Cooler Master</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-thermaltake" title="Gabinete Thermaltake" target="_self"><strong>Gabinete Thermaltake</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-corsair" title="Gabinete Corsair" target="_self"><strong>Gabinete Corsair</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-aerocool" title="Gabinete Aerocool" target="_self"><strong>Gabinete Aerocool</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-cougar" title="Gabinete Cougar" target="_self"><strong>Gabinete Cougar</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-pcyes" title="Gabinete PCYES" target="_self"><strong>Gabinete PCYES</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-nzxt" title="Gabinete NZXT" target="_self"><strong>Gabinete NZXT</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-k-mex" title="Gabinete K-MEX" target="_self"><strong>Gabinete K-MEX</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-vinik" title="Gabinete Vinik" target="_self"><strong>Gabinete Vinik</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-gamer-dt3" title="Gabinete DT3" target="_self"><strong>Gabinete DT3</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-gamemax" title="Gabinete Gamemax" target="_self"><strong>Gabinete Gamemax</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-redragon" title="Gabinete ReDragon" target="_self"><strong>Gabinete ReDragon</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-gamdias" title="Gabinete Gamdias" target="_self"><strong>Gabinete Gamdias</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-deepcool" title="Gabinete DeepCool" target="_self"><strong>Gabinete DeepCool</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-liketec" title="Gabinete Liketec " target="_self"><strong>Gabinete Liketec </strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/gabinetes/gabinete-riotoro" title="Gabinete Riotoro" target="_self"><strong>Gabinete Riotoro</strong></a>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/gabinetes" title="Gabinetes" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/monitores" title="Monitor Gamer" target="_self"><strong>Monitor Gamer</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/monitor-gigabyte" title="Monitor Gigabyte" target="_self"><strong>Monitor Gigabyte</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/lg" title="Monitor LG" target="_self"><strong>Monitor LG</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/samsung" title="Monitor Samsung" target="_self"><strong>Monitor Samsung</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/acer" title="Monitor ACER" target="_self"><strong>Monitor ACER</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/monitor-asus" title="Monitor Asus" target="_self"><strong>Monitor Asus</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/monitor-aoc" title="Monitor AOC" target="_self"><strong>Monitor AOC</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/monitor-benq-Zowie" title="Monitor BENQ" target="_self"><strong>Monitor BENQ</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/monitor-gamemax" title="Monitor Gamemax" target="_self"><strong>Monitor Gamemax</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/monitor-bluecase" title="Monitor Bluecase" target="_self"><strong>Monitor Bluecase</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/monitores/monitor-hq" title="Monitor HQ" target="_self"><strong>Monitor HQ</strong></a>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/monitores" title="Monitor Gamer" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer" title="Cadeira Gamer" target="_self"><strong>Cadeira Gamer</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer/akracing" title="AKRacing" target="_self"><strong>AKRacing</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer/dt3" title="DT3" target="_self"><strong>DT3</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer/cadeira-gamer-corsair" title="Corsair" target="_self"><strong>Corsair</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer/thunderx3" title="THUNDERX3" target="_self"><strong>THUNDERX3</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer/elements" title="Elements" target="_self"><strong>Elements</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer/pcyes" title="PcYes" target="_self"><strong>PcYes</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/cadeira-gamer/Cadeira-gamdias" title="Gamdias" target="_self"><strong>Gamdias</strong></a>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/cadeira-gamer" title="Cadeira Gamer" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="categoria"><a class="mclk" href="https://www.terabyteshop.com.br/mesa-gamer"><strong>Mesa Gamer</strong></a></li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/refrigeracao" title="Refrigeração" target="_self"><strong>Refrigeração</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/refrigeracao/cooler-p-cpu" title="Cooler CPU" target="_self"><strong>Cooler CPU</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/refrigeracao/cooler-p-gabinete" title="Cooler Gabinete" target="_self"><strong>Cooler Gabinete</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/refrigeracao/pasta-termica" title="Pasta Térmica" target="_self"><strong>Pasta Térmica</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/refrigeracao/watercooler" title="Water Cooler" target="_self"><strong>Water Cooler</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/refrigeracao/water-cooler-custom" title="Water Cooler Custom" target="_self"><strong>Water Cooler Custom</strong></a>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/refrigeracao" title="Refrigeração" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/perifericos" title="Perifericos" target="_self"><strong>Perifericos</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse" title="Teclado/Mouse" target="_self"><strong>Teclado/Mouse</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/dazz" title="Dazz" target="_self"><strong>Dazz</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/havit" title="HAVIT" target="_self"><strong>HAVIT</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/motospeed" title="Motospeed" target="_self"><strong>Motospeed</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/mad-catz" title="Mad Catz" target="_self"><strong>Mad Catz</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/asus" title="Asus" target="_self"><strong>Asus</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/hp" title="HP" target="_self"><strong>HP</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/cooler-master-2" title="Cooler Master" target="_self"><strong>Cooler Master</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/thermaltake" title="Thermaltake" target="_self"><strong>Thermaltake</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/corsair-1" title="Corsair" target="_self"><strong>Corsair</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/HyperX" title="HyperX" target="_self"><strong>HyperX</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/logitech" title="LOGITECH" target="_self"><strong>LOGITECH</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/redragon" title="REDRAGON" target="_self"><strong>REDRAGON</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/marvo" title="MARVO" target="_self"><strong>MARVO</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/teclado-mouse/" title="Teclado/Mouse" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/perifericos/audio" title="Audio" target="_self"><strong>Audio</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/audio/fone-de-ouvido" title="Fone de Ouvido" target="_self"><strong>Fone de Ouvido</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos/audio/" title="Audio" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/perifericos/cabos-e-acessorios" title="Cabos e Acessórios" target="_self"><strong>Cabos e Acessórios</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/perifericos/webcam" title="WEBCAM" target="_self"><strong>WEBCAM</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/perifericos/mouse-pad-personalizado" title="Mouse Pad Personalizado" target="_self"><strong>Mouse Pad Personalizado</strong></a>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/perifericos/controle-arcade" title="Controle Arcade" target="_self"><strong>Controle Arcade</strong></a>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/perifericos" title="Perifericos" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="icon-right categoria">
                                                <a class="tb" href="https://www.terabyteshop.com.br/diversos" title="Diversos" target="_self"><strong>Diversos</strong></a>
                                                <ul>
                                                    <li class="icon-left menuright">Voltar</li>
                                                    <li class="icon-right">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/diversos/softwares" title="Softwares" target="_self"><strong>Softwares</strong></a>
                                                        <ul>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/diversos/softwares/sistema-operacional" title="Sistema Operacional" target="_self"><strong>Sistema Operacional</strong></a></li>
                                                            <li><a class="mclk" href="https://www.terabyteshop.com.br/diversos/softwares/" title="Softwares" target="_self">Ver Todos</a></li>
                                                        </ul>
                                                    </li>
                                                    <li class="">
                                                        <a class="tb" href="https://www.terabyteshop.com.br/diversos/open-box" title="OPEN BOX" target="_self"><strong>OPEN BOX</strong></a>
                                                    </li>
                                                    <li><a class="mclk" href="https://www.terabyteshop.com.br/diversos" title="Diversos" target="_self">Ver Todos</a></li>
                                                </ul>
                                            </li>
                                            <li class="categoria"><a class="mclk" href="https://www.terabyteshop.com.br/impressora-3d"><strong>Impressora 3D</strong></a></li>

                                        </ul>
                                    </article>
                                </section>
                            </div>
                            <a href="https://www.terabyteshop.com.br/" class="logo_menor hidden-lg hidden-md"><img class="hidden-lg hidden-md " src="https://www.terabyteshop.com.br/img/header-logo.png" alt="TeraByteShop" /></a>
                            <li class="wssearchbar clearfix">
                                <div class="hidden-xs hidden-sm">
                                    <form id="formbusca" class="topmenusearch" method="GET" action="/busca">
                                        <input id="isearch" type="search" name='str' required class="busca col-sm-6 col-md-6 col-lg-6" placeholder="Pesquise o seu produto" autocomplete="off" aria-label="campo busca" />
                                        <button class="btnstyle" aria-label="botão buscar"><i class="searchicon fa fa-search" aria-hidden="true"></i></button>
                                        <button class="close-busca" type="reset" onclick="if (!window.__cfRLUnblockHandlers) return false; $('#suggestions').hide();" data-cf-modified-09757efb8e7186b3feb56986-=""></button>
                                    </form>
                                </div>
                                <div class="clearfix"></div>
                                <div id="suggestions" class="suggestions" style="display:initial"></div>
                            </li>
                            <li class="wscarticon carrinho carr clearfix" tabindex="0" aria-label="carrinho">
                                <a href="https://www.terabyteshop.com.br/ShoppingCart.obj">
                                    <i class="fa fa-shopping-cart"></i>
                                    <div id="pedido-qtd-itens" class="itemValor_Carr animated bounce">0</div>

                                    <div class="hidden-xs hidden-sm popcarr">
                                        <div class="rowcarr headercarr"><span>Produto</span><span>Quantidade</span></div>
                                        <div class="rowempty"><span>Ops! Seu carrinho esta vazio</span></div>
                                    </div>

                                </a>
                            </li>
                            <li class="wsshopmyaccount clearfix hidden-sm hidden-sm hidden-xs" tabindex="0" aria-label="minha conta">
                                <a href="#" class="wtxaccountlink"><i class="fa fa-user"></i> Gamer <i class="fa fa-angle-down"></i></a>
                                <ul class="wsmenu-submenu">
                                    <li><a href="/Central.obj" class=""><i class="fa fa-user"></i>Minha Conta</a></li>
                                    <li><a href="/lista-desejos" class=""><i class="fa fa-heart"></i>Lista de Desejos <div id="qtdwish" class="itemValor animated bounce">0</div></a></li>
                                    <li><a href="/FaleConosco.obj" class=""><i class="fa fa-question-circle"></i>Central de Atendimento</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="container-fluid hidden-md hidden-lg _area_busca_M">
                <form class="topmenusearch" id="tmbusca" method="GET">
                    <input id="misearch" type="search" required class="busca col-sm-6 col-md-6 col-lg-6 _busca_inpu_M" placeholder="Pesquise o seu produto" autocomplete="off" aria-label="campo busca" />
                    <button class="btnstyle _bt_busca_M" aria-label="botão buscar"><i class="searchicon fa fa-search" aria-hidden="true"></i></button>
                    <button class="close-busca _close-busca_M" type="reset" onclick="if (!window.__cfRLUnblockHandlers) return false; $('#suggestions').hide();" data-cf-modified-09757efb8e7186b3feb56986-=""></button>
                </form>
            </div>
            <div id="topopreco">
                <div class="precotopo info-prod hidden">
                    <ul>
                        <li class="col-md-1 col-lg-1 hidden-xs hidden-sm">
                            <img id="img-preco-topo" src="" alt="Preço topo">
                        </li>
                        <li class="col-sm-5 col-md-3 col-lg-4 titPrecoTopo hidden-xs">
                        </li>
                        <li class="col-xs-5 col-sm-3 col-md-3 col-lg-2">
                            <div class="pull-left iconsBar">
                                <i class="fa fa-barcode"></i>
                            </div>
                            <p class="val-prod">R$ </p>
                            <p id="label-val-prod"></p>
                        </li>
                        <li class="col-xs-5 col-sm-3 col-md-3 col-lg-2">
                            <div class="pull-left iconsBar">
                                <i class="fa fa-credit-card"></i>
                            </div>
                            <p class="val-parc"><span id="valParc" class="valParc"></span> <span id="nParc" class="nParc">x</span> de <span id="Parc" class="Parc"></span> <span id="jrParc" class="inf_juros_tp" style="display: block;">s/juros no cartão</span></p>
                        </li>
                        <li class="col-xs-2 col-sm-1 col-md-2 col-lg-1">
                            <button id="comprar-topo" type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="#PRODUTO_ID#" aria-label="comprar">
                                <span><span class="glyphico glyphico-cart-in icon-flipped"></span></span>
                                <span class="hidden-sm hidden-xs"> Comprar</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </div>
    <div class="loader">
        <div class="wrap-loader">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    <div class="loader2" id="loadercustom">
        <div class="wrap-loader2">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
            <h3></h3>
        </div>
    </div>
    <div id="body" style="min-height:300px;">
        <departamento>
            <div class="container">
                <div class="header-content">
                    <ol itemscope itemtype="http://schema.org/BreadcrumbList" class="breadcrumb col-xs-12 col-sm-12 col-md-12">
                        <li itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem" class="active">
                            <div itemprop="name">
                                <h1 itemprop="item" content="https://www.terabyteshop.com.br/promocoes"><strong>PROMOçõES</strong></h1></div>
                            <meta itemprop="position" content="1" />
                        </li>
                    </ol>
                </div>
                <div class="clear"></div>
                <div class="row produtos-home mg0">
                    <div class="filters col-xs-12 col-sm-12 col-md-12 filterSticky">
                        <div class="filterbox col-xs-12 col-sm-12 col-md-12 nopadding">
                            <div class="col-xs-3 col-sm-3 col-md-6 dropdown">
                                <ul class="#CLASS_MULTISUBS#">
                                </ul>
                            </div>
                            <div class="col-md-6 nopadding pull-right">
                                <div class="dropdown pull-right">
                                    <button id="bordenarpor" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class='fa fa-exchange fa-rotate-90' aria-hidden='true'></span> Ordenar por
                                        <span class="caret"></span>
                                    </button>
                                    <input type="hidden" id="iordenarpor" value="" />
                                    <ul id="ordenarpor" class="dropdown-menu lifilters" role="menu" aria-labelledby="ordenarpor">
                                        <li><a class="tb dfilter dordem" href="/promocoes" data-pg="1" data-order="preco_asc" data-manufacturer="0">Menor Preço</a></li>
                                        <li><a class="tb dfilter dordem" href="/promocoes" data-pg="1" data-order="preco_desc" data-manufacturer="0">Maior Preço</a></li>
                                    </ul>
                                </div>
                                <div class="dropdown pull-right">
                                    <button id="bfabricante" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span class='fa fa-bookmark' aria-hidden='true'></span> Marcas
                                        <span class="caret"></span>
                                    </button>
                                    <input type="hidden" id="ifabricante" value="" />
                                    <ul id="fabricante" class="dropdown-menu lifilters" role="menu" aria-labelledby="fabricante">
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="98">Adata</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="101">ASROCK</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="3">Asus</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="34">Biostar</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="12">Cooler Master</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="18">Gigabyte</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="87">HP</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="39">Logitech</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="44">MSI</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="109">Terabyteshop</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="30">Western Digital</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="9">XFX</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="145">Cougar</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="153">PCYES</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="159">Toshiba</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="163">DeepCool</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="164">Crucial</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="165">Redragon</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="170">GAMDIAS</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="184">Colorful</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="187">Marvo</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="190">Bluecase</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="192">Havit</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="194">Motospeed</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="199">Riotoro</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="201">Lian Li</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="202">T-Dagger</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="204">HQ</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="211">Astro</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="212">PCTOP</a></li>
                                        <li><a class="tb dfilter dmarca" href="/promocoes" data-pg="1" data-order="ordem_asc" data-manufacturer="215">Hikvision</a></li>
                                    </ul>
                                </div>
                                <span class="hidden-xs hidden-sm">Filtrar por:</span>
                            </div>
                        </div>
                    </div>
                    <div class="clear"></div>
                    <div id="prodarea" class="col-xs-12 col-sm-12 col-md-12 nopadding">
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12949/mouse-gamer-asus-rog-gladius-ii-rgb-12000-dpi-6-botoes-optico-black-90mp00u1-b0ua00" title="Mouse Gamer Asus Rog Gladius II RGB, 12000 DPI, 6 Botões Óptico, Black, 90MP00U1-B0UA00">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-asus-rog-gladius-ii-rgb-12000-dpi-6-botoes-optico-black-90mp00u1-b0ua00_91013.jpg" alt="Mouse Gamer Asus Rog Gladius II RGB, 12000 DPI, 6 Botões Óptico, Black, 90MP00U1-B0UA00" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12949/mouse-gamer-asus-rog-gladius-ii-rgb-12000-dpi-6-botoes-optico-black-90mp00u1-b0ua00" title="Mouse Gamer Asus Rog Gladius II RGB, 12000 DPI, 6 Botões Óptico, Black, 90MP00U1-B0UA00"><h2><strong>Mouse Gamer Asus Rog Gladius II RGB, 12000 DPI, 6 Botões Óptico, Black, 90MP00U1-B0UA00</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (2)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 745,98</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 299,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 28,64</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12949" aria-label="Comprar">Comprar</button>
                                            <button id="bc12949" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12949" aria-label="Comprar"><span class="sc12949 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12949">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12949"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12582/teclado-mecanico-gamer-asus-rog-claymore-core-rgb-switch-cherry-mx-red-black-90mp00i0-b0ua00" title="Teclado Mecânico Gamer Asus Rog Claymore Core RGB, Switch Cherry Mx Red, Black, 90MP00I0-B0UA00">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-mecanico-gamer-asus-rog-claymore-core-rgb-switch-cherry-mx-red-black-90mp00i0-b0ua00_87901.jpg" alt="Teclado Mecânico Gamer Asus Rog Claymore Core RGB, Switch Cherry Mx Red, Black, 90MP00I0-B0UA00" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12582/teclado-mecanico-gamer-asus-rog-claymore-core-rgb-switch-cherry-mx-red-black-90mp00i0-b0ua00" title="Teclado Mecânico Gamer Asus Rog Claymore Core RGB, Switch Cherry Mx Red, Black, 90MP00I0-B0UA00"><h2><strong>Teclado Mecânico Gamer Asus Rog Claymore Core RGB, Switch Cherry Mx Red, Black, 90MP00I0-B0UA00</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.3" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_3.png"> (3)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 1.289,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 649,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 62,17</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12582" aria-label="Comprar">Comprar</button>
                                            <button id="bc12582" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12582" aria-label="Comprar"><span class="sc12582 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12582">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12582"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12490/monitor-gamer-hq-curvo-315-pol-full-hd-165hz-1ms-hdmi-display-port" title="Monitor Gamer HQ Curvo 31.5 Pol, Full HD, 165Hz, 1ms, HDMI, Display Port">
                                        <img src="https://img.terabyteshop.com.br/produto/p/monitor-gamer-hq-curvo-315-pol-full-hd-165hz-1ms-hdmi-display-port_91300.jpg" alt="Monitor Gamer HQ Curvo 31.5 Pol, Full HD, 165Hz, 1ms, HDMI, Display Port" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12490/monitor-gamer-hq-curvo-315-pol-full-hd-165hz-1ms-hdmi-display-port" title="Monitor Gamer HQ Curvo 31.5 Pol, Full HD, 165Hz, 1ms, HDMI, Display Port"><h2><strong>Monitor Gamer HQ Curvo 31.5 Pol, Full HD, 165Hz, 1ms, HDMI, Display Port</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"><del>De: <span>R$ 2.286,21</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 1.599,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 153,16</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12490" aria-label="Comprar">Comprar</button>
                                            <button id="bc12490" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12490" aria-label="Comprar"><span class="sc12490 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12490">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12490"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9779/mouse-gamer-asus-rog-strix-evolve-p302-8-botoes-programaveis-7200-dpi-rgb-preto" title="Mouse Gamer Asus Rog Strix Evolve p302 8 Botões Programáveis 7200 DPI RGB Preto">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-asus-rog-strix-evolve-p302-8-botoes-programaveis-7200-dpi-rgb-preto_57915.jpg" alt="Mouse Gamer Asus Rog Strix Evolve p302 8 Botões Programáveis 7200 DPI RGB Preto" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9779/mouse-gamer-asus-rog-strix-evolve-p302-8-botoes-programaveis-7200-dpi-rgb-preto" title="Mouse Gamer Asus Rog Strix Evolve p302 8 Botões Programáveis 7200 DPI RGB Preto"><h2><strong>Mouse Gamer Asus Rog Strix Evolve p302 8 Botões Programáveis 7200 DPI RGB Preto</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (4)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 369,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 179,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>10x</span><small> de </small><span>R$ 20,58</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9779" aria-label="Comprar">Comprar</button>
                                            <button id="bc9779" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9779" aria-label="Comprar"><span class="sc9779 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9779">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9779"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9111/cooler-master-hyper-h411r-rr-h411-20pw-r1-intelamd" title="Cooler para Processador Cooler Master HYPER H411R, 92mm, Intel-AMD, RR-H411-20PW-R1">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-master-hyper-h411r-rr-h411-20pw-r1-intelamd_52115.jpg" alt="Cooler para Processador Cooler Master HYPER H411R, 92mm, Intel-AMD, RR-H411-20PW-R1" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9111/cooler-master-hyper-h411r-rr-h411-20pw-r1-intelamd" title="Cooler para Processador Cooler Master HYPER H411R, 92mm, Intel-AMD, RR-H411-20PW-R1"><h2><strong>Cooler para Processador Cooler Master HYPER H411R, 92mm, Intel-AMD, RR-H411-20PW-R1</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.3" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_3.png"> (6)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 122,90</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 93,09</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>5x</span><small> de </small><span>R$ 21,40</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9111" aria-label="Comprar">Comprar</button>
                                            <button id="bc9111" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9111" aria-label="Comprar"><span class="sc9111 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9111">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9111"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/6701/cooler-gamer-deepcool-gammaxx-200t-dp-mch2-gmx200t-p-processador-intelamd" title="Cooler para Processador DeepCool Gammaxx 200T, 120mm Intel-AMD, DP-MCH2-GMX200T">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-gamer-deepcool-gammaxx-200t-dp-mch2-gmx200t-p-processador-intelamd_32441.jpg" alt="Cooler para Processador DeepCool Gammaxx 200T, 120mm Intel-AMD, DP-MCH2-GMX200T" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/6701/cooler-gamer-deepcool-gammaxx-200t-dp-mch2-gmx200t-p-processador-intelamd" title="Cooler para Processador DeepCool Gammaxx 200T, 120mm Intel-AMD, DP-MCH2-GMX200T"><h2><strong>Cooler para Processador DeepCool Gammaxx 200T, 120mm Intel-AMD, DP-MCH2-GMX200T</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.5" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_5.png"> (3)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 89,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 59,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>3x</span><small> de </small><span>R$ 22,61</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="6701" aria-label="Comprar">Comprar</button>
                                            <button id="bc6701" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="6701" aria-label="Comprar"><span class="sc6701 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao6701">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o6701"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/6708/cooler-para-processador-deepcool-ice-blade-blue-92mm-intel-amd-dp-mc8h2-ib200m" title="Cooler para Processador DeepCool Ice Blade, Blue 92mm, Intel-AMD, DP-MC8H2-IB200M">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-para-processador-deepcool-ice-blade-blue-92mm-intel-amd-dp-mc8h2-ib200m_88524.jpg" alt="Cooler para Processador DeepCool Ice Blade, Blue 92mm, Intel-AMD, DP-MC8H2-IB200M" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/6708/cooler-para-processador-deepcool-ice-blade-blue-92mm-intel-amd-dp-mc8h2-ib200m" title="Cooler para Processador DeepCool Ice Blade, Blue 92mm, Intel-AMD, DP-MC8H2-IB200M"><h2><strong>Cooler para Processador DeepCool Ice Blade, Blue 92mm, Intel-AMD, DP-MC8H2-IB200M</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 139,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 84,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>4x</span><small> de </small><span>R$ 24,40</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="6708" aria-label="Comprar">Comprar</button>
                                            <button id="bc6708" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="6708" aria-label="Comprar"><span class="sc6708 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao6708">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o6708"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13243/ssd-hikvision-c100-480gb-sata-iii-leitura-550mbs-e-gravacao-470mbs-hs-ssd-c100480g" title="SSD Hikvision C100, 480GB, Sata III, Leitura 550MBs e Gravação 470MBs, HS-SSD-C100/480G">
                                        <img src="https://img.terabyteshop.com.br/produto/p/ssd-hikvision-c100-480gb-sata-iii-leitura-550mbs-e-gravacao-470mbs-hs-ssd-c100480g_93937.jpg" alt="SSD Hikvision C100, 480GB, Sata III, Leitura 550MBs e Gravação 470MBs, HS-SSD-C100/480G" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13243/ssd-hikvision-c100-480gb-sata-iii-leitura-550mbs-e-gravacao-470mbs-hs-ssd-c100480g" title="SSD Hikvision C100, 480GB, Sata III, Leitura 550MBs e Gravação 470MBs, HS-SSD-C100/480G"><h2><strong>SSD Hikvision C100, 480GB, Sata III, Leitura 550MBs e Gravação 470MBs, HS-SSD-C100/480G</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"><del>De: <span>R$ 489,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 389,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 37,26</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13243" aria-label="Comprar">Comprar</button>
                                            <button id="bc13243" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13243" aria-label="Comprar"><span class="sc13243 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao13243">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o13243"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13126/water-cooler-pcyes-sangue-frio-2-240mm-intel-amd-psf2240h40ptsl" title="Water Cooler PCyes Sangue Frio 2, 240mm, Intel-AMD, PSF2240H40PTSL">
                                        <img src="https://img.terabyteshop.com.br/produto/p/water-cooler-pcyes-sangue-frio-2-240mm-intel-amd-psf2240h40ptsl_93316.jpg" alt="Water Cooler PCyes Sangue Frio 2, 240mm, Intel-AMD, PSF2240H40PTSL" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13126/water-cooler-pcyes-sangue-frio-2-240mm-intel-amd-psf2240h40ptsl" title="Water Cooler PCyes Sangue Frio 2, 240mm, Intel-AMD, PSF2240H40PTSL"><h2><strong>Water Cooler PCyes Sangue Frio 2, 240mm, Intel-AMD, PSF2240H40PTSL</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"><del>De: <span>R$ 404,60</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 319,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 30,56</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13126" aria-label="Comprar">Comprar</button>
                                            <button id="bc13126" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13126" aria-label="Comprar"><span class="sc13126 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao13126">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o13126"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13077/teclado-gamer-mecanico-t-dagger-bora-switch-blue-black-t-tgk313-bl" title="Teclado Gamer Mecânico T-Dagger Bora, Switch Outemu Blue, T-TGK313-BL">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-gamer-mecanico-t-dagger-bora-switch-blue-black-t-tgk313-bl_92504.png" alt="Teclado Gamer Mecânico T-Dagger Bora, Switch Outemu Blue, T-TGK313-BL" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13077/teclado-gamer-mecanico-t-dagger-bora-switch-blue-black-t-tgk313-bl" title="Teclado Gamer Mecânico T-Dagger Bora, Switch Outemu Blue, T-TGK313-BL"><h2><strong>Teclado Gamer Mecânico T-Dagger Bora, Switch Outemu Blue, T-TGK313-BL</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 239,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 159,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>9x</span><small> de </small><span>R$ 20,31</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13077" aria-label="Comprar">Comprar</button>
                                            <button id="bc13077" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13077" aria-label="Comprar"><span class="sc13077 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao13077">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o13077"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13063/monitor-pctop-236-pol-full-hd-60hz-tdd-dm2360kb" title="Monitor Pctop 23,6 Pol, Full HD, 60Hz, TDD-DM2360KB">
                                        <img src="https://img.terabyteshop.com.br/produto/p/monitor-pctop-236-pol-full-hd-60hz-tdd-dm2360kb_92288.png" alt="Monitor Pctop 23,6 Pol, Full HD, 60Hz, TDD-DM2360KB" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13063/monitor-pctop-236-pol-full-hd-60hz-tdd-dm2360kb" title="Monitor Pctop 23,6 Pol, Full HD, 60Hz, TDD-DM2360KB"><h2><strong>Monitor Pctop 23,6 Pol, Full HD, 60Hz, TDD-DM2360KB</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"><del>De: <span>R$ 643,56</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 469,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 44,92</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13063" aria-label="Comprar">Comprar</button>
                                            <button id="bc13063" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13063" aria-label="Comprar"><span class="sc13063 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao13063">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o13063"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12928/gabinete-gamer-lian-li-lancool-ii-rgb-mid-tower-vidro-temperado-black-s-fonte" title="Gabinete Gamer Lian Li Lancool II RGB, Mid Tower, Vidro Temperado, black, S-Fonte">
                                        <img src="https://img.terabyteshop.com.br/produto/p/gabinete-gamer-lian-li-lancool-ii-rgb-mid-tower-vidro-temperado-black-s-fonte_90897.jpg" alt="Gabinete Gamer Lian Li Lancool II RGB, Mid Tower, Vidro Temperado, black, S-Fonte" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12928/gabinete-gamer-lian-li-lancool-ii-rgb-mid-tower-vidro-temperado-black-s-fonte" title="Gabinete Gamer Lian Li Lancool II RGB, Mid Tower, Vidro Temperado, black, S-Fonte"><h2><strong>Gabinete Gamer Lian Li Lancool II RGB, Mid Tower, Vidro Temperado, black, S-Fonte</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.8" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_8.png"> (2)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 827,47</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 669,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 64,08</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12928" aria-label="Comprar">Comprar</button>
                                            <button id="bc12928" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12928" aria-label="Comprar"><span class="sc12928 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12928">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12928"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12479/headset-gamer-kwg-taurus-m1-rgb-usb-black" title="Headset Gamer KWG Taurus M1 RGB, USB, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-kwg-taurus-m1-rgb-usb-black_86504.jpg" alt="Headset Gamer KWG Taurus M1 RGB, USB, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12479/headset-gamer-kwg-taurus-m1-rgb-usb-black" title="Headset Gamer KWG Taurus M1 RGB, USB, Black"><h2><strong>Headset Gamer KWG Taurus M1 RGB, USB, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.6" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_6.png"> (4)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 159,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 124,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>7x</span><small> de </small><span>R$ 20,51</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12479" aria-label="Comprar">Comprar</button>
                                            <button id="bc12479" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12479" aria-label="Comprar"><span class="sc12479 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12479">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12479"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12462/headset-hyperx-cloud-stinger-core-ps4-nintendo-switch-black-blue-hx-hscsc-bk" title="Headset HyperX Cloud Stinger Core, PS4 - Nintendo Switch, Black-Blue, HX-HSCSC-BK ">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-hyperx-cloud-stinger-core-ps4-nintendo-switch-black-blue-hx-hscsc-bk_86282.jpg" alt="Headset HyperX Cloud Stinger Core, PS4 - Nintendo Switch, Black-Blue, HX-HSCSC-BK " />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12462/headset-hyperx-cloud-stinger-core-ps4-nintendo-switch-black-blue-hx-hscsc-bk" title="Headset HyperX Cloud Stinger Core, PS4 - Nintendo Switch, Black-Blue, HX-HSCSC-BK "><h2><strong>Headset HyperX Cloud Stinger Core, PS4 - Nintendo Switch, Black-Blue, HX-HSCSC-BK </strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 319,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 249,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 23,85</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12462" aria-label="Comprar">Comprar</button>
                                            <button id="bc12462" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12462" aria-label="Comprar"><span class="sc12462 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12462">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12462"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12442/placa-mae-biostar-racing-x570gt-chipset-x570-amd-am4-matx-ddr4" title="Placa Mãe Biostar Racing X570GT, Chipset X570, AMD AM4, MATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-biostar-racing-x570gt-chipset-x570-amd-am4-matx-ddr4_86095.png" alt="Placa Mãe Biostar Racing X570GT, Chipset X570, AMD AM4, MATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12442/placa-mae-biostar-racing-x570gt-chipset-x570-amd-am4-matx-ddr4" title="Placa Mãe Biostar Racing X570GT, Chipset X570, AMD AM4, MATX, DDR4"><h2><strong>Placa Mãe Biostar Racing X570GT, Chipset X570, AMD AM4, MATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.8" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_8.png"> (2)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 1.209,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 973,53</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 93,25</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12442" aria-label="Comprar">Comprar</button>
                                            <button id="bc12442" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12442" aria-label="Comprar"><span class="sc12442 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12442">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12442"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12222/ssd-adata-su650-120gb-sata-iii-leitura-520mbs-e-gravacao-450mbs-asu650ss-120gt-r" title="SSD Adata SU650, 120GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU650SS-120GT-R">
                                        <img src="https://img.terabyteshop.com.br/produto/p/ssd-adata-su650-120gb-sata-iii-leitura-520mbs-e-gravacao-450mbs-asu650ss-120gt-r_83669.jpg" alt="SSD Adata SU650, 120GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU650SS-120GT-R" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12222/ssd-adata-su650-120gb-sata-iii-leitura-520mbs-e-gravacao-450mbs-asu650ss-120gt-r" title="SSD Adata SU650, 120GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU650SS-120GT-R"><h2><strong>SSD Adata SU650, 120GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU650SS-120GT-R</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (4)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 218,28</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 188,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>10x</span><small> de </small><span>R$ 21,71</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12222" aria-label="Comprar">Comprar</button>
                                            <button id="bc12222" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12222" aria-label="Comprar"><span class="sc12222 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12222">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12222"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12175/ssd-adata-su630-240gb-sata-iii-leitura-520mbs-e-gravacao-450mbs-asu630ss-240gq-r" title="SSD Adata SU630, 240GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU630SS-240GQ-R">
                                        <img src="https://img.terabyteshop.com.br/produto/p/ssd-adata-su630-240gb-sata-iii-leitura-520mbs-e-gravacao-450mbs-asu630ss-240gq-r_83139.jpg" alt="SSD Adata SU630, 240GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU630SS-240GQ-R" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12175/ssd-adata-su630-240gb-sata-iii-leitura-520mbs-e-gravacao-450mbs-asu630ss-240gq-r" title="SSD Adata SU630, 240GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU630SS-240GQ-R"><h2><strong>SSD Adata SU630, 240GB, Sata III, Leitura 520MBs e Gravação 450MBs, ASU630SS-240GQ-R</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"><del>De: <span>R$ 366,67</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 272,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 26,14</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12175" aria-label="Comprar">Comprar</button>
                                            <button id="bc12175" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12175" aria-label="Comprar"><span class="sc12175 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12175">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12175"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12121/combo-gamer-teclado-e-mouse-cooler-master-devastator-3-plus-rgb-abnt-black-sgb-3001-kkmf1-br" title="Combo Gamer Teclado e Mouse Cooler Master Devastator 3 Plus, MEM-CHANICAL SWITCHES, RGB, ABNT, Black, SGB-3001-KKMF1-BR">
                                        <img src="https://img.terabyteshop.com.br/produto/p/combo-gamer-teclado-e-mouse-cooler-master-devastator-3-plus-rgb-abnt-black-sgb-3001-kkmf1-br_82526.jpg" alt="Combo Gamer Teclado e Mouse Cooler Master Devastator 3 Plus, MEM-CHANICAL SWITCHES, RGB, ABNT, Black, SGB-3001-KKMF1-BR" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12121/combo-gamer-teclado-e-mouse-cooler-master-devastator-3-plus-rgb-abnt-black-sgb-3001-kkmf1-br" title="Combo Gamer Teclado e Mouse Cooler Master Devastator 3 Plus, MEM-CHANICAL SWITCHES, RGB, ABNT, Black, SGB-3001-KKMF1-BR"><h2><strong>Combo Gamer Teclado e Mouse Cooler Master Devastator 3 Plus, MEM-CHANICAL SWITCHES, RGB, ABNT, Black, SGB</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.9" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_9.png"> (26)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 234,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 129,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>7x</span><small> de </small><span>R$ 21,18</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12121" aria-label="Comprar">Comprar</button>
                                            <button id="bc12121" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12121" aria-label="Comprar"><span class="sc12121 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12121">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12121"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12090/teclado-mecanico-gamer-riotoro-ghostwriter-elite-rgb-switch-blue" title="Teclado Mecânico Gamer Riotoro Ghostwriter Elite RGB, Switch Blue">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-mecanico-gamer-riotoro-ghostwriter-elite-rgb-switch-blue_91295.png" alt="Teclado Mecânico Gamer Riotoro Ghostwriter Elite RGB, Switch Blue" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12090/teclado-mecanico-gamer-riotoro-ghostwriter-elite-rgb-switch-blue" title="Teclado Mecânico Gamer Riotoro Ghostwriter Elite RGB, Switch Blue"><h2><strong>Teclado Mecânico Gamer Riotoro Ghostwriter Elite RGB, Switch Blue</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 899,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 695,13</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 66,58</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12090" aria-label="Comprar">Comprar</button>
                                            <button id="bc12090" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12090" aria-label="Comprar"><span class="sc12090 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12090">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12090"></p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11793/placa-mae-msi-b450-tomahawk-chipset-b450-amd-am4-atx-ddr4" title="Placa Mãe MSI B450 Tomahawk, Chipset B450, AMD AM4, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-msi-b450-tomahawk-chipset-b450-amd-am4-atx-ddr4_91119.jpg" alt="Placa Mãe MSI B450 Tomahawk, Chipset B450, AMD AM4, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11793/placa-mae-msi-b450-tomahawk-chipset-b450-amd-am4-atx-ddr4" title="Placa Mãe MSI B450 Tomahawk, Chipset B450, AMD AM4, ATX, DDR4"><h2><strong>Placa Mãe MSI B450 Tomahawk, Chipset B450, AMD AM4, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (44)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 1.199,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 959,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 91,86</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11793" aria-label="Comprar">Comprar</button>
                                            <button id="bc11793" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11793" aria-label="Comprar"><span class="sc11793 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao11793">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o11793"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11697/placa-mae-colorful-igame-z390-x-rng-edition-v20-chipset-z390-intel-lga-1151-atx-ddr4" title="Placa Mãe Colorful iGame Z390-X RNG Edition V20, Chipset Z390, Intel LGA 1151, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-colorful-igame-z390-x-rng-edition-v20-chipset-z390-intel-lga-1151-atx-ddr4_76977.jpg" alt="Placa Mãe Colorful iGame Z390-X RNG Edition V20, Chipset Z390, Intel LGA 1151, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11697/placa-mae-colorful-igame-z390-x-rng-edition-v20-chipset-z390-intel-lga-1151-atx-ddr4" title="Placa Mãe Colorful iGame Z390-X RNG Edition V20, Chipset Z390, Intel LGA 1151, ATX, DDR4"><h2><strong>Placa Mãe Colorful iGame Z390-X RNG Edition V20, Chipset Z390, Intel LGA 1151, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.5" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_5.png"> (1)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 1.369,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 1.099,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 105,27</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11697" aria-label="Comprar">Comprar</button>
                                            <button id="bc11697" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11697" aria-label="Comprar"><span class="sc11697 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao11697">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o11697"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11698/placa-mae-colorful-igame-z390-vulcan-x-v20-chipset-z390-intel-lga-1151-atx-ddr4" title="Placa Mãe Colorful iGame Z390 Vulcan X V20, Chipset Z390, Intel LGA 1151, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-colorful-igame-z390-vulcan-x-v20-chipset-z390-intel-lga-1151-atx-ddr4_76982.jpg" alt="Placa Mãe Colorful iGame Z390 Vulcan X V20, Chipset Z390, Intel LGA 1151, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11698/placa-mae-colorful-igame-z390-vulcan-x-v20-chipset-z390-intel-lga-1151-atx-ddr4" title="Placa Mãe Colorful iGame Z390 Vulcan X V20, Chipset Z390, Intel LGA 1151, ATX, DDR4"><h2><strong>Placa Mãe Colorful iGame Z390 Vulcan X V20, Chipset Z390, Intel LGA 1151, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 1.099,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 105,27</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11698" aria-label="Comprar">Comprar</button>
                                            <button id="bc11698" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11698" aria-label="Comprar"><span class="sc11698 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao11698">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o11698"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11637/placa-mae-asrock-x570-taichi-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe ASRock X570 Taichi Wifi, Chipset X570, AMD AM4, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-asrock-x570-taichi-chipset-x570-amd-am4-atx-ddr4_76145.jpg" alt="Placa Mãe ASRock X570 Taichi Wifi, Chipset X570, AMD AM4, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11637/placa-mae-asrock-x570-taichi-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe ASRock X570 Taichi Wifi, Chipset X570, AMD AM4, ATX, DDR4"><h2><strong>Placa Mãe ASRock X570 Taichi Wifi, Chipset X570, AMD AM4, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"><del>De: <span>R$ 2.599,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 2.089,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 200,10</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11637" aria-label="Comprar">Comprar</button>
                                            <button id="bc11637" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11637" aria-label="Comprar"><span class="sc11637 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao11637">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o11637"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11638/placa-mae-asrock-x570-steel-legend-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe ASRock X570 Steel Legend, Chipset X570, AMD AM4, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-asrock-x570-steel-legend-chipset-x570-amd-am4-atx-ddr4_76155.jpg" alt="Placa Mãe ASRock X570 Steel Legend, Chipset X570, AMD AM4, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11638/placa-mae-asrock-x570-steel-legend-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe ASRock X570 Steel Legend, Chipset X570, AMD AM4, ATX, DDR4"><h2><strong>Placa Mãe ASRock X570 Steel Legend, Chipset X570, AMD AM4, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"><del>De: <span>R$ 1.959,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 1.489,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 142,62</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11638" aria-label="Comprar">Comprar</button>
                                            <button id="bc11638" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11638" aria-label="Comprar"><span class="sc11638 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao11638">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o11638"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10315/mousepad-gamer-redragon-orion-p011-medio-rgb" title="Mousepad Gamer Redragon Orion P011 Médio RGB">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mousepad-gamer-redragon-orion-p011-medio-rgb_63463.jpg" alt="Mousepad Gamer Redragon Orion P011 Médio RGB" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10315/mousepad-gamer-redragon-orion-p011-medio-rgb" title="Mousepad Gamer Redragon Orion P011 Médio RGB"><h2><strong>Mousepad Gamer Redragon Orion P011 Médio RGB</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (5)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 174,60</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 139,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>8x</span><small> de </small><span>R$ 20,10</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="10315" aria-label="Comprar">Comprar</button>
                                            <button id="bc10315" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="10315" aria-label="Comprar"><span class="sc10315 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao10315">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o10315"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9959/ssd-crucial-bx500-240gb-ct240bx500ssd1-leitura-540mbs-gravacao-500mbs-sata-3" title="SSD Crucial BX500, 240GB, Sata III, Leitura 540MBs Gravação 500MBs, CT240BX500SSD1">
                                        <img src="https://img.terabyteshop.com.br/produto/p/ssd-crucial-bx500-240gb-ct240bx500ssd1-leitura-540mbs-gravacao-500mbs-sata-3_59871.jpg" alt="SSD Crucial BX500, 240GB, Sata III, Leitura 540MBs Gravação 500MBs, CT240BX500SSD1" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9959/ssd-crucial-bx500-240gb-ct240bx500ssd1-leitura-540mbs-gravacao-500mbs-sata-3" title="SSD Crucial BX500, 240GB, Sata III, Leitura 540MBs Gravação 500MBs, CT240BX500SSD1"><h2><strong>SSD Crucial BX500, 240GB, Sata III, Leitura 540MBs Gravação 500MBs, CT240BX500SSD1</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.8" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_8.png"> (5)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 320,69</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 269,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 25,85</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9959" aria-label="Comprar">Comprar</button>
                                            <button id="bc9959" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9959" aria-label="Comprar"><span class="sc9959 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9959">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9959"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9803/cooler-master-hyper-h410r-rr-h410-20pk-r1-led-vermelho-intelamd" title="Cooler para Processador Cooler Master Hyper H410R, LED Red 92mm, Intel-AMD, RR-H410-20PK-R1">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-master-hyper-h410r-rr-h410-20pk-r1-led-vermelho-intelamd_58208.jpg" alt="Cooler para Processador Cooler Master Hyper H410R, LED Red 92mm, Intel-AMD, RR-H410-20PK-R1" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9803/cooler-master-hyper-h410r-rr-h410-20pk-r1-led-vermelho-intelamd" title="Cooler para Processador Cooler Master Hyper H410R, LED Red 92mm, Intel-AMD, RR-H410-20PK-R1"><h2><strong>Cooler para Processador Cooler Master Hyper H410R, LED Red 92mm, Intel-AMD, RR-H410-20PK-R1</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.9" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_9.png"> (18)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 129,90</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 92,22</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>5x</span><small> de </small><span>R$ 21,20</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9803" aria-label="Comprar">Comprar</button>
                                            <button id="bc9803" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9803" aria-label="Comprar"><span class="sc9803 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9803">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9803"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9744/headset-gamer-element-g-surround-71-rgb-g351" title="Headset Gamer Element G Surround 7.1 RGB G351">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-element-g-surround-71-rgb-g351_57586.jpg" alt="Headset Gamer Element G Surround 7.1 RGB G351" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9744/headset-gamer-element-g-surround-71-rgb-g351" title="Headset Gamer Element G Surround 7.1 RGB G351"><h2><strong>Headset Gamer Element G Surround 7.1 RGB G351</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 139,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 108,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 20,86</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9744" aria-label="Comprar">Comprar</button>
                                            <button id="bc9744" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9744" aria-label="Comprar"><span class="sc9744 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9744">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9744"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9465/cooler-deepcool-gammaxx-400-dp-mch4-gmx400rd-led-vermelho-intelamd" title="Cooler para Processador DeepCool Gammaxx 400, LED Red 120mm, Intel-AMD, DP-MCH4-GMX400RD">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-deepcool-gammaxx-400-dp-mch4-gmx400rd-led-vermelho-intelamd_54878.jpg" alt="Cooler para Processador DeepCool Gammaxx 400, LED Red 120mm, Intel-AMD, DP-MCH4-GMX400RD" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9465/cooler-deepcool-gammaxx-400-dp-mch4-gmx400rd-led-vermelho-intelamd" title="Cooler para Processador DeepCool Gammaxx 400, LED Red 120mm, Intel-AMD, DP-MCH4-GMX400RD"><h2><strong>Cooler para Processador DeepCool Gammaxx 400, LED Red 120mm, Intel-AMD, DP-MCH4-GMX400RD</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.5" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_5.png"> (5)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 135,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 99,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>5x</span><small> de </small><span>R$ 22,76</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9465" aria-label="Comprar">Comprar</button>
                                            <button id="bc9465" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9465" aria-label="Comprar"><span class="sc9465 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9465">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9465"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9110/cooler-master-hyper-h412r-rr-h412-20pk-r2-intelamd" title="Cooler para Processador Cooler Master Hyper H412R, 92mm, Intel-AMD, RR-H412-20PK-R2">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-master-hyper-h412r-rr-h412-20pk-r2-intelamd_52110.jpg" alt="Cooler para Processador Cooler Master Hyper H412R, 92mm, Intel-AMD, RR-H412-20PK-R2" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9110/cooler-master-hyper-h412r-rr-h412-20pk-r2-intelamd" title="Cooler para Processador Cooler Master Hyper H412R, 92mm, Intel-AMD, RR-H412-20PK-R2"><h2><strong>Cooler para Processador Cooler Master Hyper H412R, 92mm, Intel-AMD, RR-H412-20PK-R2</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.9" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_9.png"> (17)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 125,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 89,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>5x</span><small> de </small><span>R$ 20,46</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9110" aria-label="Comprar">Comprar</button>
                                            <button id="bc9110" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9110" aria-label="Comprar"><span class="sc9110 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9110">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9110"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/8698/ssd-wd-green-240gb-wds240g2g0a-leitura-540mbs-e-gravacao-465mbs-sata-iii" title="SSD WD Green 240GB, Sata III, Leitura 540MBs e Gravação 465MBs, WDS240G2G0A">
                                        <img src="https://img.terabyteshop.com.br/produto/p/ssd-wd-green-240gb-wds240g2g0a-leitura-540mbs-e-gravacao-465mbs-sata-iii_48223.jpg" alt="SSD WD Green 240GB, Sata III, Leitura 540MBs e Gravação 465MBs, WDS240G2G0A" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/8698/ssd-wd-green-240gb-wds240g2g0a-leitura-540mbs-e-gravacao-465mbs-sata-iii" title="SSD WD Green 240GB, Sata III, Leitura 540MBs e Gravação 465MBs, WDS240G2G0A"><h2><strong>SSD WD Green 240GB, Sata III, Leitura 540MBs e Gravação 465MBs, WDS240G2G0A</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (8)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 332,18</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 272,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 26,14</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="8698" aria-label="Comprar">Comprar</button>
                                            <button id="bc8698" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="8698" aria-label="Comprar"><span class="sc8698 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao8698">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o8698"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/8567/mouse-redragon-gamer-cobra-chroma-m711-7-botoes-programaveis-10000-dpi-rgb-preto" title="Mouse Gamer Redragon Cobra Chroma M711 RGB, 10000 DPI, 7 Botões Programáveis, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-redragon-gamer-cobra-chroma-m711-7-botoes-programaveis-10000-dpi-rgb-preto_47021.jpg" alt="Mouse Gamer Redragon Cobra Chroma M711 RGB, 10000 DPI, 7 Botões Programáveis, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/8567/mouse-redragon-gamer-cobra-chroma-m711-7-botoes-programaveis-10000-dpi-rgb-preto" title="Mouse Gamer Redragon Cobra Chroma M711 RGB, 10000 DPI, 7 Botões Programáveis, Black"><h2><strong>Mouse Gamer Redragon Cobra Chroma M711 RGB, 10000 DPI, 7 Botões Programáveis, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.9" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_9.png"> (60)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 149,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 109,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 20,88</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="8567" aria-label="Comprar">Comprar</button>
                                            <button id="bc8567" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="8567" aria-label="Comprar"><span class="sc8567 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao8567">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o8567"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/8560/headset-gamer-redragon-scylla-h901-preto" title="Headset Gamer Redragon Scylla H901 Preto">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-redragon-scylla-h901-preto_46934.jpg" alt="Headset Gamer Redragon Scylla H901 Preto" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/8560/headset-gamer-redragon-scylla-h901-preto" title="Headset Gamer Redragon Scylla H901 Preto"><h2><strong>Headset Gamer Redragon Scylla H901 Preto</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.8" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_8.png"> (71)</span>
                                        <div class="prod-old-price"><del>De: <span>R$ 129,00</span></del> por:</div>
                                        <div class="prod-new-price"><span>R$ 104,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 20,10</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="8560" aria-label="Comprar">Comprar</button>
                                            <button id="bc8560" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="8560" aria-label="Comprar"><span class="sc8560 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao8560">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o8560"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12156/placa-mae-msi-meg-x570-godlike-chipset-x570-amd-am4-e-atx-ddr4" title="Placa Mãe MSI MEG X570 Godlike, Chipset X570, AMD AM4, E-ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-msi-meg-x570-godlike-chipset-x570-amd-am4-e-atx-ddr4_82949.jpg" alt="Placa Mãe MSI MEG X570 Godlike, Chipset X570, AMD AM4, E-ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12156/placa-mae-msi-meg-x570-godlike-chipset-x570-amd-am4-e-atx-ddr4" title="Placa Mãe MSI MEG X570 Godlike, Chipset X570, AMD AM4, E-ATX, DDR4"><h2><strong>Placa Mãe MSI MEG X570 Godlike, Chipset X570, AMD AM4, E-ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 4.549,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 435,73</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12156" aria-label="Comprar">Comprar</button>
                                            <button id="bc12156" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12156" aria-label="Comprar"><span class="sc12156 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13183/monitor-gamer-bluecase-27-pol-rgb-quad-hd-75hz-1ms-bm279gw" title="Monitor Gamer Bluecase 27 Pol, RGB, Quad HD, 75Hz, 1Ms, BM279GW">
                                        <img src="https://img.terabyteshop.com.br/produto/p/monitor-gamer-bluecase-27-pol-rgb-quad-hd-75hz-1ms-bm279gw_93602.jpg" alt="Monitor Gamer Bluecase 27 Pol, RGB, Quad HD, 75Hz, 1Ms, BM279GW" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13183/monitor-gamer-bluecase-27-pol-rgb-quad-hd-75hz-1ms-bm279gw" title="Monitor Gamer Bluecase 27 Pol, RGB, Quad HD, 75Hz, 1Ms, BM279GW"><h2><strong>Monitor Gamer Bluecase 27 Pol, RGB, Quad HD, 75Hz, 1Ms, BM279GW</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 1.565,13</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 149,92</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13183" aria-label="Comprar">Comprar</button>
                                            <button id="bc13183" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13183" aria-label="Comprar"><span class="sc13183 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13033/headset-gamer-riotoro-aviator-classic-surround-71-black" title="Headset Gamer Riotoro Aviator Classic, Surround 7.1, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-riotoro-aviator-classic-surround-71-black_91798.png" alt="Headset Gamer Riotoro Aviator Classic, Surround 7.1, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13033/headset-gamer-riotoro-aviator-classic-surround-71-black" title="Headset Gamer Riotoro Aviator Classic, Surround 7.1, Black"><h2><strong>Headset Gamer Riotoro Aviator Classic, Surround 7.1, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4.png"> (1)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 499,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 47,80</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13033" aria-label="Comprar">Comprar</button>
                                            <button id="bc13033" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13033" aria-label="Comprar"><span class="sc13033 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13034/mouse-gamer-riotoro-nadix-rgb-10000-dpi-7-botoes-programaveis-black" title="Mouse Gamer Riotoro Nadix RGB, 10000 DPI, 7 Botões Programáveis, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-riotoro-nadix-rgb-10000-dpi-7-botoes-programaveis-black_91811.png" alt="Mouse Gamer Riotoro Nadix RGB, 10000 DPI, 7 Botões Programáveis, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13034/mouse-gamer-riotoro-nadix-rgb-10000-dpi-7-botoes-programaveis-black" title="Mouse Gamer Riotoro Nadix RGB, 10000 DPI, 7 Botões Programáveis, Black"><h2><strong>Mouse Gamer Riotoro Nadix RGB, 10000 DPI, 7 Botões Programáveis, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 304,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 29,21</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13034" aria-label="Comprar">Comprar</button>
                                            <button id="bc13034" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13034" aria-label="Comprar"><span class="sc13034 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13040/mouse-gamer-hp-g260-2400-dpi-black" title="Mouse Gamer HP G260, 2400 DPI, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-hp-g260-2400-dpi-black_91868.jpg" alt="Mouse Gamer HP G260, 2400 DPI, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13040/mouse-gamer-hp-g260-2400-dpi-black" title="Mouse Gamer HP G260, 2400 DPI, Black"><h2><strong>Mouse Gamer HP G260, 2400 DPI, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 94,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>5x</span><small> de </small><span>R$ 21,82</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="13040" aria-label="Comprar">Comprar</button>
                                            <button id="bc13040" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="13040" aria-label="Comprar"><span class="sc13040 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12944/headset-gamer-t-dagger-caucasus-black-e-green-t-rgh207" title="Headset Gamer T-Dagger Caucasus, Black e Green, T-RGH207">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-t-dagger-caucasus-black-e-green-t-rgh207_90998.png" alt="Headset Gamer T-Dagger Caucasus, Black e Green, T-RGH207" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12944/headset-gamer-t-dagger-caucasus-black-e-green-t-rgh207" title="Headset Gamer T-Dagger Caucasus, Black e Green, T-RGH207"><h2><strong>Headset Gamer T-Dagger Caucasus, Black e Green, T-RGH207</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 119,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 22,97</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12944" aria-label="Comprar">Comprar</button>
                                            <button id="bc12944" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12944" aria-label="Comprar"><span class="sc12944 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12896/headset-gamer-redragon-helios-h710-surround-71-usb" title="Headset Gamer Redragon Helios H710, Surround 7.1, USB">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-redragon-helios-h710-surround-71-usb_90664.jpg" alt="Headset Gamer Redragon Helios H710, Surround 7.1, USB" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12896/headset-gamer-redragon-helios-h710-surround-71-usb" title="Headset Gamer Redragon Helios H710, Surround 7.1, USB"><h2><strong>Headset Gamer Redragon Helios H710, Surround 7.1, USB</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.6" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_6.png"> (7)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 359,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 34,47</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12896" aria-label="Comprar">Comprar</button>
                                            <button id="bc12896" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12896" aria-label="Comprar"><span class="sc12896 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12881/combo-teclado-e-mouse-hp-gm200-2400-dpi-usb" title="Combo Teclado e Mouse HP GM200, 2400 DPI, USB">
                                        <img src="https://img.terabyteshop.com.br/produto/p/combo-teclado-e-mouse-hp-gm200-2400-dpi-usb_90695.jpg" alt="Combo Teclado e Mouse HP GM200, 2400 DPI, USB" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12881/combo-teclado-e-mouse-hp-gm200-2400-dpi-usb" title="Combo Teclado e Mouse HP GM200, 2400 DPI, USB"><h2><strong>Combo Teclado e Mouse HP GM200, 2400 DPI, USB</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 289,98</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 27,78</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12881" aria-label="Comprar">Comprar</button>
                                            <button id="bc12881" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12881" aria-label="Comprar"><span class="sc12881 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12882/mouse-gamer-hp-g360-6200-dpi-led-black" title="Mouse Gamer HP G360, 6200 DPI, LED, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-hp-g360-6200-dpi-led-black_90629.jpg" alt="Mouse Gamer HP G360, 6200 DPI, LED, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12882/mouse-gamer-hp-g360-6200-dpi-led-black" title="Mouse Gamer HP G360, 6200 DPI, LED, Black"><h2><strong>Mouse Gamer HP G360, 6200 DPI, LED, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 149,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>8x</span><small> de </small><span>R$ 21,54</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">

                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12882" aria-label="Comprar">Comprar</button>
                                            <button id="bc12882" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12882" aria-label="Comprar"><span class="sc12882 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12768/headset-redragon-ares-estereo-h120" title="Headset Redragon Ares, Estéreo, H120">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-redragon-ares-estereo-h120_89371.png" alt="Headset Redragon Ares, Estéreo, H120" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12768/headset-redragon-ares-estereo-h120" title="Headset Redragon Ares, Estéreo, H120"><h2><strong>Headset Redragon Ares, Estéreo, H120</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.8" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_8.png"> (5)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 79,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>4x</span><small> de </small><span>R$ 22,96</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12768" aria-label="Comprar">Comprar</button>
                                            <button id="bc12768" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12768" aria-label="Comprar"><span class="sc12768 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12652/mouse-gamer-t-dagger-captain-rgb-8000-dpi-7-botoes-programaveis-black-t-tgm302" title="Mouse Gamer T-Dagger Captain, RGB, 8000 DPI, 7 Botões Programáveis, Black, T-TGM302">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-t-dagger-captain-rgb-8000-dpi-7-botoes-programaveis-black-t-tgm302_88697.png" alt="Mouse Gamer T-Dagger Captain, RGB, 8000 DPI, 7 Botões Programáveis, Black, T-TGM302" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12652/mouse-gamer-t-dagger-captain-rgb-8000-dpi-7-botoes-programaveis-black-t-tgm302" title="Mouse Gamer T-Dagger Captain, RGB, 8000 DPI, 7 Botões Programáveis, Black, T-TGM302"><h2><strong>Mouse Gamer T-Dagger Captain, RGB, 8000 DPI, 7 Botões Programáveis, Black, T-TGM302</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 114,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 22,01</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12652" aria-label="Comprar">Comprar</button>
                                            <button id="bc12652" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12652" aria-label="Comprar"><span class="sc12652 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12653/teclado-gamer-mecanico-t-dagger-bora-switch-blue-rgb-black-t-tgk315" title="Teclado Gamer Mecânico T-Dagger Bora, Switch Blue, RGB, Black, T-TGK315">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-gamer-mecanico-t-dagger-bora-switch-blue-rgb-black-t-tgk315_88700.png" alt="Teclado Gamer Mecânico T-Dagger Bora, Switch Blue, RGB, Black, T-TGK315" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12653/teclado-gamer-mecanico-t-dagger-bora-switch-blue-rgb-black-t-tgk315" title="Teclado Gamer Mecânico T-Dagger Bora, Switch Blue, RGB, Black, T-TGK315"><h2><strong>Teclado Gamer Mecânico T-Dagger Bora, Switch Blue, RGB, Black, T-TGK315</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 209,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 20,11</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12653" aria-label="Comprar">Comprar</button>
                                            <button id="bc12653" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12653" aria-label="Comprar"><span class="sc12653 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12567/teclado-gamer-mecanico-riotoro-elite-rgb-switch-red-kr900-na" title="Teclado Gamer Mecânico Riotoro Elite RGB, Switch Red, KR900-NA">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-gamer-mecanico-riotoro-elite-rgb-switch-red-kr900-na_87607.png" alt="Teclado Gamer Mecânico Riotoro Elite RGB, Switch Red, KR900-NA" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12567/teclado-gamer-mecanico-riotoro-elite-rgb-switch-red-kr900-na" title="Teclado Gamer Mecânico Riotoro Elite RGB, Switch Red, KR900-NA"><h2><strong>Teclado Gamer Mecânico Riotoro Elite RGB, Switch Red, KR900-NA</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 799,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 76,62</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12567" aria-label="Comprar">Comprar</button>
                                            <button id="bc12567" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12567" aria-label="Comprar"><span class="sc12567 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12457/mouse-gamer-asus-rog-sica-p301-3-botoes-5000-dpi-preto-90mp00b1-b0ua00" title="Mouse Gamer Asus Rog Sica P301, 3 botôes, 5000 DPI Preto, 90MP00B1-B0UA00">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-asus-rog-sica-p301-3-botoes-5000-dpi-preto-90mp00b1-b0ua00_86233.jpg" alt="Mouse Gamer Asus Rog Sica P301, 3 botôes, 5000 DPI Preto, 90MP00B1-B0UA00" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12457/mouse-gamer-asus-rog-sica-p301-3-botoes-5000-dpi-preto-90mp00b1-b0ua00" title="Mouse Gamer Asus Rog Sica P301, 3 botôes, 5000 DPI Preto, 90MP00B1-B0UA00"><h2><strong>Mouse Gamer Asus Rog Sica P301, 3 botôes, 5000 DPI Preto, 90MP00B1-B0UA00</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 189,66</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>10x</span><small> de </small><span>R$ 21,80</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12457" aria-label="Comprar">Comprar</button>
                                            <button id="bc12457" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12457" aria-label="Comprar"><span class="sc12457 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12396/combo-mouse-gamer-minos-xc-mousepad-speed-xc-black-3mmxcwob0001" title="Combo Cougar Mouse Gamer Minos XC, Mousepad Speed XC, Black, 3MMXCWOB.0001">
                                        <img src="https://img.terabyteshop.com.br/produto/p/combo-mouse-gamer-minos-xc-mousepad-speed-xc-black-3mmxcwob0001_85623.png" alt="Combo Cougar Mouse Gamer Minos XC, Mousepad Speed XC, Black, 3MMXCWOB.0001" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12396/combo-mouse-gamer-minos-xc-mousepad-speed-xc-black-3mmxcwob0001" title="Combo Cougar Mouse Gamer Minos XC, Mousepad Speed XC, Black, 3MMXCWOB.0001"><h2><strong>Combo Cougar Mouse Gamer Minos XC, Mousepad Speed XC, Black, 3MMXCWOB.0001</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.9" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_9.png"> (7)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 103,53</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>5x</span><small> de </small><span>R$ 23,80</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12396" aria-label="Comprar">Comprar</button>
                                            <button id="bc12396" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12396" aria-label="Comprar"><span class="sc12396 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12120/fonte-cooler-master-mwe-450w-80-plus-bronze-pfc-ativo-mpe-4501-acaab-br" title="Fonte Cooler Master MPE 450W, 80 Plus Bronze, PFC Ativo, MPE-4501-ACAAB-BR">
                                        <img src="https://img.terabyteshop.com.br/produto/p/fonte-cooler-master-mwe-450w-80-plus-bronze-pfc-ativo-mpe-4501-acaab-br_82514.jpg" alt="Fonte Cooler Master MPE 450W, 80 Plus Bronze, PFC Ativo, MPE-4501-ACAAB-BR" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12120/fonte-cooler-master-mwe-450w-80-plus-bronze-pfc-ativo-mpe-4501-acaab-br" title="Fonte Cooler Master MPE 450W, 80 Plus Bronze, PFC Ativo, MPE-4501-ACAAB-BR"><h2><strong>Fonte Cooler Master MPE 450W, 80 Plus Bronze, PFC Ativo, MPE-4501-ACAAB-BR</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 279,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 26,72</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12120" aria-label="Comprar">Comprar</button>
                                            <button id="bc12120" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12120" aria-label="Comprar"><span class="sc12120 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12089/mouse-gamer-riotoro-aurox-10000-dpi-8-botoes-programaveis-black" title="Mouse Gamer Riotoro Aurox, 10000 DPI, 8 Botões Programáveis, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-riotoro-aurox-10000-dpi-8-botoes-programaveis-black_82729.jpg" alt="Mouse Gamer Riotoro Aurox, 10000 DPI, 8 Botões Programáveis, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12089/mouse-gamer-riotoro-aurox-10000-dpi-8-botoes-programaveis-black" title="Mouse Gamer Riotoro Aurox, 10000 DPI, 8 Botões Programáveis, Black"><h2><strong>Mouse Gamer Riotoro Aurox, 10000 DPI, 8 Botões Programáveis, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 199,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>11x</span><small> de </small><span>R$ 20,89</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12089" aria-label="Comprar">Comprar</button>
                                            <button id="bc12089" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12089" aria-label="Comprar"><span class="sc12089 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12091/teclado-mecanico-gamer-riotoro-prism-cherry-rgb-switch-brown-kr700-xpbn" title="Teclado Mecânico Gamer Riotoro Prism Cherry RGB, Switch Brown, KR700-XPBN">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-mecanico-gamer-riotoro-prism-cherry-rgb-switch-brown-kr700-xpbn_87594.png" alt="Teclado Mecânico Gamer Riotoro Prism Cherry RGB, Switch Brown, KR700-XPBN" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12091/teclado-mecanico-gamer-riotoro-prism-cherry-rgb-switch-brown-kr700-xpbn" title="Teclado Mecânico Gamer Riotoro Prism Cherry RGB, Switch Brown, KR700-XPBN"><h2><strong>Teclado Mecânico Gamer Riotoro Prism Cherry RGB, Switch Brown, KR700-XPBN</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 604,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 57,94</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="12091" aria-label="Comprar">Comprar</button>
                                            <button id="bc12091" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="12091" aria-label="Comprar"><span class="sc12091 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11934/gabinete-gamer-riotoro-morpheus-minimid-tower-com-3-fans-black-s-fonte-gpx100" title="Gabinete Gamer Riotoro Morpheus, Mini/Mid Tower, Com 3 Fans, Black, S-Fonte, GPX100">
                                        <img src="https://img.terabyteshop.com.br/produto/p/gabinete-gamer-riotoro-morpheus-minimid-tower-com-3-fans-black-s-fonte-gpx100_82911.jpg" alt="Gabinete Gamer Riotoro Morpheus, Mini/Mid Tower, Com 3 Fans, Black, S-Fonte, GPX100" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11934/gabinete-gamer-riotoro-morpheus-minimid-tower-com-3-fans-black-s-fonte-gpx100" title="Gabinete Gamer Riotoro Morpheus, Mini/Mid Tower, Com 3 Fans, Black, S-Fonte, GPX100"><h2><strong>Gabinete Gamer Riotoro Morpheus, Mini/Mid Tower, Com 3 Fans, Black, S-Fonte, GPX100</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (4)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 939,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 90,03</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11934" aria-label="Comprar">Comprar</button>
                                            <button id="bc11934" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11934" aria-label="Comprar"><span class="sc11934 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11736/mouse-gamer-t-dagger-lieutenant-rgb-8000-dpi-7-botoes-programaveis-black" title="Mouse Gamer T-Dagger Lieutenant RGB 8000 DPI, 7 Botões Programáveis, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-t-dagger-lieutenant-rgb-8000-dpi-7-botoes-programaveis-black_79412.jpg" alt="Mouse Gamer T-Dagger Lieutenant RGB 8000 DPI, 7 Botões Programáveis, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11736/mouse-gamer-t-dagger-lieutenant-rgb-8000-dpi-7-botoes-programaveis-black" title="Mouse Gamer T-Dagger Lieutenant RGB 8000 DPI, 7 Botões Programáveis, Black"><h2><strong>Mouse Gamer T-Dagger Lieutenant RGB 8000 DPI, 7 Botões Programáveis, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 114,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 22,01</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11736" aria-label="Comprar">Comprar</button>
                                            <button id="bc11736" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11736" aria-label="Comprar"><span class="sc11736 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11737/mouse-gamer-t-dagger-major-rgb-8000-dpi-black" title="Mouse Gamer T-Dagger Major RGB 8000 DPI, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-t-dagger-major-rgb-8000-dpi-black_79465.jpg" alt="Mouse Gamer T-Dagger Major RGB 8000 DPI, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11737/mouse-gamer-t-dagger-major-rgb-8000-dpi-black" title="Mouse Gamer T-Dagger Major RGB 8000 DPI, Black"><h2><strong>Mouse Gamer T-Dagger Major RGB 8000 DPI, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 119,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 22,97</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11737" aria-label="Comprar">Comprar</button>
                                            <button id="bc11737" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11737" aria-label="Comprar"><span class="sc11737 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11746/headset-gamer-t-dagger-ural-black-e-green-t-rgh202" title="Headset Gamer T-Dagger Ural, Black e Green, T-RGH202">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-t-dagger-ural-black-e-green-t-rgh202_79385.jpg" alt="Headset Gamer T-Dagger Ural, Black e Green, T-RGH202" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11746/headset-gamer-t-dagger-ural-black-e-green-t-rgh202" title="Headset Gamer T-Dagger Ural, Black e Green, T-RGH202"><h2><strong>Headset Gamer T-Dagger Ural, Black e Green, T-RGH202</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (2)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 112,23</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 21,50</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11746" aria-label="Comprar">Comprar</button>
                                            <button id="bc11746" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11746" aria-label="Comprar"><span class="sc11746 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11748/headset-gamer-t-dagger-andes-usb-black-e-green-t-rgh300" title="Headset Gamer T-Dagger Andes, USB, Black e Green, T-RGH300">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-t-dagger-andes-usb-black-e-green-t-rgh300_79530.jpg" alt="Headset Gamer T-Dagger Andes, USB, Black e Green, T-RGH300" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11748/headset-gamer-t-dagger-andes-usb-black-e-green-t-rgh300" title="Headset Gamer T-Dagger Andes, USB, Black e Green, T-RGH300"><h2><strong>Headset Gamer T-Dagger Andes, USB, Black e Green, T-RGH300</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 139,00</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>7x</span><small> de </small><span>R$ 22,82</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11748" aria-label="Comprar">Comprar</button>
                                            <button id="bc11748" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11748" aria-label="Comprar"><span class="sc11748 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11641/placa-mae-msi-meg-x570-ace-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe MSI MEG X570 ACE, Chipset X570, AMD AM4, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-msi-meg-x570-ace-chipset-x570-amd-am4-atx-ddr4_76184.png" alt="Placa Mãe MSI MEG X570 ACE, Chipset X570, AMD AM4, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11641/placa-mae-msi-meg-x570-ace-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe MSI MEG X570 ACE, Chipset X570, AMD AM4, ATX, DDR4"><h2><strong>Placa Mãe MSI MEG X570 ACE, Chipset X570, AMD AM4, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.9" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_9.png"> (7)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 2.374,23</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 227,42</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11641" aria-label="Comprar">Comprar</button>
                                            <button id="bc11641" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11641" aria-label="Comprar"><span class="sc11641 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11216/gabinete-gamer-cougar-turret-rgb-mid-tower-com-2-fans-vidro-temperado-black-s-fonte" title="Gabinete Gamer Cougar Turret RGB, Mid Tower, Com 2 Fans, Vidro Temperado, Black, S-Fonte">
                                        <img src="https://img.terabyteshop.com.br/produto/p/gabinete-gamer-cougar-turret-rgb-mid-tower-com-2-fans-vidro-temperado-black-s-fonte_72886.jpg" alt="Gabinete Gamer Cougar Turret RGB, Mid Tower, Com 2 Fans, Vidro Temperado, Black, S-Fonte" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11216/gabinete-gamer-cougar-turret-rgb-mid-tower-com-2-fans-vidro-temperado-black-s-fonte" title="Gabinete Gamer Cougar Turret RGB, Mid Tower, Com 2 Fans, Vidro Temperado, Black, S-Fonte"><h2><strong>Gabinete Gamer Cougar Turret RGB, Mid Tower, Com 2 Fans, Vidro Temperado, Black, S-Fonte</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 524,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 50,28</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="11216" aria-label="Comprar">Comprar</button>
                                            <button id="bc11216" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="11216" aria-label="Comprar"><span class="sc11216 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10417/water-cooler-gamdias-chione-e1a-120r-rgb-intelam4-ryzen" title="Water Cooler Gamdias Chione E1A 120R, RGB 120mm, Intel-AMD">
                                        <img src="https://img.terabyteshop.com.br/produto/p/water-cooler-gamdias-chione-e1a-120r-rgb-intelam4-ryzen_64718.jpg" alt="Water Cooler Gamdias Chione E1A 120R, RGB 120mm, Intel-AMD" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10417/water-cooler-gamdias-chione-e1a-120r-rgb-intelam4-ryzen" title="Water Cooler Gamdias Chione E1A 120R, RGB 120mm, Intel-AMD"><h2><strong>Water Cooler Gamdias Chione E1A 120R, RGB 120mm, Intel-AMD</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.7" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_7.png"> (3)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 364,53</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 34,92</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="10417" aria-label="Comprar">Comprar</button>
                                            <button id="bc10417" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="10417" aria-label="Comprar"><span class="sc10417 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10311/teclado-gamer-redragon-harpe-rgb-k503rgb-abnt-2" title="Teclado Gamer Redragon Harpe RGB, ABNT2, K503RGB">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-gamer-redragon-harpe-rgb-k503rgb-abnt-2_63424.jpg" alt="Teclado Gamer Redragon Harpe RGB, ABNT2, K503RGB" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10311/teclado-gamer-redragon-harpe-rgb-k503rgb-abnt-2" title="Teclado Gamer Redragon Harpe RGB, ABNT2, K503RGB"><h2><strong>Teclado Gamer Redragon Harpe RGB, ABNT2, K503RGB</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (5)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 119,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>6x</span><small> de </small><span>R$ 22,97</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="10311" aria-label="Comprar">Comprar</button>
                                            <button id="bc10311" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="10311" aria-label="Comprar"><span class="sc10311 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10154/teclado-mecanico-gamer-motospeed-ck98-rainbow-preto-switch-lk-optical" title="Teclado Mecânico Gamer Motospeed CK98 Rainbow, Switch LK Optical, Black, FMSTC0010OPT">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-mecanico-gamer-motospeed-ck98-rainbow-preto-switch-lk-optical_61650.jpg" alt="Teclado Mecânico Gamer Motospeed CK98 Rainbow, Switch LK Optical, Black, FMSTC0010OPT" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10154/teclado-mecanico-gamer-motospeed-ck98-rainbow-preto-switch-lk-optical" title="Teclado Mecânico Gamer Motospeed CK98 Rainbow, Switch LK Optical, Black, FMSTC0010OPT"><h2><strong>Teclado Mecânico Gamer Motospeed CK98 Rainbow, Switch LK Optical, Black, FMSTC0010OPT</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 359,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 34,47</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="10154" aria-label="Comprar">Comprar</button>
                                            <button id="bc10154" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="10154" aria-label="Comprar"><span class="sc10154 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9838/hdd-toshiba-hdkpc09zka01-2tb-7200rpm-sata-60gbs-64mb-35" title="HD Toshiba 2TB, Sata III, 7200RPM, 64MB, HDKPC09ZKA01">
                                        <img src="https://img.terabyteshop.com.br/produto/p/hdd-toshiba-hdkpc09zka01-2tb-7200rpm-sata-60gbs-64mb-35_58563.jpg" alt="HD Toshiba 2TB, Sata III, 7200RPM, 64MB, HDKPC09ZKA01" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9838/hdd-toshiba-hdkpc09zka01-2tb-7200rpm-sata-60gbs-64mb-35" title="HD Toshiba 2TB, Sata III, 7200RPM, 64MB, HDKPC09ZKA01"><h2><strong>HD Toshiba 2TB, Sata III, 7200RPM, 64MB, HDKPC09ZKA01</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.8" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_8.png"> (3)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 373,23</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 35,75</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9838" aria-label="Comprar">Comprar</button>
                                            <button id="bc9838" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9838" aria-label="Comprar"><span class="sc9838 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9813/hd-externo-portatil-toshiba-canvio-basics-2tb-hdtb420xk3aa-usb-30-preto" title="HD Externo Portátil Toshiba Canvio Basics 2TB HDTB420XK3AA USB 3.0 Preto">
                                        <img src="https://img.terabyteshop.com.br/produto/p/hd-externo-portatil-toshiba-canvio-basics-2tb-hdtb420xk3aa-usb-30-preto_58324.jpg" alt="HD Externo Portátil Toshiba Canvio Basics 2TB HDTB420XK3AA USB 3.0 Preto" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9813/hd-externo-portatil-toshiba-canvio-basics-2tb-hdtb420xk3aa-usb-30-preto" title="HD Externo Portátil Toshiba Canvio Basics 2TB HDTB420XK3AA USB 3.0 Preto"><h2><strong>HD Externo Portátil Toshiba Canvio Basics 2TB HDTB420XK3AA USB 3.0 Preto</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 425,43</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 40,75</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9813" aria-label="Comprar">Comprar</button>
                                            <button id="bc9813" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9813" aria-label="Comprar"><span class="sc9813 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9819/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-branco-hdtc920xw3aa" title="HD Externo Portátil Toshiba Canvio Advance 2TB USB 3.0 Branco, HDTC920XW3AA">
                                        <img src="https://img.terabyteshop.com.br/produto/p/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-branco-hdtc920xw3aa_90131.jpg" alt="HD Externo Portátil Toshiba Canvio Advance 2TB USB 3.0 Branco, HDTC920XW3AA" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9819/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-branco-hdtc920xw3aa" title="HD Externo Portátil Toshiba Canvio Advance 2TB USB 3.0 Branco, HDTC920XW3AA"><h2><strong>HD Externo Portátil Toshiba Canvio Advance 2TB USB 3.0 Branco, HDTC920XW3AA</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 416,73</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 39,92</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9819" aria-label="Comprar">Comprar</button>
                                            <button id="bc9819" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9819" aria-label="Comprar"><span class="sc9819 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9777/mouse-gamer-asus-laser-rog-gladius-6400-dpi-2-botoes-programaveis-preto" title="Mouse Gamer Asus Laser Rog Gladius 6400 DPI 2 Botões Programáveis Preto">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-asus-laser-rog-gladius-6400-dpi-2-botoes-programaveis-preto_57887.jpg" alt="Mouse Gamer Asus Laser Rog Gladius 6400 DPI 2 Botões Programáveis Preto" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9777/mouse-gamer-asus-laser-rog-gladius-6400-dpi-2-botoes-programaveis-preto" title="Mouse Gamer Asus Laser Rog Gladius 6400 DPI 2 Botões Programáveis Preto"><h2><strong>Mouse Gamer Asus Laser Rog Gladius 6400 DPI 2 Botões Programáveis Preto</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 260,13</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 24,92</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9777" aria-label="Comprar">Comprar</button>
                                            <button id="bc9777" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9777" aria-label="Comprar"><span class="sc9777 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9190/combo-marvo-mouse-gamer-m315-mouse-pad-g1-gamer" title="Combo Marvo Mouse Gamer M315 + Mouse Pad G1 Gamer">
                                        <img src="https://img.terabyteshop.com.br/produto/p/combo-marvo-mouse-gamer-m315-mouse-pad-g1-gamer_52953.jpg" alt="Combo Marvo Mouse Gamer M315 + Mouse Pad G1 Gamer" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9190/combo-marvo-mouse-gamer-m315-mouse-pad-g1-gamer" title="Combo Marvo Mouse Gamer M315 + Mouse Pad G1 Gamer"><h2><strong>Combo Marvo Mouse Gamer M315 + Mouse Pad G1 Gamer</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 74,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>4x</span><small> de </small><span>R$ 21,52</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9190" aria-label="Comprar">Comprar</button>
                                            <button id="bc9190" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9190" aria-label="Comprar"><span class="sc9190 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9163/water-cooler-cooler-master-masterliquid-ml120l-rgb-mlw-d12m-a20pc-r1" title="Water Cooler Cooler Master Masterliquid ML120L, RGB 120mm, Intel-AMD, MLW-D12M-A20PC-R1">
                                        <img src="https://img.terabyteshop.com.br/produto/p/water-cooler-cooler-master-masterliquid-ml120l-rgb-mlw-d12m-a20pc-r1_53034.jpg" alt="Water Cooler Cooler Master Masterliquid ML120L, RGB 120mm, Intel-AMD, MLW-D12M-A20PC-R1" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9163/water-cooler-cooler-master-masterliquid-ml120l-rgb-mlw-d12m-a20pc-r1" title="Water Cooler Cooler Master Masterliquid ML120L, RGB 120mm, Intel-AMD, MLW-D12M-A20PC-R1"><h2><strong>Water Cooler Cooler Master Masterliquid ML120L, RGB 120mm, Intel-AMD, MLW-D12M-A20PC-R1</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (6)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 299,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 28,73</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="9163" aria-label="Comprar">Comprar</button>
                                            <button id="bc9163" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="9163" aria-label="Comprar"><span class="sc9163 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/8233/teclado-mecanico-logitech-g413-carbon" title="Teclado Mecânico Gamer Logitech G413 Carbon Switch Romer-G Tactile, Led Red">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-mecanico-logitech-g413-carbon_88350.png" alt="Teclado Mecânico Gamer Logitech G413 Carbon Switch Romer-G Tactile, Led Red" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/8233/teclado-mecanico-logitech-g413-carbon" title="Teclado Mecânico Gamer Logitech G413 Carbon Switch Romer-G Tactile, Led Red"><h2><strong>Teclado Mecânico Gamer Logitech G413 Carbon Switch Romer-G Tactile, Led Red</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.7" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_7.png"> (3)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 425,43</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 40,75</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="8233" aria-label="Comprar">Comprar</button>
                                            <button id="bc8233" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="8233" aria-label="Comprar"><span class="sc8233 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/7611/placa-de-video-xfx-radeon-rx-580-8gb-oc-gts-xxx-edition-rx-580p8dfd6-gddr5" title="Placa de Vídeo XFX Radeon RX 580 Dual OC+ GTS XXX Edition, 8GB GDDR5, 256Bit, RX-580P8DFD6 ">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-de-video-xfx-radeon-rx-580-8gb-oc-gts-xxx-edition-rx-580p8dfd6-gddr5_38785.jpg" alt="Placa de Vídeo XFX Radeon RX 580 Dual OC+ GTS XXX Edition, 8GB GDDR5, 256Bit, RX-580P8DFD6 " />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/7611/placa-de-video-xfx-radeon-rx-580-8gb-oc-gts-xxx-edition-rx-580p8dfd6-gddr5" title="Placa de Vídeo XFX Radeon RX 580 Dual OC+ GTS XXX Edition, 8GB GDDR5, 256Bit, RX-580P8DFD6 "><h2><strong>Placa de Vídeo XFX Radeon RX 580 Dual OC+ GTS XXX Edition, 8GB GDDR5, 256Bit, RX-580P8DFD6 </strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.8" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_8.png"> (62)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 1.243,23</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>12x</span><small> de </small><span>R$ 119,08</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="7611" aria-label="Comprar">Comprar</button>
                                            <button id="bc7611" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="7611" aria-label="Comprar"><span class="sc7611 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/6703/cooler-deepcool-gammaxx-400-dp-mch4-gmx400-p-processador-intelamd" title="Cooler para Processador DeepCool Gammaxx 400, LED Blue 120mm, Intel-AMD, DP-MCH4-GMX400">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-deepcool-gammaxx-400-dp-mch4-gmx400-p-processador-intelamd_85976.jpg" alt="Cooler para Processador DeepCool Gammaxx 400, LED Blue 120mm, Intel-AMD, DP-MCH4-GMX400" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/6703/cooler-deepcool-gammaxx-400-dp-mch4-gmx400-p-processador-intelamd" title="Cooler para Processador DeepCool Gammaxx 400, LED Blue 120mm, Intel-AMD, DP-MCH4-GMX400"><h2><strong>Cooler para Processador DeepCool Gammaxx 400, LED Blue 120mm, Intel-AMD, DP-MCH4-GMX400</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.9" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_9.png"> (28)</span>
                                        <div class="prod-old-price"></div>
                                        <div class="prod-new-price"><span>R$ 94,90</span> <small> à vista no boleto</small></div>
                                        <div class="prod-juros"><span>5x</span><small> de </small><span>R$ 21,82</span><small> sem juros</small></div>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <button type="button" class="btn tbt_comprar" data-c2="1" data-c1="1" data-produto="6703" aria-label="Comprar">Comprar</button>
                                            <button id="bc6703" type="button" class="btn tbt_cart bt-cmp" data-c2="1" data-c1="1" data-produto="6703" aria-label="Comprar"><span class="sc6703 glyphico glyphico-cart-in icon-flipped"></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12014/monitor-gamer-hq-flat-27-pol-165hz-1ms-freesync-hdmi-display-port" title="Monitor Gamer HQ 27 Pol, 165Hz, 1ms, Freesync, HDMI, Display Port, c/ Ajuste de Altura">
                                        <img src="https://img.terabyteshop.com.br/produto/p/monitor-gamer-hq-flat-27-pol-165hz-1ms-freesync-hdmi-display-port_84522.jpg" alt="Monitor Gamer HQ 27 Pol, 165Hz, 1ms, Freesync, HDMI, Display Port, c/ Ajuste de Altura" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12014/monitor-gamer-hq-flat-27-pol-165hz-1ms-freesync-hdmi-display-port" title="Monitor Gamer HQ 27 Pol, 165Hz, 1ms, Freesync, HDMI, Display Port, c/ Ajuste de Altura"><h2><strong>Monitor Gamer HQ 27 Pol, 165Hz, 1ms, Freesync, HDMI, Display Port, c/ Ajuste de Altura</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.7" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_7.png"> (15)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12014/monitor-gamer-hq-flat-27-pol-165hz-1ms-freesync-hdmi-display-port" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12014" class="btn tbt_avicon" href="/produto/12014/monitor-gamer-hq-flat-27-pol-165hz-1ms-freesync-hdmi-display-port" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12014">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12014"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13177/monitor-gamer-bluecase-24-pol-full-hd-144hz-1ms-bm243gc" title="Monitor Gamer Bluecase 24 Pol, Curvo, Full HD, 144Hz, 1Ms, BM243GC">
                                        <img src="https://img.terabyteshop.com.br/produto/p/monitor-gamer-bluecase-24-pol-full-hd-144hz-1ms-bm243gc_93582.png" alt="Monitor Gamer Bluecase 24 Pol, Curvo, Full HD, 144Hz, 1Ms, BM243GC" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13177/monitor-gamer-bluecase-24-pol-full-hd-144hz-1ms-bm243gc" title="Monitor Gamer Bluecase 24 Pol, Curvo, Full HD, 144Hz, 1Ms, BM243GC"><h2><strong>Monitor Gamer Bluecase 24 Pol, Curvo, Full HD, 144Hz, 1Ms, BM243GC</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/13177/monitor-gamer-bluecase-24-pol-full-hd-144hz-1ms-bm243gc" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav13177" class="btn tbt_avicon" href="/produto/13177/monitor-gamer-bluecase-24-pol-full-hd-144hz-1ms-bm243gc" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao13177">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o13177"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13125/water-cooler-pcyes-sangue-frio-2-120mm-intel-amd-psf2120h33ptsl" title="Water Cooler PCyes Sangue Frio 2, 120mm, Intel-AMD, PSF2120H33PTSL">
                                        <img src="https://img.terabyteshop.com.br/produto/p/water-cooler-pcyes-sangue-frio-2-120mm-intel-amd-psf2120h33ptsl_93302.jpg" alt="Water Cooler PCyes Sangue Frio 2, 120mm, Intel-AMD, PSF2120H33PTSL" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13125/water-cooler-pcyes-sangue-frio-2-120mm-intel-amd-psf2120h33ptsl" title="Water Cooler PCyes Sangue Frio 2, 120mm, Intel-AMD, PSF2120H33PTSL"><h2><strong>Water Cooler PCyes Sangue Frio 2, 120mm, Intel-AMD, PSF2120H33PTSL</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/13125/water-cooler-pcyes-sangue-frio-2-120mm-intel-amd-psf2120h33ptsl" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav13125" class="btn tbt_avicon" href="/produto/13125/water-cooler-pcyes-sangue-frio-2-120mm-intel-amd-psf2120h33ptsl" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao13125">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o13125"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12877/placa-mae-asus-rog-crosshair-viii-formula-wi-fi-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe Asus ROG Crosshair VIII Formula (Wi-Fi), Chipset X570, AMD AM4, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-asus-rog-crosshair-viii-formula-wi-fi-chipset-x570-amd-am4-atx-ddr4_90612.jpg" alt="Placa Mãe Asus ROG Crosshair VIII Formula (Wi-Fi), Chipset X570, AMD AM4, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12877/placa-mae-asus-rog-crosshair-viii-formula-wi-fi-chipset-x570-amd-am4-atx-ddr4" title="Placa Mãe Asus ROG Crosshair VIII Formula (Wi-Fi), Chipset X570, AMD AM4, ATX, DDR4"><h2><strong>Placa Mãe Asus ROG Crosshair VIII Formula (Wi-Fi), Chipset X570, AMD AM4, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12877/placa-mae-asus-rog-crosshair-viii-formula-wi-fi-chipset-x570-amd-am4-atx-ddr4" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12877" class="btn tbt_avicon" href="/produto/12877/placa-mae-asus-rog-crosshair-viii-formula-wi-fi-chipset-x570-amd-am4-atx-ddr4" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12877">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12877"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12886/teclado-mecanico-gamer-hp-gk100-led-rainbow-black" title="Teclado Mecânico Gamer HP GK100, Led Rainbow, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-mecanico-gamer-hp-gk100-led-rainbow-black_90634.jpg" alt="Teclado Mecânico Gamer HP GK100, Led Rainbow, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12886/teclado-mecanico-gamer-hp-gk100-led-rainbow-black" title="Teclado Mecânico Gamer HP GK100, Led Rainbow, Black"><h2><strong>Teclado Mecânico Gamer HP GK100, Led Rainbow, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12886/teclado-mecanico-gamer-hp-gk100-led-rainbow-black" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12886" class="btn tbt_avicon" href="/produto/12886/teclado-mecanico-gamer-hp-gk100-led-rainbow-black" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12886">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12886"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12337/headset-gamer-marvo-hg9049-71-rgb-7-cores" title="Headset Gamer Marvo HG9049 7.1, RGB 7 Cores">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-marvo-hg9049-71-rgb-7-cores_84646.png" alt="Headset Gamer Marvo HG9049 7.1, RGB 7 Cores" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12337/headset-gamer-marvo-hg9049-71-rgb-7-cores" title="Headset Gamer Marvo HG9049 7.1, RGB 7 Cores"><h2><strong>Headset Gamer Marvo HG9049 7.1, RGB 7 Cores</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (2)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12337/headset-gamer-marvo-hg9049-71-rgb-7-cores" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12337" class="btn tbt_avicon" href="/produto/12337/headset-gamer-marvo-hg9049-71-rgb-7-cores" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12337">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12337"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12339/headset-gamer-marvo-hg9056-71-led-rgb" title="Headset Gamer Marvo HG9056 7.1, LED RGB">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-marvo-hg9056-71-led-rgb_84656.jpg" alt="Headset Gamer Marvo HG9056 7.1, LED RGB" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12339/headset-gamer-marvo-hg9056-71-led-rgb" title="Headset Gamer Marvo HG9056 7.1, LED RGB"><h2><strong>Headset Gamer Marvo HG9056 7.1, LED RGB</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.3" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_3.png"> (2)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12339/headset-gamer-marvo-hg9056-71-led-rgb" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12339" class="btn tbt_avicon" href="/produto/12339/headset-gamer-marvo-hg9056-71-led-rgb" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao12339">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o12339"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11677/placa-mae-asrock-fatal1ty-x470-gaming-k4-chipset-x470-amd-am4-atx-ddr4" title="Placa Mãe ASRock Fatal1ty X470 Gaming K4, Chipset X470, AMD AM4, ATX, DDR4">
                                        <img src="https://img.terabyteshop.com.br/produto/p/placa-mae-asrock-fatal1ty-x470-gaming-k4-chipset-x470-amd-am4-atx-ddr4_76596.jpg" alt="Placa Mãe ASRock Fatal1ty X470 Gaming K4, Chipset X470, AMD AM4, ATX, DDR4" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11677/placa-mae-asrock-fatal1ty-x470-gaming-k4-chipset-x470-amd-am4-atx-ddr4" title="Placa Mãe ASRock Fatal1ty X470 Gaming K4, Chipset X470, AMD AM4, ATX, DDR4"><h2><strong>Placa Mãe ASRock Fatal1ty X470 Gaming K4, Chipset X470, AMD AM4, ATX, DDR4</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4.png"> (1)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/11677/placa-mae-asrock-fatal1ty-x470-gaming-k4-chipset-x470-amd-am4-atx-ddr4" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav11677" class="btn tbt_avicon" href="/produto/11677/placa-mae-asrock-fatal1ty-x470-gaming-k4-chipset-x470-amd-am4-atx-ddr4" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao11677">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o11677"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10044/water-cooler-cooler-master-masterliquid-ml120r-rgb-mlx-d12m-a20pc-r1" title="Water Cooler Cooler Master MasterLiquid ML120R RGB 120mm, Intel-AMD, MLX-D12M-A20PC-R1">
                                        <img src="https://img.terabyteshop.com.br/produto/p/water-cooler-cooler-master-masterliquid-ml120r-rgb-mlx-d12m-a20pc-r1_60753.jpg" alt="Water Cooler Cooler Master MasterLiquid ML120R RGB 120mm, Intel-AMD, MLX-D12M-A20PC-R1" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10044/water-cooler-cooler-master-masterliquid-ml120r-rgb-mlx-d12m-a20pc-r1" title="Water Cooler Cooler Master MasterLiquid ML120R RGB 120mm, Intel-AMD, MLX-D12M-A20PC-R1"><h2><strong>Water Cooler Cooler Master MasterLiquid ML120R RGB 120mm, Intel-AMD, MLX-D12M-A20PC-R1</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.7" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_7.png"> (3)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/10044/water-cooler-cooler-master-masterliquid-ml120r-rgb-mlx-d12m-a20pc-r1" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav10044" class="btn tbt_avicon" href="/produto/10044/water-cooler-cooler-master-masterliquid-ml120r-rgb-mlx-d12m-a20pc-r1" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao10044">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o10044"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9122/ssd-hp-s700-120gb-2dp97aaabc-sata-iii-leitura-550mbs-gravacao-480mbs" title="SSD HP S700 120GB, Sata III, Leitura 550MBs Gravação 480MBs, 2DP97AA#ABL">
                                        <img src="https://img.terabyteshop.com.br/produto/p/ssd-hp-s700-120gb-2dp97aaabc-sata-iii-leitura-550mbs-gravacao-480mbs_52260.jpg" alt="SSD HP S700 120GB, Sata III, Leitura 550MBs Gravação 480MBs, 2DP97AA#ABL" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9122/ssd-hp-s700-120gb-2dp97aaabc-sata-iii-leitura-550mbs-gravacao-480mbs" title="SSD HP S700 120GB, Sata III, Leitura 550MBs Gravação 480MBs, 2DP97AA#ABL"><h2><strong>SSD HP S700 120GB, Sata III, Leitura 550MBs Gravação 480MBs, 2DP97AA#ABL</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/9122/ssd-hp-s700-120gb-2dp97aaabc-sata-iii-leitura-550mbs-gravacao-480mbs" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav9122" class="btn tbt_avicon" href="/produto/9122/ssd-hp-s700-120gb-2dp97aaabc-sata-iii-leitura-550mbs-gravacao-480mbs" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                    <div class="col-xs-12 col-sm-12 col-md-12 promout">
                                        <div class="Promocao9122">
                                            <div class="box-1">
                                                <p><i class="fa fa-tag fa-rotate-90" aria-hidden="true"></i> OFERTA TERMINA EM</p>
                                            </div>
                                            <div class="box-2">
                                                <p id="o9122"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13055/headset-gamer-astro-a10-whitegreen-939-001854" title="Headset Gamer Astro A10, White/Green, 939-001854">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-astro-a10-whitegreen-939-001854_92128.png" alt="Headset Gamer Astro A10, White/Green, 939-001854" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13055/headset-gamer-astro-a10-whitegreen-939-001854" title="Headset Gamer Astro A10, White/Green, 939-001854"><h2><strong>Headset Gamer Astro A10, White/Green, 939-001854</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/13055/headset-gamer-astro-a10-whitegreen-939-001854" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav13055" class="btn tbt_avicon" href="/produto/13055/headset-gamer-astro-a10-whitegreen-939-001854" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/13041/headset-gamer-hp-h300-21-p2-35mm-usb-led-blue-black" title="Headset Gamer HP H300 2.1, P2 3.5mm + USB, Led Blue, Black ">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-hp-h300-21-p2-35mm-usb-led-blue-black_91878.jpg" alt="Headset Gamer HP H300 2.1, P2 3.5mm + USB, Led Blue, Black " />

                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/13041/headset-gamer-hp-h300-21-p2-35mm-usb-led-blue-black" title="Headset Gamer HP H300 2.1, P2 3.5mm + USB, Led Blue, Black "><h2><strong>Headset Gamer HP H300 2.1, P2 3.5mm + USB, Led Blue, Black </strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/13041/headset-gamer-hp-h300-21-p2-35mm-usb-led-blue-black" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav13041" class="btn tbt_avicon" href="/produto/13041/headset-gamer-hp-h300-21-p2-35mm-usb-led-blue-black" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12516/headset-gamer-sades-pc-spirits-ps4-vr-xbox-one-nintendo-switch-stereo-black" title="Headset Gamer Sades Pc Spirits, PS4, VR, Xbox one, Nintendo Switch, Stereo, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-sades-pc-spirits-ps4-vr-xbox-one-nintendo-switch-stereo-black_87058.png" alt="Headset Gamer Sades Pc Spirits, PS4, VR, Xbox one, Nintendo Switch, Stereo, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12516/headset-gamer-sades-pc-spirits-ps4-vr-xbox-one-nintendo-switch-stereo-black" title="Headset Gamer Sades Pc Spirits, PS4, VR, Xbox one, Nintendo Switch, Stereo, Black"><h2><strong>Headset Gamer Sades Pc Spirits, PS4, VR, Xbox one, Nintendo Switch, Stereo, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12516/headset-gamer-sades-pc-spirits-ps4-vr-xbox-one-nintendo-switch-stereo-black" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12516" class="btn tbt_avicon" href="/produto/12516/headset-gamer-sades-pc-spirits-ps4-vr-xbox-one-nintendo-switch-stereo-black" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12523/headset-gamer-sades-sa-923-hammer-71-surround-blackblue-sa-923" title="Headset Gamer Sades Sa-923 Hammer, 7.1 Surround, Black/Blue, Sa-923">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-sades-sa-923-hammer-71-surround-blackblue-sa-923_87224.png" alt="Headset Gamer Sades Sa-923 Hammer, 7.1 Surround, Black/Blue, Sa-923" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12523/headset-gamer-sades-sa-923-hammer-71-surround-blackblue-sa-923" title="Headset Gamer Sades Sa-923 Hammer, 7.1 Surround, Black/Blue, Sa-923"><h2><strong>Headset Gamer Sades Sa-923 Hammer, 7.1 Surround, Black/Blue, Sa-923</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12523/headset-gamer-sades-sa-923-hammer-71-surround-blackblue-sa-923" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12523" class="btn tbt_avicon" href="/produto/12523/headset-gamer-sades-sa-923-hammer-71-surround-blackblue-sa-923" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12525/headset-gamer-sades-sa-904-locust-plus-rgb-71-surround-blackblue-sa-904" title="Headset Gamer Sades Sa-904 Locust Plus, RGB, 7.1 Surround, Black/Blue, Sa-904">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-sades-sa-904-locust-plus-rgb-71-surround-blackblue-sa-904_87230.png" alt="Headset Gamer Sades Sa-904 Locust Plus, RGB, 7.1 Surround, Black/Blue, Sa-904" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12525/headset-gamer-sades-sa-904-locust-plus-rgb-71-surround-blackblue-sa-904" title="Headset Gamer Sades Sa-904 Locust Plus, RGB, 7.1 Surround, Black/Blue, Sa-904"><h2><strong>Headset Gamer Sades Sa-904 Locust Plus, RGB, 7.1 Surround, Black/Blue, Sa-904</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12525/headset-gamer-sades-sa-904-locust-plus-rgb-71-surround-blackblue-sa-904" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12525" class="btn tbt_avicon" href="/produto/12525/headset-gamer-sades-sa-904-locust-plus-rgb-71-surround-blackblue-sa-904" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12482/headset-gamer-kwg-taurus-e1-rgb-usb-black" title="Headset Gamer KWG Taurus E1 RGB, USB, Black">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-kwg-taurus-e1-rgb-usb-black_86511.jpg" alt="Headset Gamer KWG Taurus E1 RGB, USB, Black" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12482/headset-gamer-kwg-taurus-e1-rgb-usb-black" title="Headset Gamer KWG Taurus E1 RGB, USB, Black"><h2><strong>Headset Gamer KWG Taurus E1 RGB, USB, Black</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (2)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12482/headset-gamer-kwg-taurus-e1-rgb-usb-black" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12482" class="btn tbt_avicon" href="/produto/12482/headset-gamer-kwg-taurus-e1-rgb-usb-black" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12455/mouse-gamer-marvo-m506-wired-4000-dpi-7-botoes-led-green" title="Mouse Gamer Marvo M506 Wired, 4000 DPI, 7 Botões, Led Green">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-gamer-marvo-m506-wired-4000-dpi-7-botoes-led-green_86166.jpg" alt="Mouse Gamer Marvo M506 Wired, 4000 DPI, 7 Botões, Led Green" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12455/mouse-gamer-marvo-m506-wired-4000-dpi-7-botoes-led-green" title="Mouse Gamer Marvo M506 Wired, 4000 DPI, 7 Botões, Led Green"><h2><strong>Mouse Gamer Marvo M506 Wired, 4000 DPI, 7 Botões, Led Green</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12455/mouse-gamer-marvo-m506-wired-4000-dpi-7-botoes-led-green" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12455" class="btn tbt_avicon" href="/produto/12455/mouse-gamer-marvo-m506-wired-4000-dpi-7-botoes-led-green" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12336/headset-gamer-marvo-scorpion-hg8929-pretovermelho" title="Headset Gamer Marvo Scorpion HG8929 Preto/Vermelho">
                                        <img src="https://img.terabyteshop.com.br/produto/p/headset-gamer-marvo-scorpion-hg8929-pretovermelho_84627.png" alt="Headset Gamer Marvo Scorpion HG8929 Preto/Vermelho" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12336/headset-gamer-marvo-scorpion-hg8929-pretovermelho" title="Headset Gamer Marvo Scorpion HG8929 Preto/Vermelho"><h2><strong>Headset Gamer Marvo Scorpion HG8929 Preto/Vermelho</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12336/headset-gamer-marvo-scorpion-hg8929-pretovermelho" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12336" class="btn tbt_avicon" href="/produto/12336/headset-gamer-marvo-scorpion-hg8929-pretovermelho" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/12309/mouse-marvo-gamer-g982-wired-6-botoes-5000-dpi-led-rgb-7-cores" title="Mouse Marvo Gamer G982 Wired, 6 Botões, 5000 DPI, LED RGB 7 Cores">
                                        <img src="https://img.terabyteshop.com.br/produto/p/mouse-marvo-gamer-g982-wired-6-botoes-5000-dpi-led-rgb-7-cores_84373.png" alt="Mouse Marvo Gamer G982 Wired, 6 Botões, 5000 DPI, LED RGB 7 Cores" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/12309/mouse-marvo-gamer-g982-wired-6-botoes-5000-dpi-led-rgb-7-cores" title="Mouse Marvo Gamer G982 Wired, 6 Botões, 5000 DPI, LED RGB 7 Cores"><h2><strong>Mouse Marvo Gamer G982 Wired, 6 Botões, 5000 DPI, LED RGB 7 Cores</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/12309/mouse-marvo-gamer-g982-wired-6-botoes-5000-dpi-led-rgb-7-cores" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav12309" class="btn tbt_avicon" href="/produto/12309/mouse-marvo-gamer-g982-wired-6-botoes-5000-dpi-led-rgb-7-cores" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/11985/gabinete-gamer-cougar-gemini-s-silver-mid-tower-com-1-fans-vidro-temperado-black-s-fonte" title="Gabinete Gamer Cougar Gemini S Silver, Mid Tower, Com 1 Fans, Vidro Temperado, Black, S-Fonte">
                                        <img src="https://img.terabyteshop.com.br/produto/p/gabinete-gamer-cougar-gemini-s-silver-mid-tower-com-1-fans-vidro-temperado-black-s-fonte_81052.jpg" alt="Gabinete Gamer Cougar Gemini S Silver, Mid Tower, Com 1 Fans, Vidro Temperado, Black, S-Fonte" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/11985/gabinete-gamer-cougar-gemini-s-silver-mid-tower-com-1-fans-vidro-temperado-black-s-fonte" title="Gabinete Gamer Cougar Gemini S Silver, Mid Tower, Com 1 Fans, Vidro Temperado, Black, S-Fonte"><h2><strong>Gabinete Gamer Cougar Gemini S Silver, Mid Tower, Com 1 Fans, Vidro Temperado, Black, S-Fonte</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.3" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_3.png"> (3)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/11985/gabinete-gamer-cougar-gemini-s-silver-mid-tower-com-1-fans-vidro-temperado-black-s-fonte" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav11985" class="btn tbt_avicon" href="/produto/11985/gabinete-gamer-cougar-gemini-s-silver-mid-tower-com-1-fans-vidro-temperado-black-s-fonte" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10573/cooler-master-hyper-212-rgb-black-edition-rr-212s-20pc-r1-intelamd" title="Cooler para Processador Cooler Master Hyper 212 RGB 120mm, Intel-AMD, RR-212S-20PC-R1">
                                        <img src="https://img.terabyteshop.com.br/produto/p/cooler-master-hyper-212-rgb-black-edition-rr-212s-20pc-r1-intelamd_66283.jpg" alt="Cooler para Processador Cooler Master Hyper 212 RGB 120mm, Intel-AMD, RR-212S-20PC-R1" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10573/cooler-master-hyper-212-rgb-black-edition-rr-212s-20pc-r1-intelamd" title="Cooler para Processador Cooler Master Hyper 212 RGB 120mm, Intel-AMD, RR-212S-20PC-R1"><h2><strong>Cooler para Processador Cooler Master Hyper 212 RGB 120mm, Intel-AMD, RR-212S-20PC-R1</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (11)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/10573/cooler-master-hyper-212-rgb-black-edition-rr-212s-20pc-r1-intelamd" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav10573" class="btn tbt_avicon" href="/produto/10573/cooler-master-hyper-212-rgb-black-edition-rr-212s-20pc-r1-intelamd" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10479/hd-externo-portatil-toshiba-canvio-advance-2tb-hdtc920xk3aa-usb-30-preto" title="HD Externo Portátil Toshiba Canvio Advance 2TB HDTC920XK3AA USB 3.0 Preto">
                                        <img src="https://img.terabyteshop.com.br/produto/p/hd-externo-portatil-toshiba-canvio-advance-2tb-hdtc920xk3aa-usb-30-preto_65396.jpg" alt="HD Externo Portátil Toshiba Canvio Advance 2TB HDTC920XK3AA USB 3.0 Preto" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10479/hd-externo-portatil-toshiba-canvio-advance-2tb-hdtc920xk3aa-usb-30-preto" title="HD Externo Portátil Toshiba Canvio Advance 2TB HDTC920XK3AA USB 3.0 Preto"><h2><strong>HD Externo Portátil Toshiba Canvio Advance 2TB HDTC920XK3AA USB 3.0 Preto</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (1)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/10479/hd-externo-portatil-toshiba-canvio-advance-2tb-hdtc920xk3aa-usb-30-preto" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav10479" class="btn tbt_avicon" href="/produto/10479/hd-externo-portatil-toshiba-canvio-advance-2tb-hdtc920xk3aa-usb-30-preto" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10276/teclado-mecanico-motospeed-ck95-fmstc0030vem-led-azul-switch-outemu-red" title="Teclado Mecânico Gamer MotoSpeed CK95, Led Blue, Switch Outemu Red, FMSTC0030VEM">
                                        <img src="https://img.terabyteshop.com.br/produto/p/teclado-mecanico-motospeed-ck95-fmstc0030vem-led-azul-switch-outemu-red_63073.jpg" alt="Teclado Mecânico Gamer MotoSpeed CK95, Led Blue, Switch Outemu Red, FMSTC0030VEM" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10276/teclado-mecanico-motospeed-ck95-fmstc0030vem-led-azul-switch-outemu-red" title="Teclado Mecânico Gamer MotoSpeed CK95, Led Blue, Switch Outemu Red, FMSTC0030VEM"><h2><strong>Teclado Mecânico Gamer MotoSpeed CK95, Led Blue, Switch Outemu Red, FMSTC0030VEM</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/10276/teclado-mecanico-motospeed-ck95-fmstc0030vem-led-azul-switch-outemu-red" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav10276" class="btn tbt_avicon" href="/produto/10276/teclado-mecanico-motospeed-ck95-fmstc0030vem-led-azul-switch-outemu-red" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10278/combo-gamer-teclado-e-mouse-motospeed-ck888-teclado-mecanico-switch-outemu-azul-e-mouse-2400dpi" title="Combo Gamer Teclado e Mouse Motospeed CK888 Teclado Mecânico Switch Outemu Azul e Mouse 2400DPI">
                                        <img src="https://img.terabyteshop.com.br/produto/p/combo-gamer-teclado-e-mouse-motospeed-ck888-teclado-mecanico-switch-outemu-azul-e-mouse-2400dpi_63082.jpg" alt="Combo Gamer Teclado e Mouse Motospeed CK888 Teclado Mecânico Switch Outemu Azul e Mouse 2400DPI" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10278/combo-gamer-teclado-e-mouse-motospeed-ck888-teclado-mecanico-switch-outemu-azul-e-mouse-2400dpi" title="Combo Gamer Teclado e Mouse Motospeed CK888 Teclado Mecânico Switch Outemu Azul e Mouse 2400DPI"><h2><strong>Combo Gamer Teclado e Mouse Motospeed CK888 Teclado Mecânico Switch Outemu Azul e Mouse 2400DPI</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 4.5" src="https://www.terabyteshop.com.br/img/rating/stars/rating-4_5.png"> (1)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/10278/combo-gamer-teclado-e-mouse-motospeed-ck888-teclado-mecanico-switch-outemu-azul-e-mouse-2400dpi" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav10278" class="btn tbt_avicon" href="/produto/10278/combo-gamer-teclado-e-mouse-motospeed-ck888-teclado-mecanico-switch-outemu-azul-e-mouse-2400dpi" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/10043/water-cooler-cooler-master-masterliquid-ml240l-rgb-mlw-d24m-a20pc-r1" title="Water Cooler Cooler Master Masterliquid ML240L, RGB 240mm, Intel-AMD, MLW-D24M-A20PC-R1">
                                        <img src="https://img.terabyteshop.com.br/produto/p/water-cooler-cooler-master-masterliquid-ml240l-rgb-mlw-d24m-a20pc-r1_60742.jpg" alt="Water Cooler Cooler Master Masterliquid ML240L, RGB 240mm, Intel-AMD, MLW-D24M-A20PC-R1" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/10043/water-cooler-cooler-master-masterliquid-ml240l-rgb-mlw-d24m-a20pc-r1" title="Water Cooler Cooler Master Masterliquid ML240L, RGB 240mm, Intel-AMD, MLW-D24M-A20PC-R1"><h2><strong>Water Cooler Cooler Master Masterliquid ML240L, RGB 240mm, Intel-AMD, MLW-D24M-A20PC-R1</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 5.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-5.png"> (5)</span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/10043/water-cooler-cooler-master-masterliquid-ml240l-rgb-mlw-d24m-a20pc-r1" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav10043" class="btn tbt_avicon" href="/produto/10043/water-cooler-cooler-master-masterliquid-ml240l-rgb-mlw-d24m-a20pc-r1" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pbox col-xs-12 col-sm-6 col-md-3">
                            <div class="commerce_columns_item_inner">
                                <div class="commerce_columns_item_image text-center">
                                    <a class="commerce_columns_item_image" href="/produto/9818/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-azul-hdtc920xl3aa" title="HD Externo Portátil Toshiba Canvio Advance 2TB, USB 3.0, Azul, HDTC920XL3AA">
                                        <img src="https://img.terabyteshop.com.br/produto/p/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-azul-hdtc920xl3aa_90132.jpg" alt="HD Externo Portátil Toshiba Canvio Advance 2TB, USB 3.0, Azul, HDTC920XL3AA" />
                                    </a>
                                </div>
                                <div class="promout-etiquetas"></div>
                                <div class="commerce_columns_item_caption">
                                    <a class="prod-name" href="/produto/9818/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-azul-hdtc920xl3aa" title="HD Externo Portátil Toshiba Canvio Advance 2TB, USB 3.0, Azul, HDTC920XL3AA"><h2><strong>HD Externo Portátil Toshiba Canvio Advance 2TB, USB 3.0, Azul, HDTC920XL3AA</strong></h2></a>
                                </div>
                                <div class="commerce_columns_item_info">
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <span class="qtdvotes"><img alt="Avaliação: 0.0" src="https://www.terabyteshop.com.br/img/rating/stars/rating-0.png"></span>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-12">
                                        <div class="tbt_esgotado">Todos vendidos <i class="glyphicon glyphicon-minus-sign"></i></div>
                                        <div class="btn-group tbt_group" role="group" aria-label="Comprar">
                                            <a rule="button" class="btn tbt_avise" href="/produto/9818/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-azul-hdtc920xl3aa" aria-label="avise-me">Avise-me</a>
                                            <a rule="button" id="bav9818" class="btn tbt_avicon" href="/produto/9818/hd-externo-portatil-toshiba-canvio-advance-2tb-usb-30-azul-hdtc920xl3aa" aria-label="Avise-me"><span class="glyphicon glyphicon-envelope"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="cpdmore2"></div>
                    </div>
                    <div class="clear"></div>
                    <div class="footer-content">
                        <a id="pdmore" class="arrow-down btn btn-pdmore" href="/promocoes" data-pg="2" data-manufacturer="0" data-order="ordem_asc" role="button">
                            <span class="hidden-xs hidden-sm">CLIQUE PARA</span> VER MAIS PRODUTOS
                        </a>
                    </div>
                    <div class="clear"></div>
                </div>
            </div>
            <script type="09757efb8e7186b3feb56986-text/javascript">
                var zx_category = "promocoes";
            </script>
        </departamento>
        <script data-cfasync="true" src="https://www.terabyteshop.com.br/assets/jquery/jquery-2.2.4.min.js" type="09757efb8e7186b3feb56986-text/javascript"></script>
        <script data-cfasync="true" src="https://www.terabyteshop.com.br/assets/jquery/jquery-migrate-1.2.1.min.js" defer type="09757efb8e7186b3feb56986-text/javascript"></script>
        <script data-cfasync="true" src="https://www.terabyteshop.com.br/js/bootstrap.min.js" type="09757efb8e7186b3feb56986-text/javascript"></script>
        <script data-cfasync="true" src="https://www.terabyteshop.com.br/assets/mask/jquery.mask.min.js" type="09757efb8e7186b3feb56986-text/javascript"></script>
        <script data-cfasync="true" src="https://www.terabyteshop.com.br/js/app.min.js?1588128295" defer type="09757efb8e7186b3feb56986-text/javascript"></script>
        <script data-cfasync="true" src="https://www.terabyteshop.com.br/js/main.min.js" type="09757efb8e7186b3feb56986-text/javascript"></script>
        <script data-cfasync="true" src="https://www.terabyteshop.com.br/js/all.min.js" type="09757efb8e7186b3feb56986-text/javascript"></script>
        <script type="09757efb8e7186b3feb56986-text/javascript">
            setTimeout(function() {
                var ca = document.getElementById('cookieAlert');
                if (navigator.cookieEnabled == false) {
                    ca.className = ca.className.replace(/hidden/, '');
                }
            }, 0);
        </script>
        <script type="09757efb8e7186b3feb56986-text/javascript">
            setTimeout(function() {
                $('#o12949').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12582').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12490').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9779').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9111').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o6701').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o6708').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o13243').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o13126').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o13077').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o13063').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12928').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12479').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12462').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12442').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12222').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12175').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12121').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12090').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o11793').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o11697').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o11698').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o11637').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o11638').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o10315').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9959').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9803').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9744').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9465').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9110').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o8698').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o8567').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o8560').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12014').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o13177').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o13125').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12877').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12886').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12337').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o12339').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o11677').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o10044').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
            setTimeout(function() {
                $('#o9122').countdown('2020/05/04 09:00:59')
                    .on('update.countdown', function(event) {
                        var format = '%H:%M:%S';
                        if (event.offset.days > 0) {
                            format = '%-D dia%!D ' + format;
                        }
                        $(this).html(event.strftime(format));
                    })
                    .on('finish.countdown', function(event) {
                        $(this).html('Finalizou');
                    });
            }, 300);
        </script>
        <script type="09757efb8e7186b3feb56986-text/javascript">
            var google_tag_params = {
                ecomm_pagetype: "category",
            };
        </script>
    </div>
    <div id="footer">
        <div class="Fsection">
            <div class="Farticle FooterNewsletter hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3 col-md-3 col-lg-3 hidden-xs">
                            <h3>Não Perca!</h3>
                        </div>
                        <div class="col-xs-12 col-md-3 hidden-sm">
                            <p>Promoções e
                                <br />Dicas Exclusivas...</p>
                        </div>
                        <div class="col-xs-12 col-md-6 nopadding">
                            <form id="frmnews" method="POST">
                                <div class="input-group">
                                    <input id="news-email" type="email" class="form-control" placeholder="DIGITE O SEU E-MAIL">
                                    <span class="input-group-btn">
<button class="F-bt-news bt-news bt-newsb glyphicons seta" type="submit"><span>Eu quero</span></button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Farticle FooterSubMenu">

                <div class="container">
                    <div class="row Fselos">
                        <div class="col-xs-12 col-md-7">
                            <h5>Formas de Pagamento</h5>
                            <img class="footpgto i2cartoes" alt="eRede 2 Cartões" src="https://www.terabyteshop.com.br/img/cartoes/fpr_2cartoes.png"><img class="footpgto iboleto" alt="Boleto - Payu" src="https://www.terabyteshop.com.br/img/cartoes/fpr_boleto.png"><img class="footpgto ipayu" alt="PayU" src="https://www.terabyteshop.com.br/img/cartoes/fpr_payu.png">
                        </div>
                        <div class="col-xs-12 col-md-5 seg_r">
                            <h5>Segurança</h5>
                            <ul>
                                <li class="col-xs-3">
                                    <a target="_blank" rel="noopener" href="https://www.reclameaqui.com.br/empresa/terabyte-shop/">
                                        <img class="footseg" alt="Certificado - RA 1000" title="Certificado - RA 1000" src="/img/selos/ra-1000.png">
                                    </a>
                                </li>
                                <li class="col-xs-3">
                                    <a target="_blank" rel="noopener" href="https://www.compreeconfie.com.br/seloapp/loja/selo/ad25f62a-0df4-4b3e-b971-727fd4dc3936">
                                        <img class="footseg" alt="Empresa Autorizada - Compre & Confie" title="Empresa Autorizada - Compre & Confie" src="/img/selos/compre-confie.png">
                                    </a>
                                    <li>
                                        <li class="col-xs-3">
                                            <a target="_blank" rel="noopener" href="https://transparencyreport.google.com/safe-browsing/search?url=terabyteshop.com.br&hl=pt-PT">
                                                <img class="footseg" alt="Google - Site Seguro" title="Google - Site Seguro" src="/img/selos/google-site-seguro.png">
                                            </a>
                                        </li>
                                        <li class="col-xs-3">
                                            <a target="_blank" rel="noopener" href="https://www.ebit.com.br/terabyteshop">
                                                <img class="footseg" alt="Ebit Diamante - A mais alta avaliação" title="Ebit Diamante - A mais alta avaliação" src="/img/selos/ebit-diamante.png">
                                            </a>
                                        </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="container FSmenu">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <h5>Institucional</h5>
                            <ul>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/quem-somos">Quem somos</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/termos-e-condicoes-gerais-de-venda-de-produtos">Termos e Condições de Venda</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/politica-de-vendas-trocas-e-devolucoes">Política de Troca e Devoluções</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/politica-de-privacidade-compra-segura">Política de Segurança e Privacidade</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/premios">Prêmios TerabyteShop</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/videos">Vídeos</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <h5>Dúvidas</h5>
                            <ul>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/como-comprar">Como comprar</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/prazos-e-servicos-de-entrega">Prazos e entregas</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/formas-de-pagamento-aceitas">Formas de Pagamento</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/confira-nossas-referencias">Segurança de compra</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <h5>Cliente</h5>
                            <ul>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/Central.obj">Minha conta</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/Central/MeusPedidos.obj">Meus pedidos</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/Central/Ticket.obj">Meus tickets</a></li>
                            </ul>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                            <h5>Ajuda</h5>
                            <ul>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br//site/videos-tutoriais">Video Tutoriais</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/manuseio">Manuseio do Produto</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/recomendacao-premiada">Recomendação Premiada</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/promocao-amd">Promoções AMD</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/site/termos-e-condicoes-nvidia-e-cod-mw">NVIDIA E COD:MW - Termos e Condições</a></li>
                                <li><i class="glyphicon glyphicon-chevron-right hidden-xs"></i><a target="_self" href="https://www.terabyteshop.com.br/FaleConosco.obj">Fale Conosco</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <div class="Farticle FooterSocial">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 Fsocial text-center">
                            <div>SIGA-NOS</div>
                            <ul class="list-inline">
                                <li><a href="https://pt-br.facebook.com/Terabyteshop" target="_Blank" rel="noopener"><span class="laranja fa fa-facebook" title="Facebook TerabyteShop"></span></a></li>
                                <li><a href="https://twitter.com/terabyteshop" target="_Blank" rel="noopener"><span class="laranja fa fa-twitter" title="Twitter TerabyteShop"></span></a></li>
                                <li><a href="https://www.youtube.com/user/Terabyteshop" target="_Blank" rel="noopener"><span class="laranja fa fa-youtube-play" title="Youtube TerabyteShop"></span></a></li>
                                <li><a href="https://www.instagram.com/terabyteshop/" target="_Blank" rel="noopener"><span class="laranja fa fa-instagram" title="Instagram TerabyteShop"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <ul>
                            <li class="hidden-xs hidden-sm"><img src="/templates/img/footer-logo.png" alt="TeraByteShop" /></li>
                            <li class="Cinza">TERABYTE ATACADO E VAREJO DE PRODUTOS DE INFORMATICA LTDA</li>
                            <li class="Cinza">CNPJ: 07.993.973/0001-18 | Curitiba-PR</li>
                        </ul>
                        <ul class="infoAten">
                            <li>ATENDIMENTO
                                <br> De segunda a sexta das 8:30 às 12H / 13H às 18H</li>
                            <li class="Cinza">SOMOS E-COMMERCE - NÃO TEMOS ATENDIMENTO LOCAL</li>
                        </ul>
                        <ul>
                            <li><i class="fa fa-desktop Cinza" style="font-size: 15px;"></i></li>
                            <li><img src="/templates/img/Powered-by.png" alt="Powered By"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        <div class="general-message hidden">
            <h3>Notícias <i class="glyphicon glyphicon-remove"></i></h3>
            <p>Conheça o <a href="http://blog.terabyteshop.com.br" target="_blank">Blog da TeraByte</a>. Notícias exclusivas, vídeos, reviews e um montão de novidades para você ficar por dentro de tudo no mundo dos games. <a href="http://blog.terabyteshop.com.br" target="_blank">Acesse!</a></p>
        </div>
        <button id="nav_up" title="Voltar ao topo" aria-label="topo"><i class="glyphicon glyphicon-menu-up"></i></button>

        <script type="09757efb8e7186b3feb56986-text/javascript">
            /* <![CDATA[ */
            var google_conversion_id = 968622452;
            var google_custom_params = window.google_tag_params;
            var google_remarketing_only = true;
            /* ]]> */
        </script>
        <script type="09757efb8e7186b3feb56986-text/javascript" src='//www.googleadservices.com/pagead/conversion.js'></script>
        <noscript>
            <div style='display:inline;'>
                <img height="1" width="1" style="border-style:none;" alt="Google Ads" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/968622452/?value=0&amp;guid=ON&amp;script=0" />
            </div>
        </noscript>
    </div>
    <div class="barNotCookie alert half full alert-dismissible show hidden" role="alert" id="cookieAlert">
        <div class="barCookie">
            <i class="fa fa-cog" aria-hidden="true"></i> Os cookies <span class="hidden-xs">no seu navegador</span> estão bloqueados...
            <button class="btAtivar" data-toggle="modal" data-target="#mdcookies">Saiba mais</button>
            <button class="btfchar" data-dismiss="alert"><i class="fa fa-times" aria-hidden="true"></i></button>
        </div>
    </div>

    <div class="mdcookies modal fade" id="mdcookies" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">O QUE SÃO COOKIES?</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>Um cookie é um pequeno arquivo ou dispositivo que é enviado ao PC do Usuário (ou qualquer outro dispositivo com acesso à Internet) utilizado para armazenar e recuperar dados de Usuários na navegação do Site.</p>
                    <p>Os cookies da Terabyteshop são usados para melhorar a experiência do Usuário, permitindo navegar confortavelmente pelo Site, interagir com sites de terceiros, fornecer funcionalidades e serviços adicionais aos usuários do Site e analisar o uso do Site com mais precisão. Por exemplo, o site pode colocar um cookie em seu navegador para evitar que o usuário tenha que lembrar e digitar sua senha mais de uma vez em sua visita ao site.</p>
                    <p>Acesse as configurações do seu navegador e desbloqueie os cookies.</p>
                </div>
            </div>
        </div>
    </div>

    <script type="09757efb8e7186b3feb56986-text/javascript">
        window.ChatraSetup = {
            colors: {
                buttonText: '#f0f0f0',
                /* chat button text color */
                buttonBg: '#FF5800' /* chat button background color */
            }
        };

        (function(d, w, c) {
            w.ChatraID = 'esnaDpoAePgEisaBT';
            var s = d.createElement('script');
            w[c] = w[c] || function() {
                (w[c].q = w[c].q || []).push(arguments);
            };
            s.async = true;
            s.src = 'https://call.chatra.io/chatra.js';
            if (d.head) d.head.appendChild(s);
        })(document, window, 'Chatra');
    </script>

    <script src="https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js" data-cf-settings="09757efb8e7186b3feb56986-|49" defer=""></script>
</body>

</html>`
jest.mock("axios");

let checker: TerabyteshopChecker;


describe('Terabyteshop tests',
    () => {

        beforeEach(() => checker = new TerabyteshopChecker(TerabyteshopDefaultConfig))

        it('should be true',
            async () => {

                //@ts-ignore
                axios.get.mockImplementation(async () => ({ data: responseSample }));
                const products = await checker.fetchProducts();

                expect(products.length).toEqual(25);
                expect(products.every(product => product.discount > 0)).toBeTruthy();
            }
        );
    }
)
