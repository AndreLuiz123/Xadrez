class Sprite{

    constructor(letra,numero, tabulerio, cor=1){
        this.letra = letra;
        this.numero = numero;

        this.tabuleiroW = tabulerio.w;
        this.tabuleiroH = tabulerio.h;

        this.cor = cor;

        this.w = tabulerio.w/2;
        this.h = tabulerio.h/2;
        this.x = this.letra*tabulerio.w + tabuleiro.w/4;
        this.y = this.numero*tabulerio.h + tabuleiro.h/4;
    }


    desenhar(ctx){
        if(this.cor)
        ctx.fillStyle = "red";
        else
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x,this.y,this.w,this.h);
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
    }

}