class Rei extends Sprite{

    constructor(letra,numero, tabulerio, cor=1){
        super(letra,numero,tabulerio,cor);
    }

    verificaValidadeCasa(letra,numero){
        if(letra === this.letra+1)
            return true;
        else
            return false;
    }

}