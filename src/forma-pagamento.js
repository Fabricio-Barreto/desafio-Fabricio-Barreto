class FormaDePagamento {
    constructor() {}

    //Método para escolher o tipo de pagamento.
    tipoPagamento(string) {
        switch (string) {
            case 'dinheiro':
                return 0.95;
            case 'debito':
                return 1;
            case 'credito':
                return 1.03;
            //verificando se o código do pagamento não existe, caso não entre em nenhum dos case, lançará uma exceção.  
            default:
                throw 'Forma de pagamento inválida!'
        }
    }
}

export { FormaDePagamento }