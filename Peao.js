class Peao extends Sprite{

    constructor(letra,numero, tabuleiro, cor=1){
        super(letra,numero,tabuleiro,cor);
    }

    verificaValidadeCasa(letra,numero){
        console.log(numero+" "+Number(this.numero+1));
        if(this.cor)
        {
            if(numero === this.numero-1)
                return true;
            else
                return false;
        }else
        {
            if(numero === this.numero+1)
                return true;
            else
                return false;
        }
    }

}