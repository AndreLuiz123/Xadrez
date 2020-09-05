class Sprite{

    constructor(letra,numero, tabuleiro, cor=1){
        this.letra = letra;
        this.numero = numero;

        this.tabuleiroW = tabuleiro.w;
        this.tabuleiroH = tabuleiro.h;

        this.cor = cor;

        this.w = tabuleiro.w/2;
        this.h = tabuleiro.h/2;
        this.x = this.letra*tabuleiro.w + tabuleiro.w/4;
        this.y = this.numero*tabuleiro.h + tabuleiro.h/4;
    }


    desenhar(ctx){
        if(this.cor)
        ctx.fillStyle = "red";
        else
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y,this.w,this.h);
    }

    calculaLetra(x){
        var valorX = (x)%this.tabuleiroW;
        var novoX = (x - valorX)/this.tabuleiroW;
        console.log(novoX);
        return novoX;
    }

    calculaNumero(y){
        var valorY = (y)%this.tabuleiroH;
        var novoY = (y - valorY)/this.tabuleiroH;
        console.log(novoY);
        return novoY;
    }


    calculaCasa(){
        console.log(this.letra+" "+this.numero);
        this.letra = this.calculaLetra(this.x);
        this.numero = this.calculaNumero(this.y);
    }

    reposicionaPeca(){
        
        var valorX = (this.x+this.w/2)%this.tabuleiroW;
        var novoX = (this.x - valorX);
        novoX = novoX + this.tabuleiroW/2;

        var valorY = (this.y+this.h/2)%this.tabuleiroH;
        var novoY = (this.y - valorY);
        novoY = novoY + this.tabuleiroH/2;
       // console.log(novoX+" "+novoY);

        this.x = novoX;
        this.y = novoY;
        this.calculaCasa();
    }

    voltaPecaLocalOriginal(){
        this.x = this.letra*this.tabuleiroW + this.tabuleiroW/4;
        this.y = this.numero*this.tabuleiroH + this.tabuleiroH/4;              
    }

}