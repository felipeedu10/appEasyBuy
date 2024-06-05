import Logo from '../../assets/logo2.png';
import Branca from '../../assets/produtos/corBranca.png'
import Preta from '../../assets/produtos/corPreta.png'
import Cinza from '../../assets/produtos/corCinza.png'

const produto = {
    topo: {
        titulo: "Detalhes do produto",
    },
    detalhes: {
        nome: "Camiseta Adidas Trefoil",
        logo: Logo,
        detalhes: "Camiseta Adidas masculina na cor preta, 100% algodão",
        preco: "Melhor preço: R$99,90",
        botao: "Lista de Desejos",
    },
    itens: {
        titulo:"Cores disponíveis:",
        lista: [
            {
                cor: "Preto",
                imagem: Preta, 
            },

            {
                cor: "Cinza",
                imagem: Cinza,
            },

            {
                cor: "Branco",
                imagem: Branca,
            },
        ]
    }
}

export default produto;