class Cavalo extends Sprite{

    constructor(letra,numero, tabulerio, cor=1){
        super(letra,numero,tabulerio,cor);
    }

    verificaValidadeCasa(letra,numero){
        if((Math.abs(letra - this.letra) === 3 && Math.abs(numero - this.numero) === 1)
            || (Math.abs(letra - this.letra) === 1 && Math.abs(numero - this.numero) === 3))
            return true;
        else
            return false;
    }

}