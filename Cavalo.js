class Cavalo extends Sprite{

    constructor(letra,numero, tabulerio, cor=1){
        super(letra,numero,tabulerio,cor);
    }

    verificaValidadeCasa(letra,numero){
        if((Math.abs(letra - this.letra) === 2 && Math.abs(numero - this.numero) === 1)
            || (Math.abs(letra - this.letra) === 1 && Math.abs(numero - this.numero) === 2))
            return true;
        else
            return false;
    }

}