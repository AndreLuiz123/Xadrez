class Torre extends Sprite{

    constructor(letra,numero, tabuleiro, cor=1){
        super(letra,numero,tabuleiro,cor);
    }

    verificaValidadeCasa(letra,numero){
        if((Math.abs(letra - this.letra) === 0 && Math.abs(numero - this.numero) != 0)||
        (Math.abs(letra - this.letra) != 0 && Math.abs(numero - this.numero) === 0))
            return true;
        else
            return false;
    }

}