export interface Produto {
    id: string;
    nome: string;
    detalhes: string[];
    img: string;
    preco: number;
    categoria: 'cpu' | 'gpu' | 'memoria' | 'hd' | 'fonte';

}

export const produtos: Produto[] = [
    {
        id: '2c7ebc79-bec6-45d2-83a3-e1230da0a138',
        nome: 'Memoria G-skill Trident Z5 Rgb Ddr5 32gb (2 X 16gb) 6000mhz',
        detalhes: [
            "Cor da luz: RGB",
            "Otimize sua máquina com a tecnologia DDR5.",
            "Memória com formato DIMM.",
            "Consegue uma velocidade de 6000 MHz.",
            "Apta para computadores de mesa.",
            "Linha Trident Z5 RGB.",
            "Compatível com Intel Core.",
        ],
        img: 'https://http2.mlstatic.com/D_NQ_NP_970150-MLA81686784123_122024-O.webp',
        preco: 1084,
        categoria: 'memoria',
    },
    {
        id: '28ceca0d-8efe-4fc6-9702-9768aa87c678',
        nome: 'Processador Ryzen 7 7800x3d de 4,2 Ghz Am5 8 CPU de 16 threads',
        detalhes: [
            "Modelo: 7800X3D",
            "É ideal para jogadores e criadores de conteúdo que precisam de um instrumento de alto desempenho",
            "Memória cache de 96 MB, rápida e volátil.",
            "Suporta RAM DDR5.",
            "Processador inovador desenvolvido sob altos padrões de qualidade.",
        ],
        img: 'https://http2.mlstatic.com/D_NQ_NP_858257-MLU54971162381_042023-O.webp',
        preco: 4199,
        categoria: 'cpu',
    },
    {
        id: 'e022d16f-6a2f-4d97-a5c8-054a4618b113',
        nome: 'HD Exos 7e10 4tb 3.5 Sata Iii 6gb/s 256mb 7200rpm',
        detalhes: [
            "Armazena grandes quantidades de dados com a sua capacidade de 6TB.",
            "Tamanho de 3.5.",
            "Interface de conexão: SATA III.",
            "Otimizado para configurações RAID.",
            "Versão: Enterprise.",
        ],
        img: 'https://http2.mlstatic.com/D_Q_NP_2X_874008-MLU71092967523_082023-E.webp',
        preco: 1570,
        categoria: 'hd',
    },
    {
        id: '9c0c8172-4f02-4757-b09d-06ec3d3df0e4',
        nome: 'Memória DDR5 16gb 5600Mhz CL40 Kingston Fury Beast KF556C40BBA/16 Udimm',
        detalhes: [
            "Cor da luz: RGB",
            "Módulo único de 16 GB.",
            "Capacidade total de 16 GB.",
            "Tecnologia DDR5.",
            "Velocidade de 5600MHz.",
            "Iluminação RGB integrada.",
            "Ideal para gamers e profissionais criativos.",
        ],
        img: 'https://http2.mlstatic.com/D_NQ_NP_849328-MLA82500415779_022025-O.webp',
        preco: 479,
        categoria: 'memoria',
    },
    {
        id: 'd2478994-4329-466c-9f7b-4d6814268002',
        nome: 'Placa de Vídeo Msi Geforce Rtx 4090 Gaming Trio 24gb Gddr6x',
        detalhes: [
            "Fabricante: Nvidia",
            "Tipo de memória gráfica GDDR6X",
            "Interface com a placa-mãe: PCI-Express 4.0",
            "Tamanho da memória: 24 GB",
            "Conectividade: 3 DisplayPort 1.4a, HDMI 2.1a",
            "Cor: preto",
        ],
        img: 'https://http2.mlstatic.com/D_NQ_NP_889732-MLB76523631937_052024-O.webp',
        preco: 24500,
        categoria: 'gpu',
    },
    {
        id: 'd2478994-4329-466c-9f7b-4d6814268006',
        nome: 'Fonte Corsair Series Rm1000e Full Modular 1000w 80 Plus Gold',
        detalhes: [
            "Potência de saída de 1000W.",
            "Sistema de fiação modular para maior flexibilidade.",
            "Tipo de fonte ATX.",
            "Com certificação de eficiência 80 Plus Gold.",
            "Diâmetro do ventilador de 120mm.",
            "Refrigeração por ar.",
        ],
        img: 'https://http2.mlstatic.com/D_NQ_NP_933239-MLU78142977710_082024-O.webp',
        preco: 1077.5,
        categoria: 'fonte',
    },
    {
        id: 'cd08d58a-a873-4ffb-95ab-a26a468cd74a',
        nome: 'Fonte Thermaltake Toughpower 850w Gf A3 80 Plus Gold Pfc',
        detalhes: [
            "Marca da fonte Thermaltake.",
            "Potência de saída 850 W.",
            "Modelo da fonte PS-TPD-0850FNFAGB-H.",
            "Tipo de fonte ATX.",
            "Com iluminação RGB: Não",
            "Quantidade de conectores HDD: 12.",
            "Certificação de eficiência PS-TPD-0850FNFAGB-H",
        ],
        img: 'https://http2.mlstatic.com/D_NQ_NP_724540-MLU73267336875_122023-O.webp',
        preco: 1314,
        categoria: 'fonte',
    },
    {
        id: 'dda774e9-b6de-487b-adbb-a4ee960641c1',
        nome: 'Processador gamer Intel Core i9-14900K',
        detalhes: [
            "Modelo: i9-14900K",
            "Memória cache de 36 MB, rápida e volátil.",
            "Processador gráfico Gráficos Intel® UHD 770.",
            "Suporta memória RAM DDR4.",
            "Sua potência é de 125 W.",
            "Conta com 32 filos que favorecem a execução de múltiplos programas a cada vez.",
        ],
        img: 'https://http2.mlstatic.com/D_NQ_NP_774021-MLA72440589472_102023-O.webp',
        preco: 3920,
        categoria: 'cpu',
    },
];