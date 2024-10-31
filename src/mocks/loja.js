import camisetaAdidas from '../../assets/produtos/camiseta1.jpg';
import camisetaNike from '../../assets/produtos/camisetaNike.png';
import moletomLevis from '../../assets/produtos/moletom1.png';
import mangaLonga from '../../assets/produtos/mangaLonga.png';
import tenisNike from '../../assets/produtos/tenis1.png';
import tenisAdidas from '../../assets/produtos/tenis2.png';
import calcaCargo from '../../assets/produtos/calca1.png';
import shortsJeans from '../../assets/produtos/shorts1.png';

const loja = {
       
    tela: {
        titulo:"Nossos Produtos",
        lista: [
            {
                id: 1,
                imagem: camisetaAdidas,
                titulo: "Camiseta Adidas Trefoil",
                subTitulo: "Melhor preço via Dafiti",
                valor: "R$ 99,90",
                disponivel: "Disponível em 5 lojas"
            },

            {
                id: 2,
                imagem: camisetaNike,
                titulo: "Camiseta Nike SB",
                subTitulo: "Melhor preço via Amazon",
                valor: "R$ 85,40",
                disponivel: "Disponível em 8 lojas"
            },

            {
                id: 3,
                imagem: moletomLevis,
                titulo: "Moletom Levi's Standard",
                subTitulo: "Melhor preço via C&A",
                valor: "R$ 349,90",
                disponivel: "Disponível em 5 lojas"
            },

            {
                id: 4,
                imagem: mangaLonga,
                titulo: "Camiseta Manga Longa",
                subTitulo: "Melhor preço via Renner",
                valor: "R$ 119,90",
                disponivel: "Disponível em 7 lojas"
            },

            {
                id: 5,
                imagem: tenisNike,
                titulo: "Tênis Nike Air Force",
                subTitulo: "Melhor preço via Centauro",
                valor: "R$ 625,90",
                disponivel: "Disponível em 6 lojas"
            },

            {
                id: 6,
                imagem: tenisAdidas,
                titulo: "Tênis Adidas Duramo 10",
                subTitulo: "Melhor preço via Netshoes",
                valor: "R$ 399,90",
                disponivel: "Disponível em 5 lojas"
            },

            {
                id: 7,
                imagem: calcaCargo,
                titulo: "Calça Cargo Masculina",
                subTitulo: "Melhor preço via Dafiti",
                valor: "R$ 155,50",
                disponivel: "Disponível em 3 lojas"
            },

            {
                id: 8,
                imagem: shortsJeans,
                titulo: "Shorts Jeans Feminino",
                subTitulo: "Melhor preço via Amazon",
                valor: "R$ 89,90",
                disponivel: "Disponível em 4 lojas"
            },
        ]
    }
}

export default loja;