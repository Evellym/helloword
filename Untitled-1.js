// EXERCÍCIO 1
class Produto {
    constructor(codigo, descricao, preco) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.preco = preco;}
}
class Cliente {
        constructor(cpf, nome, endereco) {
            this.cpf = cpf;
            this.nome = nome;
            this.endereco = endereco;}
    }

class Venda {
    constructor(id, data, cliente, produto) {
        this.id = id;
        this.data = data;
        this.cliente = cliente;
        this.produto = produto;}
}

// EXERCÍCIO 2
produto1 = new Produto("Arroz", 10.00 )
produto2 = new Produto("Macarrão", 5.00)
produto3 = new Produto("óleo", 8.00)
produto4 = new Produto("Alho", 15.00)

cliente1 = new Cliente("123.456.789.01", "Abascareu", "Rua Jucenas, 123")
cliente2 = new Cliente("123.456.789.02", "Jubileu", "Rua Madeira, 54")


//EXERCÍCIO 3
class Produto {
    constructor(codigo, descricao, preco) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.preco = preco;}

    reajuste() {
        this.produtos.map(produto => {
          produto.preco *= 1.1;
          return produto;
        });
      }
    mostrarProdutos(){
        console.log(JSON.stringify(this.produto))
    }
} 

console

//EXERCÍCIO 4
class Venda {
    constructor(id, data, cliente, produto) {
        this.id = id;
        this.data = data;
        this.cliente = cliente;
        this.produto = produto;}


}