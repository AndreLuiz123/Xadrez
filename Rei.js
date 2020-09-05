class Rei extends Sprite{

    constructor(letra,numero, tabulerio, cor=1){
        super(letra,numero,tabulerio,cor);
    }

    verificaValidadeCasa(letra,numero){
        if((Math.abs(letra - this.letra) <=1)&&
            (Math.abs(numero - this.numero)<=1))
            return true;
        else
            return false;
    }

}