import { Produtos } from "./produtos.js"
import { FormaDePagamento } from "./forma-pagamento.js";

class CaixaDaLanchonete{

    constructor() {
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        var valorTotal = 0;
        var ItensSemQuantidade = [];
        const formaDePagamento = new FormaDePagamento();
        const produtos = new Produtos();

        itens.forEach(item => {
            var separarItemQuantidade = item.split(',')
            ItensSemQuantidade.push(separarItemQuantidade[0]);
        })


        try {
            //Verificando se a String de pedidos esta vazia, se tiver lanca uma excecao
            if (!itens.length) {
                throw 'Não há itens no carrinho de compra!'
            }


            itens.forEach(item => {
                var separarItemQuantidade = item.split(',')
    
                //Verificando se o pedido de chantily havera cafe, se nao tiver vai retornar uma excecao
                if (separarItemQuantidade[0] == 'chantily' && ItensSemQuantidade.every(item => item != 'cafe')){
                    throw 'Item extra não pode ser pedido sem o principal';
                }

                //Verificando se o pedido queijo havera sanduiche, se nao tiver vai retorna uma excecao
                if (separarItemQuantidade[0] == 'queijo' && ItensSemQuantidade.every(item => item != 'sanduiche')){
                    throw 'Item extra não pode ser pedido sem o principal';
                }

                //Verificando se algum pedido esta zerado, se tiver vai retorna uma excecao
                if (separarItemQuantidade[1] == 0) {
                    throw 'Quantidade inválida!';
                }

                valorTotal += produtos.valorProdutos(separarItemQuantidade[0]) * separarItemQuantidade[1];
            });
            
            return 'R$ ' + (valorTotal * formaDePagamento.tipoPagamento(metodoDePagamento)).toFixed(2).replace('.',',');

        } catch (error) {
            return error
        }

    }

}


export { CaixaDaLanchonete };
