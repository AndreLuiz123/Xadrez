class Tabuleiro{

    constructor(linhas, colunas, canvas){
        this.canvas = canvas;
        this.linhas = linhas;
        this.colunas = colunas; 
        this.w = this.canvas.width/this.colunas;
        this.h = this.canvas.height/this.linhas;

        this.grid = [];
    }

    criaGrid(){
        for(var i=0; i<this.linhas; i++)
        {
            this.grid[i] = [];
            for(var j=0; j<this.colunas; j++)
            {
                this.grid[i][j] = 0;
            }
        }
    }

    desenhar(ctx){
        ctx.strokeStyle = "black";
        
        for(var i=0; i<this.colunas; i++)
        {
            for(var j=0; j<this.linhas; j++)
            {
                if(!((i%2===0 && j%2===0)||(i%2!=0 && j%2!=0)))
                {
                    ctx.fillStyle = "black";
                    ctx.fillRect(i*this.w,j*this.h,this.w,this.h);
                }

                ctx.strokeStyle = "black";
                ctx.strokeRect(i*this.w,j*this.h,this.w,this.h);

            }
        }   
    }

    
}