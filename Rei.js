class Rei extends Sprite{

    constructor(letra,numero, tabuleiro, cor=1){
        super(letra,numero,tabuleiro,cor);
    }

    verificaValidadeCasa(letra,numero){
        if((Math.abs(letra - this.letra) <=1)&&
            (Math.abs(numero - this.numero)<=1))
            return true;
        else
            return false;
    }

}