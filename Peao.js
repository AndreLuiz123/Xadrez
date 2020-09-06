class Peao extends Sprite{

    constructor(letra,numero, tabuleiro, cor=1){
        super(letra,numero,tabuleiro,cor);
    }

    verificaValidadeCasa(letra,numero){
        console.log(numero+" "+Number(this.numero+1));
        if(numero === this.numero-1)
            return true;
        else
            return false;
    }

}