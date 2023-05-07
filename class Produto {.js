class Produto {
    constructor(codigo, descricao, preco) {
    this.codigo = codigo;
    this.descricao = descricao;
    this.preco = preco;}

produto1 = new Produto("Arroz", 10.00 )
produto2 = new Produto("Macarrão", 5.00)
produto3 = new Produto("óleo", 8.00)
produto4 = new Produto("Alho", 15.00)

cliente1 = new Cliente("123.456.789.01", "Abascareu", "Rua Jucenas, 123")
cliente2 = new Cliente("123.456.789.02", "Jubileu", "Rua Madeira, 54")

reajuste(Produto) {
    this.preco *=1.1
}
}