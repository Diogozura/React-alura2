export default class ArrayDeNotas{
    constructor(){
        this.notas = []
    }

    adicionarNota(titulo, texto, categoria){
        const novaNota = new nota(titulo, texto, categoria)
        this.notas.push(novaNota)
    }

    apagarNotas(indice){
        this.notas.slice(indice, 1);
    }
}

class nota{
    constructor(titulo, texto, categoria){
        this.titulo = titulo
        this.texto = texto
        this.categoria = categoria
    }
}