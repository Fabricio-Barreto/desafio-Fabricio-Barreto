class Produtos {
    constructor() {

    }

    //Método para escolher o valor do item pedido.
    valorProdutos(string){
        switch(string) {
            case 'cafe':
                return 3.00;
            case 'chantily':
                return 1.50;
            case 'suco':
                return 6.20
            case 'sanduiche':
                return 6.50
            case 'queijo':
                return 2.00    
            case 'salgado':
                return 7.25   
            case 'combo1':
                return 9.50
            case 'combo2':
                return 7.50
            //verificando se o código do item não existe, caso não entre em nenhum dos case, lançará uma exceção.  
            default:
                throw "Item inválido!"    
        }
    }
}


export { Produtos }